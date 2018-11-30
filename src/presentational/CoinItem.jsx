import React from 'react';
import { Link } from 'react-router-dom';
import {
  Segment,
  Grid,
  Image,
} from 'semantic-ui-react';
import './CoinItem.css';
import { formatCurrency, formatPercent, formatNumber, isValuePositive } from '../utils';

const CoinItem = ({coin, currency}) => (
  <Link key={coin.id} to={`/coins/${coin.symbol}`}>
  <Segment secondary className='hovered'>
    <Grid verticalAlign={'middle'}>
      <Grid.Row columns={'equal'}>
        <Grid.Column mobile={2} tablet={1} computer={1} textAlign={'center'}>
          {coin.cmc_rank}
        </Grid.Column>
        <Grid.Column mobile={4} tablet={4} computer={2}>
          <Image avatar src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${coin.id}.png`} />
          {coin.name}
        </Grid.Column>
        <Grid.Column mobile={2} tablet={2} computer={2}>
          {coin.symbol}
        </Grid.Column>
        <Grid.Column
          mobile={5}
          tablet={3}
          computer={2}
          textAlign={'center'}
          className="text_primary"
        >
          <strong>{currency === 'USD' ? formatCurrency(coin.quote[currency].price) : formatNumber(coin.quote[currency].price)}</strong>
        </Grid.Column>
        <Grid.Column only={'computer'} computer={3} textAlign={'center'}>
          <strong>{currency === 'USD' ? formatCurrency(coin.quote[currency].market_cap) : formatNumber(coin.quote[currency].market_cap)}</strong>
        </Grid.Column>
        <Grid.Column only={'computer'} computer={3} textAlign={'center'}>
          {coin.total_supply} {coin.symbol}
        </Grid.Column>
        <Grid.Column
          mobile={3}
          tablet={2}
          computer={1}
          textAlign={'center'}
          className={isValuePositive(coin.quote.USD.percent_change_1h) ? 'text_green' : 'text_red'}
        >
          {formatPercent(coin.quote.USD.percent_change_1h)}
        </Grid.Column>
        <Grid.Column
          only={'tablet computer'}
          tablet={2}
          computer={1}
          textAlign={'center'}
          className={isValuePositive(coin.quote.USD.percent_change_24h) ? 'text_green' : 'text_red'}
        >
          {formatPercent(coin.quote.USD.percent_change_24h)}
        </Grid.Column>
        <Grid.Column
          only={'tablet computer'}
          tablet={2}
          computer={1}
          textAlign={'center'}
          className={isValuePositive(coin.quote.USD.percent_change_7d) ? 'text_green' : 'text_red'}
        >
          {formatPercent(coin.quote.USD.percent_change_7d)}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  </Link>
)

export default CoinItem;
