export function marketReducer(state = {}, action) {
  switch (action.type) {
    case 'FETCH_MARKET_DATA':
      return action.data.data.data;
    default:
      return state
  }
}
