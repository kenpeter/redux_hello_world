
import { connect } from 'react-redux';
import Hi from "../components/Hi";


const mapStateToProps = (state, ownProps) => {
  return {
    message: state.HiReducer.message
  }
}

// const
// dispatch
// own props
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      console.log("HiCon.js, hi");
      dispatch({ type: "HI" })
    }
  }
}

// const
// connect
// map them to Hello component
const HiCon = connect(
  // state to props
  mapStateToProps,

  // dispatch to props
  mapDispatchToProps
)(Hi);

export default HiCon;
