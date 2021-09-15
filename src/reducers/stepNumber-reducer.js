export default (state = 0, action) => {
  switch (action.type) {
    case 'ADD_STEP':
      return state + 1;
    default:
      return state;
  }
};