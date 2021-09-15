import historyReducer from '../../reducers/history-reducer';

describe("historyReducer", () => {
  test('Should return default state if no action type is recognized', () => {
    expect(historyReducer([], {type: null})).toEqual([]);
  });
  
  // test('Should return state + 1 with ADD_STEP action', () => {
  //   expect(stepNumberReducer(0, {type: 'ADD_STEP'})).toEqual(1);
  // });
});