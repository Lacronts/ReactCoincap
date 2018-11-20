import axios from 'axios';

export function fetchMarketData(){
  return dispatch => {
    axios.get('market.json').then((data) => {
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
