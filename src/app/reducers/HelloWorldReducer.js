export default const HelloWordReducer = (state = { message: 'HELLO_WORLD init' }, action) => {
  switch (action.type) {
    case "HELLO_WORLD":
      return Object.assign({}, state, { message: 'HELLO_WORLD is working' });
    default:
      return state;
  }
}

