import { FETCH_MARKET_DATA } from '../constants/market';

export function market(state = {}, action) {
  switch (action.type) {
    case FETCH_MARKET_DATA:
      return action.data.data.data;
    default:
      return state
  }
}
