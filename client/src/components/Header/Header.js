import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';

import Logo from '../../images/social-recipes-logo.png'
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();

  const user = null;

  return (
    <AppBar className={classes.appBar}  position="static">
      <img className={classes.logo} src={Logo} alt="Social Recipes" />
      <Toolbar className={classes.Toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.avatar} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.chartAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
            <Button className={classes.logout}>Logout</Button>
          </div>
        ) : (
          <Button className={classes.signIn} component={Link} to="/auth">Sign In</Button>
        )
      }
      </Toolbar>
    </AppBar>
  )
};

export default Header;
