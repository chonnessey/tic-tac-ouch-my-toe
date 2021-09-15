import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import stepNumberReducer from '../../reducers/stepNumber-reducer'
import xIsNextReducer from '../../reducers/xIsNext-reducer'
import historyReducer from '../../reducers/history-reducer'

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      xIsNext: true,
      history: [],
      stepNumber: 0,
    });
  });

  test('Check that initial state of xIsNextReducer matches root reducer', () => {
    expect(store.getState().xIsNext).toEqual(xIsNextReducer(true, { type: null }));
  });

  test('Check that initial state of historyReducer matches root reducer', () => {
    expect(store.getState().history).toEqual(historyReducer([], { type: null }));
  });
  
  test('Check that initial state of stepNumberReducer matches root reducer', () => {
    expect(store.getState().stepNumber).toEqual(stepNumberReducer(0, { type: null }));
  });

  test('Check that TOGGLE_TURN action works for xIsNextReducer and root reducer', () => {
    const action = {
      type: 'TOGGLE_TURN'
    }
    store.dispatch(action);
    expect(store.getState().xIsNext).toEqual(xIsNextReducer(true, action));
  });

  test('Check that ADD_STEP action works for stepNumberReducer and root reducer', () => {
    const action = {
      type: 'ADD_STEP'
    }
    store.dispatch(action);
    expect(store.getState().stepNumber).toEqual(stepNumberReducer(0, action));
  });

});