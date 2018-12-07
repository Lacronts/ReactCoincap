import axios from 'axios';
import { FETCH_HISTORICAL_DATA } from '../constants/historical';

export function fetchHistoricalData(coin, limit){
  limit = limit || 31;
  return dispatch => {
    axios.get('http://apicoincap.eu-central-1.elasticbeanstalk.com/historical', {
      params: {
        from: coin,
        limit: limit,
      }
    }).then((data) => {
      dispatch({
        type: FETCH_HISTORICAL_DATA,
        payload: data,
      });
    })
  }
};
