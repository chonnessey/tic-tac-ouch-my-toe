import rootReducer from '../../reducers/index';
// import { createStore } from 'redux';
// import stepNumberReducer from '../../reducers/stepNumber-reducer'
// import xIsNextReducer from '../../reducers/xIsNext-reducer'
// import historyReducer from '../../reducers/history-reducer'

// let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      xIsNext: true,
      history: [],
      stepNumber: 0,
    });
  });

});