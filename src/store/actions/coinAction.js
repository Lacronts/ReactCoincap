import axios from 'axios';

export function fetchCoinData(){
  return dispatch => {
    axios.get('http://localhost:3000/listings.json').then((data) => {
      dispatch({
        type: 'FETCH_COIN_DATA',
        data: data,
      });
      dispatch({
        type: 'SET_LOADING',
        payload: { coins: false },
      });
    })
  }
}
