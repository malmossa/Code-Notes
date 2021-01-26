import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import useStyle from './styles';
import { createNote } from '../../actions/notes';


const AddForm = () => {

  const [noteData, setNoteData] = useState({
    author: '',
    title: '',
    note: '',
    tags: '',
    image: ''
  });

  const classes = useStyle();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createNote(noteData));
  };

  const clear = () => {

  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">ADD NEW NOTE</Typography>
        <TextField name="author" variant="outlined" label="Author" fullWidth value={noteData.author} onChange={(event) => setNoteData({ ...noteData, author: event.target.value})} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={noteData.title} onChange={(event) => setNoteData({ ...noteData, title: event.target.value})} />
        <TextField name="note" variant="outlined" label="Note" rows="15" multiline fullWidth value={noteData.note} onChange={(event) => setNoteData({ ...noteData, note: event.target.value})} />
        <TextField name="tags" variant="outlined" label="Tags" fullWidth value={noteData.tags} onChange={(event) => setNoteData({ ...noteData, tags: event.target.value})} />
        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false} onDone={({base64}) => setNoteData({ ...noteData, image: base64})} />
        </div>
        <Button className={classes.submitBtn} variant="contained" color="primary" size="large" type="submit" fullWidth>ADD</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>CLEAR</Button>
      </form>
    </Paper>
  )
};

export default AddForm;
