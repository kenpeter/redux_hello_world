const mapStateToProps = (state, ownProps) => {
  return {
    message: state.HelloWordReducer.message
  }
}

// const
// dispatch
// own props
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({ type: "HELLO_WORLD" })
    }
  }
}

// const
// connect
// map them to Hello component
export const HelloWorld = connect(
  // state to props
  mapStateToProps,

  // dispatch to props
  mapDispatchToProps
)(App);
