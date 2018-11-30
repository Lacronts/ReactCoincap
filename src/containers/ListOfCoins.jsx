import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCoinData } from '../store/actions/coinAction';
import { nextPage, prevPage, viewAll, backTo100 } from '../store/actions/paginationAction';
import { sortByColumn } from '../store/actions/sortAction';
import CoinItem from '../presentational/CoinItem';
import Preloader from '../presentational/Preloader';
import DropdownButton from '../presentational/DropdownButton';
import _ from 'lodash';
import {
  Segment,
  Grid,
  Button,
  Icon,
} from 'semantic-ui-react';
import './ListOfCoins.css';

const style = {
  buttons: {
    margin: '5px',
  },
  icon: {
    pointerEvents: 'none',
  }
}

class ListOfCoins extends React.Component {
  componentDidMount(){
    if (this.props.isLoading){
        this.props.fetchCoinData();
    }
  }

  sortBy = (e) => {
    const column = e.target.dataset.column;
    this.props.sortByColumn(column);
  }

  showCaret = (column) => {
    const { sort } = this.props;
    if (sort.column === column) {
      return (
        sort.orders === 'desc'
        ? <Icon style={style.icon} name='caret down'/>
        : <Icon style={style.icon} name='caret up'/>
      );
    }
  }

  renderTableHeader = () => {
    const { currency, nextPage, prevPage, viewAll, backTo100, pagination, dispatch, coins} = this.props;
    return (
      <React.Fragment>
        <Button.Group style={style.buttons}>
          {
            pagination.page !== 1 &&
            <Button
              icon
              labelPosition='left'
              onClick = { prevPage }
            >
              <Icon name='left arrow'/>
              Prev
            </Button>
          }
          {
            pagination.perPage <= coins.length &&
          <Button
            icon
            labelPosition='right'
            onClick = { nextPage }
          >
            Next
            <Icon name='right arrow'/>
          </Button>}
        </Button.Group>
        {
          pagination.perPage < Infinity  &&
          <Button
            onClick={viewAll}
            style={style.buttons}
          >
            All
          </Button>
        }
        {
          pagination.perPage === Infinity  &&
          <Button
            onClick={backTo100}
            style={style.buttons}
          >
            Back to 100
          </Button>
        }
        <DropdownButton
          dispatch={dispatch}
          currency={currency}
        />
        <Segment className='th'>
          <Grid verticalAlign={'middle'}>
            <Grid.Row columns={'equal'} onClick={this.sortBy}>
              <Grid.Column mobile={2} tablet={1} computer={1} textAlign={'center'} data-column='cmc_rank' className='list_header'>
                #
                {this.showCaret('cmc_rank')}
              </Grid.Column>
              <Grid.Column mobile={4} tablet={4} computer={2} data-column='name' className='list_header'>
                Name
                {this.showCaret('name')}
              </Grid.Column>
              <Grid.Column mobile={2} tablet={2} computer={2} data-column='symbol' className='list_header'>
                Symbol
                {this.showCaret('symbol')}
              </Grid.Column>
              <Grid.Column mobile={5} tablet={3} computer={2} textAlign={'center'} data-column='quote.USD.price' className='list_header'>
                Price: {currency}
                {this.showCaret('quote.USD.price')}
              </Grid.Column>
              <Grid.Column only={'computer'} computer={3} textAlign={'center'} data-column='quote.USD.market_cap' className='list_header'>
                Market Cap
                {this.showCaret('quote.USD.market_cap')}
              </Grid.Column>
              <Grid.Column only={'computer'} computer={3} textAlign={'center'} data-column='circulating_supply' className='list_header'>
                Circulating Supply
                {this.showCaret('circulating_supply')}
              </Grid.Column>
              <Grid.Column mobile={3} tablet={2} computer={1} textAlign={'center'} data-column='quote.USD.percent_change_1h' className='list_header'>
                Change(1h)
                {this.showCaret('quote.USD.percent_change_1h')}
              </Grid.Column>
              <Grid.Column only={'tablet computer'} tablet={2} computer={1} textAlign={'center'} data-column='quote.USD.percent_change_24h' className='list_header'>
                Change(24h)
                {this.showCaret('quote.USD.percent_change_24h')}
              </Grid.Column>
              <Grid.Column only={'tablet computer'} tablet={2} computer={1} textAlign={'center'} data-column='quote.USD.percent_change_7d' className='list_header'>
                Change(7d)
                {this.showCaret('quote.USD.percent_change_7d')}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </React.Fragment>
    )
  }

  renderTable = () => {
    const { currency, coins } = this.props;
    return (
      coins.map((coin) => (
          <CoinItem
            coin={coin}
            currency={currency}
            key={coin.id}
          />
      ))
    )
  }

  render(){
    const { isLoading } = this.props;
    if (isLoading) return <Preloader height='75vh'/>
    return (
      <Segment.Group stacked>
        {this.renderTableHeader()}
        {this.renderTable()}
        {console.log('mount LIST')}
      </Segment.Group>
    )
  }
}

const getCoinsWithPagination = (state) => {
  const firstItem = state.pagination.page * state.pagination.perPage - state.pagination.perPage;
  const secondItem = state.pagination.page * state.pagination.perPage;
  const coins = state.coins.slice(firstItem, secondItem);
  const column = state.sort.column;
  const orders = state.sort.orders;

  if (!!column) return _.orderBy(coins, [column], [orders]);

  return coins;
}

const mapStateToProps = state => {
  return {
    coins: getCoinsWithPagination(state),
    isLoading: state.isLoading.coins,
    pagination: state.pagination,
    currency: state.currency,
    sort: state.sort,
  }
}

const mapDispatchToProps = (dispatch) => ({
    fetchCoinData: () => dispatch(fetchCoinData()),
    nextPage: () => dispatch(nextPage()),
    prevPage: () => dispatch(prevPage()),
    viewAll: () => dispatch(viewAll()),
    backTo100: () => dispatch(backTo100()),
    sortByColumn: (column) => dispatch(sortByColumn(column)),
    dispatch: dispatch,
})

ListOfCoins.propTypes = {
  coins: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  sort: PropTypes.object.isRequired,
  pagination: PropTypes.object.isRequired,
  currency: PropTypes.string.isRequired,
  fetchCoinData: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  viewAll: PropTypes.func.isRequired,
  backTo100: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfCoins);
