import React from 'react';
import { Card, Typography, CardHeader, CardMedia, CardContent, CardActions, IconButton, Button } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import EditIcon from '@material-ui/icons/Edit';
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
          {post.recipe}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>

        <IconButton size="small" color="secondary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
          <Likes />
        </IconButton>

      </CardActions>

    </Card>
  )
};

export default Post;
