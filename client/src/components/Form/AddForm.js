import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyle from './styles';
import { createPost, updatePost } from '../../actions/posts';


const AddForm = ({ currentId, setCurrentId }) => {

  const [postData, setPostData] = useState({ title: '', description: '', recipe: '', tags: '', uploadedImage: '' });

  const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));
  const classes = useStyle();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if(post) setPostData(post);
  }, [post])

  const handleSubmit = (event) => {
    event.preventDefault();

    if(currentId ===0) {
      dispatch(createPost({...postData, name: user?.result?.name}));
      clear();
    } else {
      dispatch(updatePost(currentId, {...postData, name: user?.result?.name}));
      clear();
    }
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({ title: '', description: '', recipe: '', tags: '', uploadedImage: '' });

  };

  if(!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
         <Typography variant="h6" align="center">
           Please sign in to add your own recipes.
         </Typography>
      </Paper>
    )
  };

  return (
    <Paper className={classes.paper}>
      <Typography align="center" variant="h6">{ currentId ? 'EDITING THIS RECIPE' : 'ADD NEW RECIPE'}</Typography>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <TextField name="title" variant="outlined" label="Title" required fullWidth size="small" value={postData.title} onChange={(event) => setPostData({ ...postData, title: event.target.value})} />
        <TextField name="description" variant="outlined" label="Description" required rows="3" multiline fullWidth value={postData.description} onChange={(event) => setPostData({ ...postData, description: event.target.value})} />
        <TextField name="recipe" variant="outlined" label="Recipe"  rows="10" required multiline fullWidth value={postData.recipe} onChange={(event) => setPostData({ ...postData, recipe: event.target.value})} />
        <TextField name="tags" variant="outlined" label="Tags" fullWidth size="small" value={postData.tags} onChange={(event) => setPostData({ ...postData, tags: event.target.value.split(',')})} />
        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, uploadedImage: base64})} />
        </div>
        <Button className={classes.submitBtn} variant="contained" color="primary" size="large" type="submit" fullWidth>ADD</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>CLEAR</Button>
      </form>
    </Paper>
  )
};

export default AddForm;
