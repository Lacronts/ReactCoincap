import { combineReducers } from 'redux';
import { coins } from './coins';
import { historical } from './historical';
import { loading } from './loading';
import { market } from './market';
import { pagination } from './pagination';
import { currency } from './currency';
import { setSortBy } from './sort';

export const rootReducer = combineReducers({
  coins: coins,
  market: market,
  historical: historical,
  isLoading: loading,
  pagination: pagination,
  currency: currency,
  sort: setSortBy,
})
