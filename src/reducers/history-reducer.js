export default (state = [{squares: Array(9).fill(null), positions: [null]}], action) => {
  const { history, squares, positions } = action;
  switch (action.type) {
    case 'ADD_MOVE':
      const newState = history.concat([{
        squares: squares,
        positions: positions,
      }]);
      return newState;
    default:
      return state;
  }
};