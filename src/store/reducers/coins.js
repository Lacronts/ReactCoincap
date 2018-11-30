export function coins(state = [], action) {
  switch (action.type) {
    case 'FETCH_COIN_DATA':
      return action.data;
    default:
      return state
  }
};
