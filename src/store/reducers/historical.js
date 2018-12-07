import { FETCH_HISTORICAL_DATA } from '../constants/historical';

export function historical(state = [], action) {
  switch (action.type) {
    case FETCH_HISTORICAL_DATA:
      const data = action.payload.data.Data;
      if (Array.isArray(data)) return data;
      return [];
    default:
      return state
  }
};
