import React, { useState, useEffect } from 'react';
import { Container, Grid, Grow, ThemeProvider } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Header from './components/Header/Header';
import AddForm from './components/Form/AddForm';
import Posts from './components/Posts/Posts';
import CustomTheme from './CustomTheme';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <ThemeProvider theme={CustomTheme}>
      <Header />
      <Container maxWidth="lg">
        <Grow in>
          <Grid container justify="space-between" alignItems="stretch" spacing={2}>
            <Grid item xs={12} sm={8}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <AddForm currentId={currentId} setCurrentId={setCurrentId}  />
            </Grid>
          </Grid>
        </Grow>
      </Container>
    </ThemeProvider>
  )
};

export default App;
