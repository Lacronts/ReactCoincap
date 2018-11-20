export function coinReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_COIN_DATA':
      return action.data.data.data;
    default:
      return state
  }
}
