function connect(mapStateToProps, mapDispatchToProps) {
  // function which takes a React component as input and returns a new enhanced React component.
  return function(WrappedComponent) {
    // will return container component
    return class ANONcontainer extends React.Component {
      // subscribe to the store updates
      componentDidMount() {
        this.unsubscribe = store.subscribe(this.handleChange.bind(this))
      }
      handleChange() {
        this.forceUpdate()
      }
      render() {
        return <WrappedComponent 
          {...this.props} 
          {...mapStateToProps(store.getState(), this.props)}
          {...mapDispatchToProps(store.dispatch, this.props)}
        />
      }
      componentWillUnmount() {
        this.unsubscribe()
      }
    }
  };
}
