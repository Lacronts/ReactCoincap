import React from 'react';
import {
  Segment,
  Grid,
  Image,
} from 'semantic-ui-react';
import './CoinItem.css'

const CoinItem = ({coin}) => (
  <Segment secondary className='hovered'>
    <Grid verticalAlign={'middle'}>
      <Grid.Row columns={'equal'}>
        <Grid.Column mobile={2} tablet={1} computer={1} textAlign={'center'}>
          {coin.cmc_rank}
        </Grid.Column>
        <Grid.Column mobile={4} tablet={4} computer={2}>
          {/*<Image avatar src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${coin.id}.png`} />*/}
          {coin.name}
        </Grid.Column>
        <Grid.Column mobile={2} tablet={2} computer={2}>
          {coin.symbol}
        </Grid.Column>
        <Grid.Column mobile={5} tablet={3} computer={2} textAlign={'center'}>
          {coin.quote.USD.price}
        </Grid.Column>
        <Grid.Column only={'computer'} computer={3} textAlign={'center'}>
          {coin.quote.USD.market_cap}
        </Grid.Column>
        <Grid.Column only={'computer'} computer={3} textAlign={'center'}>
          {coin.total_supply}
        </Grid.Column>
        <Grid.Column mobile={3} tablet={2} computer={1} textAlign={'center'}>
          {coin.quote.USD.percent_change_1h}
        </Grid.Column>
        <Grid.Column only={'tablet computer'} tablet={2} computer={1} textAlign={'center'}>
          {coin.quote.USD.percent_change_24h}
        </Grid.Column>
        <Grid.Column only={'tablet computer'} tablet={2} computer={1} textAlign={'center'}>
          {coin.quote.USD.percent_change_7d}
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Segment>
)

export default CoinItem;
