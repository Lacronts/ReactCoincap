import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomePageHeader from '../containers/HomePageHeader';
import ListOfCoins from '../containers/ListOfCoins';
import MarketData from '../containers/MarketData';
import CoinDetails from '../containers/CoinDetails';
import {
  Divider,
} from 'semantic-ui-react';


const App = () => (
  <Router>
    <div>
      <Route exact path='/' render={() => (
        <div>
          <HomePageHeader />
          <Divider />
          <Divider horizontal >
            Market Data
          </Divider>
          <MarketData />
            <Divider />
            <Divider horizontal >
              Coins Data
            </Divider>
            <ListOfCoins />
          </div>
        )}
      />
      <Route path='/about' render={() => (
          <HomePageHeader />
        )}
      />
    <Route path='/coins/:id' render={(props) => (
        <React.Fragment>
          <HomePageHeader />
          <CoinDetails {...props}/>
        </React.Fragment>
      )}
    />
    </div>
  </Router>
)

export default App;
