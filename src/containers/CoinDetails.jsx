import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCoinData } from '../store/actions/coinAction';
import { formatCurrency, formatPercent, formatNumber, isValuePositive } from '../utils';
import Preloader from '../presentational/Preloader';
import NotFound from '../presentational/NotFound';
import {
  Container,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react';
import './CoinDetails.css';

const style = {
  mt2: {
    marginTop: '2rem',
  }
}

class CoinDetails extends React.Component {

  componentDidMount(){
    window.scrollTo(0,0);
    if (this.props.isLoading){
      this.props.fetchCoinData()
    };
  }

  renderCoinDetailsPage = (coin) => (
    <Container textAlign='center' style={style.mt2}>
      <img src={`https://s2.coinmarketcap.com/static/img/coins/128x128/${coin.id}.png`} height='128px' alt={coin.symbol}/>
      <Header as='h1'>{coin.name} <span className='subheader'>({coin.symbol})</span></Header>
      <Segment textAlign='center' compact className='rank'>
        Rank {coin.cmc_rank}
      </Segment>
      <Header as='h2' className='price'>
        Currently trading at <strong className='text_primary'>{formatCurrency(coin.quote.USD.price)}</strong>
        <span className='subheader'> ({formatNumber(coin.quote.BTC.price)} BTC)</span>
        <Header.Subheader>
          with a Market Cap of <strong className='text_primary'>{formatCurrency(coin.quote.USD.market_cap)}</strong>
        <span className='subheader'> ({formatNumber(coin.quote.BTC.market_cap)} BTC)</span>
        </Header.Subheader>
      </Header>
      <Grid>
        <Grid.Row stretched centered>
          <Grid.Column mobile={16} tablet={5} computer={5}>
            <Segment textAlign='center'>
              <Header as='h4'>
                Volume 24h
                <Header.Subheader><strong className='text_primary'>{formatCurrency(coin.quote.USD.volume_24h)}</strong></Header.Subheader>
                <Header.Subheader>{formatNumber(coin.quote.BTC.volume_24h)} BTC</Header.Subheader>
              </Header>
            </Segment>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={5} computer={5}>
            <Segment textAlign='center'>
              <Header as='h4'>
                Circulating Supply
                <Header.Subheader>{formatNumber(coin.circulating_supply)} BTC</Header.Subheader>
              </Header>
            </Segment>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={5} computer={5}>
            <Segment textAlign='center'>
              <Header as='h4'>
                Total Supply ({coin.symbol})
                <Header.Subheader>{formatNumber(coin.total_supply)}</Header.Subheader>
              </Header>
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row stretched centered>
          <Grid.Column mobile={16} tablet={5} computer={5}>
            <Segment textAlign='center'>
              <Header as='h4'>
                Change (1h)
                <Header.Subheader
                  className={isValuePositive(coin.quote.USD.percent_change_1h) ? 'text_green' : 'text_red'}
                >
                  <strong>{formatPercent(coin.quote.USD.percent_change_1h)}</strong>
                </Header.Subheader>
              </Header>
            </Segment>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={5} computer={5}>
            <Segment textAlign='center'>
              <Header as='h4'>
                Change (24h)
                <Header.Subheader
                  className={isValuePositive(coin.quote.USD.percent_change_24h) ? 'text_green' : 'text_red'}
                >
                  <strong>{formatPercent(coin.quote.USD.percent_change_24h)}</strong>
                </Header.Subheader>
              </Header>
            </Segment>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={5} computer={5}>
            <Segment textAlign='center'>
              <Header as='h4'>
                Change (7d)
                <Header.Subheader
                  className={isValuePositive(coin.quote.USD.percent_change_7d) ? 'text_green' : 'text_red'}
                >
                  <strong>{formatPercent(coin.quote.USD.percent_change_7d)}</strong>
                </Header.Subheader>
              </Header>
            </Segment>
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

CoinDetails.propTypes = {
  match: PropTypes.object.isRequired,
  coin: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchCoinData: PropTypes.func.isRequired,
}

const coinSelector = (state, ownProps) => {
  return state.coins.find(coin => coin.symbol === ownProps.match.params.id);
}

const mapStateToProps = (state, ownProps) => ({
      coin: coinSelector(state, ownProps) || {},
      isLoading: state.isLoading.coins,
    });

const mapDispatchToProps = {
    fetchCoinData,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CoinDetails));
