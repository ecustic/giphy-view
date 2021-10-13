import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Main, TopNavigation } from './components/Layout';
import { Search } from './pages/Search';
import { GlobalStyle } from './theme';


export const App = () => (
  <Router>
    <TopNavigation>Giphy View</TopNavigation>
    <Main>
    <Switch>
      <Route path="/">
        <Search />
      </Route>
    </Switch>
    </Main>
    <GlobalStyle />
</Router>
)
