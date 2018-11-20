export function loadingReducer(state = {coins: true, market: true}, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return {...state, ...action.payload}
    default:
      return state;
  }
}
