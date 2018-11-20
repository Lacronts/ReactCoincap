import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
} from 'semantic-ui-react';
import './Header.css';

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='React CoinCap'
      inverted
      style={{
        fontSize: mobile ? '2rem' : '3rem',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1rem' : '1rem',
      }}
    />
    <Header
      as='h2'
      inverted
      style={{
        fontSize: mobile ? '1.5rem' : '1.7rem',
        fontWeight: 'normal',
        marginTop: mobile ? '1rem' : '1rem',
        cursor: 'pointer',
      }}
    ><a href='https://pro.coinmarketcap.com' target='_blank' rel='noopener noreferrer'>Developed by CoinMarketCap Professional API</a></Header>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default HomepageHeading;
