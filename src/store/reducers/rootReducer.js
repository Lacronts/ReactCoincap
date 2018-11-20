import { combineReducers } from 'redux';
import { coinReducer } from './coinReducer';
import { loadingReducer } from './loadingReducer';
import { marketReducer } from './marketReducer';

export const rootReducer = combineReducers({
  coins: coinReducer,
  market: marketReducer,
  isLoading: loadingReducer,
})
