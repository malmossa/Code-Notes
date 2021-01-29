import React, { useEffect } from 'react';
import { Container, Grid, Grow, ThemeProvider } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Header from './components/Header/Header';
import AddForm from './components/Form/AddForm';
import Posts from './components/Posts/Posts';
import CustomTheme from './CustomTheme';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <ThemeProvider theme={CustomTheme}>
      <Header />
      <Container maxWidth="lg">
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <AddForm />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </ThemeProvider>
  )
};

export default App;
