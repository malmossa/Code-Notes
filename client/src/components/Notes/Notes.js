import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

import Note from './Note/Note';
import useStyle from './styles';

const Notes = () => {
  const classes = useStyle();
  const notes = useSelector((state) => state.notes);

  return (
    !notes.length ? <CircularProgress /> : (
      <Grid className={classes.root} container alignItems="stretch" spacing={2}>
        {notes.map((note) => (
            <Grid key={note._id} item xs={12} sm={6}>
              <Note note={note} />
            </Grid>
          ))
        }
      </Grid>
    )
  )
};

export default Notes;
