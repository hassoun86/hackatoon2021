import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'assets/main.scss';
import { LandingPage } from './components/LandingPage';
import { SearchDestination } from './marcin/SearchDestination';

export const App: React.FC = () => {
  return (
        <Switch>
          <Route path="/select-rider">
            <div>Rider screen</div>
          </Route>
          <Route path="/search-destination">
            <SearchDestination />
          </Route>
          <Route path="/other">
            <div>Other page</div>
          </Route>
          <Route path="/">
            <LandingPage/>
          </Route>
        </Switch>
  );
};
