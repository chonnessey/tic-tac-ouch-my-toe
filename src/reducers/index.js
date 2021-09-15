import stepNumberReducer from './reducers/stepNumber-reducer'
import xIsNextReducer from './reducers/xIsNext-reducer'
import historyReducer from './reducers/history-reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  xIsNext: xIsNextReducer,
  history: historyReducer,
  stepNumber: stepNumberReducer,
})

export default rootReducer;