import xIsNextReducer from '../../reducers/xIsNext-reducer';

describe("xIsNextReducer", () => {
  test('Should return default state if no action type is recognized', () => {
    expect(xIsNextReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle xIsNext state to true', () => {
    expect(xIsNextReducer(false, { type: 'TOGGLE_TURN' })).toEqual(true);
  });
});