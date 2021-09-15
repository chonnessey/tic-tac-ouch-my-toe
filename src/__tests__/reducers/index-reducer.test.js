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

  test('Check that initial state of ticketListReducer matches root reducer', () => {
    expect(store.getState().xIsNext).toEqual(xIsNextReducer(true, { type: null }));
  });

  // test('Check that initial state of ticketListReducer matches root reducer', () => {
  //   expect(store.getState().masterTicketList).toEqual(ticketListReducer(undefined, { type: null }));
  // });
  
  // test('Check that initial state of formVisibleReducer matches root reducer', () => {
  //   expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  // });

});