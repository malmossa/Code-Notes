import React from 'react';
import { Card, Typography, CardHeader, CardMedia, CardContent, CardActions, IconButton, Button } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';

import useStyle from './styles';

const Note = ({note}) => {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardHeader
        title={note.title}
        subheader={moment(note.createdAt).fromNow()}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        } />
      <CardMedia className={classes.media} image={note.uploadedImage} title={note.title} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {note.note}
        </Typography>
      </CardContent>
      <CardActions className={classes.CardActions}>
        <Button size="small" color="secondary" onClick={() => {}}>
          <ThumbUpIcon className={classes.icon} fontSize="small" />
          Like
        </Button>
        <Button size="small" color="secondary" onClick={() => {}}>
          <DeleteIcon className={classes.icon} fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  )
};

export default Note;
