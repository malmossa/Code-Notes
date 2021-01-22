import React from 'react';
import { Container, AppBar, Typography, Grid, Grow, ThemeProvider } from '@material-ui/core';


import Form from './components/Form/Form';
import Notes from './components/Notes/Notes';
import logo from './images/code-notes-logo.png';
import CustomTheme from './CustomTheme';

const App = () => {
  return (
    <ThemeProvider theme={CustomTheme}>
      <Container maxWidth="lg">
        <AppBar position="static" color="primary">
          <img src={logo} alt="code notes" height="60" width="180" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Notes />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </ThemeProvider>
  )
};

export default App;
