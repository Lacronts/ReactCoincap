import React from 'react';
import {
  Header,
  Container,
} from 'semantic-ui-react';

const style = {
  mt1: {
    marginTop: '1em',
  }
}

const About = () => (
  <div style={style.mt1}>
    <Header as='h1' textAlign='center'>
      React CoinCap
    </Header>
    <Container text textAlign='justified' style={style.mt1}>
      React CoinCap displays market cap ranking, price, details, and more
      for the all cryptocurrencies based on overall market cap. Built with
      <a href="https://reactjs.org" target='_blank' rel='noopener noreferrer'> React</a>,
        React Router and
      <a href="https://redux.js.org/" target='_blank' rel='noopener noreferrer'> Redux</a>.
        Cryptocurrency data obtained from the
      <a href="https://pro.coinmarketcap.com" target='_blank' rel='noopener noreferrer'> CoinMarketCap Pro API</a>.
    </Container>
  </div>
);

export default About;
