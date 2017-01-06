// what is reducer
// reducer is like listener
const HelloWorldReducer = (state = { message: 'HELLO_WORLD init' }, action) => {
  switch (action.type) {
    case "HELLO_WORLD":
      console.log('reducer: hello world working');
      return Object.assign({}, state, { message: 'HELLO_WORLD is working' });
    default:
      console.log('hello world reducer: default');
      return state;
  }
}


export default HelloWorldReducer;
