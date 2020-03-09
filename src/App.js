import React from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import DashboardContainer from './containers/dashboard';
import PokemonContainer from './containers/pokemon';
import FavoriteContainer from './containers/favorite';
import TeamContainer from './containers/equipos';
import Confirm from './components/modales/confirmacion';
import ModalCrear from './components/modales/crear';
import PokemonProfile from './containers/pokemonInd';

const App = ({ location }) => (
  <Switch location={location}>
    <Route exact path='/'>
      <PokemonContainer />
    </Route>
    <Route exact path='/dashboard'>
      <DashboardContainer />
    </Route>
    <Route exact path='/favorite'>
      <FavoriteContainer />
    </Route>
    <Route exact path='/team'>
      <TeamContainer />
    </Route>
    <Route exact path='/pokemon'>
      <PokemonContainer />
    </Route>
    <Route exact path='/pokemonInd'>
      <PokemonProfile />
    </Route>
    <Route exact path='/confirm'>
      <Confirm />
    </Route>
    <Route exact path='/crear'>
      <ModalCrear />
    </Route>
    <Redirect to='/' />
  </Switch>
);

App.propTypes = {
  location: PropTypes.string.isRequired,
};

export default App;
