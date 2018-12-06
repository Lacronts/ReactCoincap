export function loading(state = {coins: true, market: true, historical: true}, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return {...state, ...action.payload}
    default:
      return state;
  }
}
