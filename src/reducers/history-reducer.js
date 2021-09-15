export default (state = [], action) => {
  console.log("first", action);
  const { squares, positions } = action;
  switch (action.type) {
    case 'ADD_MOVE':
      const newState = state.concat([{
        squares: squares,
        positions: positions,
      }]);
      return newState;
    default:
      return state;
  }
};