import React, { useState, useEffect } from 'react';
import { Container, Grid, Grow } from '@material-ui/core';

import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import AddForm from '../Form/AddForm';
import useStyles from './styles';

import { useDispatch } from 'react-redux';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container>
      <Grow className={classes.root} in>
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
  )
};

export default Home;
