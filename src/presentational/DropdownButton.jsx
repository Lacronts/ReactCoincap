import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { changeCurrency } from '../store/actions/coinAction';

const DropdownButton = ({dispatch, currency}) => (
  <Dropdown
    defaultValue={currency}
    selection
    compact
    upward
    onChange={(event, data) => dispatch(changeCurrency(data.value))}
    options = {
      [
        { key: 1, text: 'USD', value: 'USD' },
        { key: 2, text: 'RUB', value: 'RUB' },
        { key: 3, text: 'BTC', value: 'BTC' },
        { key: 4, text: 'ETH', value: 'ETH' },
        { key: 5, text: 'LTC', value: 'LTC' },
        { key: 6, text: 'BCH', value: 'BCH' },
        { key: 7, text: 'XRP', value: 'XRP' },
      ]
    }
  />
);

export default DropdownButton;
