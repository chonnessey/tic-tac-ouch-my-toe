import historyReducer from '../../reducers/history-reducer';

describe("historyReducer", () => {
  let action;

  test('Should return default state if no action type is recognized', () => {
    expect(historyReducer([], {type: null})).toEqual([]);
  });
  
  test('Should return a concatanated copy of state with ADD_MOVE action', () => {
    action = {
      type: 'ADD_MOVE',
      squares: [1],
      positions: [1],
    };
    expect(historyReducer([], action)).toEqual([{
      squares: [1],
      positions: [1],
    }]);
  });
});