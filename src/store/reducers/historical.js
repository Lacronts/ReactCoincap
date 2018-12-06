export function historical(state = [], action) {
  switch (action.type) {
    case 'FETCH_HISTORICAL_DATA':
      const data = action.payload.data.Data;
      if (Array.isArray(data)) return data;
      return [];
    case 'CLEAR_HISTORICAL_DATA':
      return [];
    default:
      return state
  }
};
