import React, { useEffect } from 'react';
import { Container, Grid, Grow, ThemeProvider } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getNotes } from './actions/notes';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Notes from './components/Notes/Notes';
import CustomTheme from './CustomTheme';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  return (
    <ThemeProvider theme={CustomTheme}>
      <Container maxWidth="lg">
        <Header />
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
