import React from 'react';
import { Container, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CustomTheme from './CustomTheme';

const App = () => {

  return (
    <ThemeProvider theme={CustomTheme}>
      <Router>
        <Container maxWidth="lg">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  )
};

export default App;
