import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListOfCoins from '../containers/ListOfCoins';
import MarketData from '../containers/MarketData';
import CoinDetails from '../containers/CoinDetails';
import NotFound from './NotFound';
import ScrollUp from '../containers/ScrollUp';
import About from './About';
import {
   Divider,
   Icon
 } from 'semantic-ui-react';
 import './HomePage.css';

const style = {
  relative: {
    position: 'relative',
    zIndex: '-1',
  }
}

const HomePage = () => (
  <Switch>
    <Route exact path='/' render={() => (
      <div>
        <Divider />
        <Divider horizontal style={style.relative}>
          Market Data
        </Divider>
        <MarketData />
        <Divider />
        <Divider horizontal style={style.relative}>
          Coins Data
        </Divider>
        <ListOfCoins />
          <ScrollUp showUnder={300}>
            <Icon name='arrow alternate circle up'/>
          </ScrollUp>
      </div>
      )}
    />
    <Route path='/about' component={About} />
    <Route path='/coins/:id' component={CoinDetails} />
    <Route path='*' component={NotFound} />
  </Switch>
);

export default HomePage;
