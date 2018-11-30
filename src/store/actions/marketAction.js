import axios from 'axios';

export function fetchMarketData(){
  return dispatch => {
    axios.get('http://apicoincap.eu-central-1.elasticbeanstalk.com/market').then((data) => {
      dispatch({
        type: 'FETCH_MARKET_DATA',
        data: data,
      });
      dispatch({
        type: 'SET_LOADING',
        payload: { market: false },
      });
    })
  }
}
