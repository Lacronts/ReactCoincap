import React from 'react';
import { connect } from 'react-redux';
import { fetchCoinData } from '../store/actions/coinAction';
import Preloader from '../presentational/Preloader';
import NotFound from '../presentational/NotFound';
import {
  Container,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react';
import './CoinDetails.css';

class CoinDetails extends React.Component {
  componentDidMount(){
    if (this.props.isLoading){
      this.props.fetchCoinData()
    };
  }

  renderCoinDetailsPage = (coin) => (
    <Container textAlign='center' style={{marginTop: '2rem',}}>
      <img src={`https://s2.coinmarketcap.com/static/img/coins/128x128/${coin.id}.png`}/>
      <Header as='h1'>{coin.name} <span className='subheader'>({coin.symbol})</span></Header>
      <Segment textAlign='center' compact className='rank'>
        Rank {coin.cmc_rank}
      </Segment>
      <Header as='h2'>
        Price: {coin.quote.USD.price} <span className='subheader'>(in BTC)</span>
        <Header.Subheader>
          Market Cap: {coin.quote.USD.market_cap}
          <span className='subheader'>(in BTC)</span>
        </Header.Subheader>
      </Header>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column >
            <Segment>elapsedasd</Segment>
          </Grid.Column>
          <Grid.Column>
sdf
          </Grid.Column>
          <Grid.Column>
dfg
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>

          </Grid.Column>
          <Grid.Column>

          </Grid.Column>
          <Grid.Column>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )

  render(){
    const { coin, isLoading } = this.props;

    if (isLoading) return <Preloader height='75vh'/>;

    if (!isLoading && !coin) return <NotFound />

    return this.renderCoinDetailsPage(coin);
  }
}

const coinSelector = (state, ownProps) => {
    return state.coins.find(coin => coin.symbol === ownProps.match.params.id);
}

const mapStateToProps = (state, ownProps) => ({
      coin: coinSelector(state, ownProps),
      isLoading: state.isLoading.coins,
    });

const mapDispatchToProps = {
    fetchCoinData,
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinDetails);
