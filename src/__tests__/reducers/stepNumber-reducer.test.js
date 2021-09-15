import stepNumberReducer from '../../reducers/stepNumber-reducer';

describe("stepNumberReducer", () => {
  test('Should return default state if no action type is recognized', () => {
    expect(stepNumberReducer(0, {type: null})).toEqual(0);
  });
  
  test('Should return state + 1 with ADD_STEP action', () => {
    expect(stepNumberReducer(0, {type: 'ADD_STEP'})).toEqual(1);
  });
});