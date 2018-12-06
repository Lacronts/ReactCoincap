import axios from 'axios';

export function fetchHistoricalData(coin, limit){
  limit = limit || 30;
  return dispatch => {
    dispatch({
      type: 'SET_LOADING',
      payload: { historical: true },
    });
    axios.get('http://apicoincap.eu-central-1.elasticbeanstalk.com/historical', {
      params: {
        from: coin,
        limit: limit,
      }
    }).then((data) => {
      dispatch({
        type: 'FETCH_HISTORICAL_DATA',
        payload: data,
      });
      dispatch({
        type: 'SET_LOADING',
        payload: { historical: false },
      });
    })
  }
};

export function clearHistoricalData(){
  return {
    type: 'CLEAR_HISTORICAL_DATA',
  }
}
