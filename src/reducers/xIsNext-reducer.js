export default (state = true, action) => {
  switch (action.type) {
    case 'TOGGLE_TURN':
      return !state;
    default:
      return state;
  }
};