import { CHANGE_CURRENCY } from '../constants/currency';

export function currency(state = 'USD', action) {
  switch (action.type) {
    case CHANGE_CURRENCY:
      return action.currency;
    default:
      return state;
  }
}
