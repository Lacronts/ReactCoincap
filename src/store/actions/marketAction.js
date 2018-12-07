import axios from 'axios';
import { FETCH_MARKET_DATA } from '../constants/market';
import { SET_LOADING } from '../constants/loading';

export function fetchMarketData(){
  return dispatch => {
    axios.get('http://apicoincap.eu-central-1.elasticbeanstalk.com/market').then((data) => {
      dispatch({
        type: FETCH_MARKET_DATA,
        data: data,
      });
      dispatch({
        type: SET_LOADING,
        payload: { market: false },
      });
    })
  }
}
