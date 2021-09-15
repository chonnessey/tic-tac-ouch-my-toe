export default (state = true, action) => {
  const { step } = action
  switch (action.type) {
    case 'TOGGLE_TURN':
      return (step % 2) === 0;
    default:
      return state;
  }
};