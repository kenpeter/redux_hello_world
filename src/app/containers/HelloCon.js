
import { connect } from 'react-redux';
import Hello from "../components/Hello";


const mapStateToProps = (state, ownProps) => {
  return {
    message: state.HelloWorldReducer.message
  }
}

// const
// dispatch
// own props
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      console.log("on click?");
      dispatch({ type: "HELLO_WORLD" })
    }
  }
}

// const
// connect
// map them to Hello component
const HelloCon = connect(
  // state to props
  mapStateToProps,

  // dispatch to props
  mapDispatchToProps
)(Hello);

export default HelloCon;
