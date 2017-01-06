// what is reducer
// reducer is like listener
const HiReducer = (state = { message: 'HI init' }, action) => {
  switch (action.type) {
    case "HI":
      console.log('reducer: hi working');
      return Object.assign({}, state, { message: 'hi is working' });
    default:
      console.log('hi reducer: default');
      return state;
  }
}


export default HiReducer;
