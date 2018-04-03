// connect is function that returnes
function connect(mapStateToProps, mapDispatchToProps) {
  return function(WrappedComponent) {
    // will return container component
    return class ANONcontainer extends React.Component {
      render() {
        return <WrappedComponent {...this.props} />;
      }
    }
  };
}
