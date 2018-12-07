import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Search } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './styles/SearchCoin.css';

class SearchCoin extends React.Component {
  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.object.isRequired,
    }),
  }

  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.title });
    this.context.router.history.push(`/coins/${result.id}`);
    this.resetComponent();
  }

  handleSearchChange = (e, { value }) => {
    const { coins } = this.props;

    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(coins, isMatch),
      })
    }, 500)
  }

  render() {
    const { isLoading, value, results, } = this.state

    return (
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
            placeholder='Search...'
          />
    )
  }
}

const options = (coins) => (
  coins.map((coin) => ({
      id: coin.symbol,
      title: `${coin.name} (${coin.symbol})`,
      image: `https://s2.coinmarketcap.com/static/img/coins/32x32/${coin.id}.png`,
    })
  )
)

const mapStateToProps = (state) => ({
  coins: options(state.coins),
})

SearchCoin.propTypes = {
  coins: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(SearchCoin);
