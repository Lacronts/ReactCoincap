import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
} from 'semantic-ui-react';
import './styles/Header.css';

const style = (mobile) =>  ({
  h1: {
    fontSize: mobile ? '2rem' : '3rem',
    fontWeight: 'normal',
    marginBottom: 0,
    marginTop: mobile ? '1rem' : '1rem',
  },
  h2: {
    fontSize: mobile ? '1.5rem' : '1.7rem',
    fontWeight: 'normal',
    marginTop: '1rem',
    marginBottom: '1rem',
    cursor: 'pointer',
  }
})

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='React CoinCap'
      inverted
      style={style(mobile).h1}
    />
    <Header
      as='h2'
      inverted
      style={style(mobile).h2}
    ><a href='https://pro.coinmarketcap.com' target='_blank' rel='noopener noreferrer'>Developed by CoinMarketCap Professional API</a></Header>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default HomepageHeading;
