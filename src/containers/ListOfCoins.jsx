import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCoinData } from '../store/actions/coinAction';
import CoinItem from '../presentational/CoinItem';
import Preloader from '../presentational/Preloader';
import {
  Segment,
  Grid,
} from 'semantic-ui-react';
import './ListOfCoins.css';

class ListOfCoins extends React.Component {
  componentDidMount(){
    if (this.props.isLoading.coins){
        this.props.fetchCoinData();
    }
  }

  render(){
    const { coins } = this.props;
    if (this.props.isLoading.coins) return <Preloader height='75vh'/>
    else {
      return (
        <Segment.Group stacked>
          <Segment className='th'>
            <Grid verticalAlign={'middle'}>
              <Grid.Row columns={'equal'}>
                <Grid.Column mobile={2} tablet={1} computer={1} textAlign={'center'}>
                  #
                </Grid.Column>
                <Grid.Column mobile={4} tablet={4} computer={2}>
                  Name
                </Grid.Column>
                <Grid.Column mobile={2} tablet={2} computer={2}>
                  Symbol
                </Grid.Column>
                <Grid.Column mobile={5} tablet={3} computer={2} textAlign={'center'}>
                  Price
                </Grid.Column>
                <Grid.Column only={'computer'} computer={3} textAlign={'center'}>
                  Market Cap
                </Grid.Column>
                <Grid.Column only={'computer'} computer={3} textAlign={'center'}>
                  Circulating Supply
                </Grid.Column>
                <Grid.Column mobile={3} tablet={2} computer={1} textAlign={'center'}>
                  Change(1h)
                </Grid.Column>
                <Grid.Column only={'tablet computer'} tablet={2} computer={1} textAlign={'center'}>
                  Change(24h)
                </Grid.Column>
                <Grid.Column only={'tablet computer'} tablet={2} computer={1} textAlign={'center'}>
                  Change(7d)
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          {coins.map((coin) => (
            <Link key={coin.id} to={'/coins/' + coin.symbol}>
              <CoinItem
                coin={coin}
              />
            </Link>
          ))}
        </Segment.Group>
      )
    }
  }
}

const mapStateToProps = store => {
  return {
    coins: store.coins,
    isLoading: store.isLoading,
  }
}

const mapDispatchToProps = {
    fetchCoinData,
}

ListOfCoins.propTypes = {
  coins: PropTypes.array.isRequired,
  isLoading: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfCoins);
