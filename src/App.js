import React from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import HomeContainer from './containers/home';
import FavoriteContainer from './containers/favorite';
import TeamContainer from './containers/equipos';

const App = ({ location }) => (
  <Switch location={location}>
    <Route exact path='/'>
      <HomeContainer />
    </Route>
    <Route exact path='/favorite'>
      <FavoriteContainer />
    </Route>
    <Route exact path='/team'>
      <TeamContainer />
    </Route>
    <Redirect to='/' />
  </Switch>
);

App.propTypes = {
  location: PropTypes.string.isRequired,
};

export default App;