import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

import Post from './Post/Post';
import useStyle from './styles';

const Posts = () => {
  const classes = useStyle();
  const posts = useSelector((state) => state.posts);

  return (
    !posts.length ? <CircularProgress className={classes.progress} /> : (
      <Grid className={classes.root} container alignItems="stretch" spacing={2}>
        {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6}>
              <Post post={post} />
            </Grid>
          ))
        }
      </Grid>
    )
  )
};

export default Posts;
