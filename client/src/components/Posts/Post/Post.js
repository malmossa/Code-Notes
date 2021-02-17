import React from 'react';
import { Card, Typography, CardHeader, CardMedia, CardContent, CardActions, IconButton, Avatar, Collapse, Button } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import EditIcon from '@material-ui/icons/Edit';
import clsx from 'clsx';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import useStyle from './styles';
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({post, setCurrentId}) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const classes = useStyle();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleOptionClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOptionClose = () => {
    setAnchorEl(null);
  };


  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Likes logic
  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  return (
    <Card className={classes.root}>

      <CardHeader
        avatar={
          <Avatar className={classes.avatar} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
        }
        title={post.title}
        subheader={moment(post.createdAt).fromNow()}
        action={
          (user?.result?.googleId === post?.author || user?.result?._id === post?.author) && (

            <div>
              <Button aria-controls="option-menu" aria-haspopup="true" onClick={handleOptionClick}>
                <MoreVertIcon />
              </Button>
              <Menu id="option-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleOptionClose}>
                <MenuItem>
                  <IconButton size="small" color="secondary" onClick={() => setCurrentId(post._id)}>
                    <EditIcon  fontSize="small" />
                    &nbsp; Edit
                  </IconButton>
                </MenuItem>
                <MenuItem>
                  <IconButton size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon  fontSize="small" />
                    &nbsp; Delete
                  </IconButton>
                </MenuItem>
              </Menu>
            </div>

          )
        } />

      <CardMedia className={classes.media} image={post.uploadedImage} title={post.title} />

      <CardContent>
        <Typography className={classes.author} variant="body2" color="secondary" component="p">{`By - ${post.name}`}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.description}
        </Typography>
        <Typography className={classes.tags} variant="body2" color="secondary" component="p">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </CardContent>

      <CardActions disableSpacing>

        <IconButton size="small" color="secondary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
          <Likes />
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
