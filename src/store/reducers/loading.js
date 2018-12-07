import { SET_LOADING } from '../constants/loading';

export function loading(state = {coins: true, market: true}, action) {
  switch (action.type) {
    case SET_LOADING:
      return {...state, ...action.payload}
    default:
      return state;
  }
}
