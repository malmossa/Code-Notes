import React from 'react';
import { Card, Typography, CardHeader, CardMedia, CardContent, CardActions, IconButton, Avatar, Collapse } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteIcon from '@material-ui/icons/Delete';
import clsx from 'clsx';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import useStyle from './styles';
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({post, setCurrentId}) => {
  const classes = useStyle();
  const dispatch = useDispatch();

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
          <IconButton onClick={() => setCurrentId(post._id)}>
            <MoreVertIcon />
          </IconButton>
        } />

      <CardMedia className={classes.media} image={post.uploadedImage} title={post.title} />

      <CardContent>
        <Typography className={classes.author} variant="body2" color="secondary" component="p">{`By : ${post.author}`}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.description}
        </Typography>
        <Typography className={classes.tags} variant="body2" color="secondary" component="p">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </CardContent>

      <CardActions className={classes.CardActions} disableSpacing>

        <IconButton size="small" color="secondary" onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpIcon className={classes.icon} fontSize="small" />
          {post.likeCount}
        </IconButton>

        <IconButton size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon className={classes.marginLeft} fontSize="small" />
        </IconButton>

        <IconButton className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>

      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Recipe:</Typography>
          <Typography paragraph>{post.recipe}</Typography>
        </CardContent>
      </Collapse>

    </Card>
  )
};

export default Post;
