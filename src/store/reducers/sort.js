export function setSortBy(state = {column: '', orders: 'desc'}, action) {
  switch (action.type) {
    case 'CHANGE_SORTBY':
    const column = action.column;
    const orders = action.column === state.column
                    ? (state.orders === 'desc' ? 'asc' : 'desc')
                    : 'desc';

      return {
        column: column,
        orders: orders
      };
    default:
      return state;
  }
}
