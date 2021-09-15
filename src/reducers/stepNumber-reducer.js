export default (state = 0, action) => {
  const { stepNumber } = action;
  switch (action.type) {
    case 'ADD_STEP':
      return stepNumber;
    default:
      return state;
  }
};