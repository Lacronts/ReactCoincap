import React from 'react';
import { Dropdown } from 'semantic-ui-react'

const DropdownSearch = () => (
  <Dropdown placeholder='Search...' search selection options={[{ key: 'AL', value: 'AL', text: 'Alabama' }]} />
)

export default DropdownSearch;
