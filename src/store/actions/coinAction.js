import axios from 'axios';

export function fetchCoinData(){
  return async dispatch => {
    const data = await Promise.all([
      getCryptoList(2500),
      getConvertCurrency(['USD','RUB','BTC','ETH','LTC','BCH','XRP'])
    ]);
    const result = appendCryptoCourses(...data);
      dispatch({
        type: 'FETCH_COIN_DATA',
        data: result,
      });
      dispatch({
        type: 'SET_LOADING',
        payload: { coins: false },
      });
  }
};

export function changeCurrency(value){
  return {
    type: 'CHANGE_CURRENCY',
    currency: value,
  }
}

async function getCryptoList(limit) {
  limit = limit || 100;
  const list = await axios.get(`http://apicoincap.eu-central-1.elasticbeanstalk.com/listings?limit=${limit}`);
  return list.data.data;
}

async function getConvertCurrency(symbols) {
  const currensies = await axios.get(`http://apicoincap.eu-central-1.elasticbeanstalk.com/price`, {params: {symbols}});
  return currensies.data;
}

function appendCryptoCourses(list, courses) {
  for (const id in list) {
    const coin = list[id];
    for (const currency in courses) {
      const course = courses[currency];
      coin.quote[currency] = {
        price: (coin.symbol === currency) ? 1 : coin.quote.USD.price * course,
        volume_24h: coin.quote.USD.volume_24h * course,
        market_cap: coin.quote.USD.market_cap * course,
        percent_change_1h: coin.quote.USD.percent_change_1h,
        percent_change_24h: coin.quote.USD.percent_change_24h,
        percent_change_7d: coin.quote.USD.percent_change_7d,
      };
    }
  }
  return list;
};
