import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMarketData } from '../store/actions/marketAction';
import Preloader from '../presentational/Preloader';
import {
  Segment,
  Grid,
  Header,
  Divider,
} from 'semantic-ui-react';
import './MarketData.css';

class MarketData extends React.Component {
  componentDidMount(){
    if (this.props.isLoading.market){
      this.props.fetchMarketData();
    }
  }

  render(){
    const { market } = this.props;
    if (!this.props.isLoading.market){
    return (
      <Segment.Group>
        <Segment>
          <Grid>
            <Grid.Row textAlign={'center'}>
              <Grid.Column columns={16}>
                <Header as='h2'>Total Market Cap</Header>
                <Header as='h3'>{market.quote.USD.total_market_cap}</Header>
              </Grid.Column>
            </Grid.Row>
            <Divider />
            <Grid.Row textAlign={'center'}>
              <Grid.Column mobile={16} tablet={8} computer={4}>
                <Header as='h3'>Cryptocurrencies</Header>
                <Header as='h4'>{market.active_cryptocurrencies}</Header>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={4}>
                <Header as='h3'>BTC Dominance</Header>
                <Header as='h4'>{market.btc_dominance}%</Header>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={4}>
                <Header as='h3'>ETH Dominance</Header>
                <Header as='h4'>{market.eth_dominance}%</Header>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={4}>
                <Header as='h3'>Total Volume (24h)</Header>
                <Header as='h4'>{market.quote.USD.total_volume_24h}</Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Segment.Group>
    )
  } else {
    return <Preloader height='191px' />
  }
  }
}

const mapStateToProps = store => {
  return {
    market: store.market,
    isLoading: store.isLoading,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMarketData: () => dispatch(fetchMarketData()),
  }
}

MarketData.propTypes = {
  market: PropTypes.object.isRequired,
  isLoading: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketData);
