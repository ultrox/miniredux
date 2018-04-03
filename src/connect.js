function connect(mapStateToProps, mapDispatchToProps) {
  // function which takes a React component as input and returns a new enhanced React component.
  return function(WrappedComponent) {
    // will return container component
    return class ANONcontainer extends React.Component {
      render() {
        return <WrappedComponent 
          {...this.props} 
          {...mapStateToProps(store.getState(), this.props)}
          {...mapDispatchToProps(store.dispatch, this.props)}
          />
      }
    }
  };
}
