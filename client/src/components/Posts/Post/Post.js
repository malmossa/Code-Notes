import React from 'react';
import { Card, Typography, CardHeader, CardMedia, CardContent, CardActions, IconButton, Button, Divider, Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteIcon from '@material-ui/icons/Delete';
import clsx from 'clsx';
import moment from 'moment';

import useStyle from './styles';

const Post = ({post}) => {
  const classes = useStyle();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>M</Avatar>
        }
        title={post.title}
        subheader={moment(post.createdAt).fromNow()}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        } />
      <CardMedia className={classes.media} image={post.uploadedImage} title={post.title} />
      <CardContent>
        <Typography className={classes.author} variant="body2" color="secondary" component="p">{`By : ${post.author}`}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.note}
        </Typography>
        <Typography className={classes.tags} variant="body2" color="secondary" component="p">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </CardContent>
      <CardActions className={classes.CardActions}>
        <Button size="small" color="secondary" onClick={() => {}}>
          <ThumbUpIcon className={classes.icon} fontSize="small" />
          Like
          {` ${post.likeCount}`}
        </Button>
        <Button size="small" color="secondary" onClick={() => {}}>
          <DeleteIcon className={classes.icon} fontSize="small" />
          Delete
        </Button>
        <Button className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </Button>
      </CardActions>
    </Card>
  )
};

export default Post;
