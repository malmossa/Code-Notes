import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Logo from '../../images/social-recipes-logo.png'
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const logout = () => {
    dispatch({ type: 'LOGOUT'});

    history.push('/');
    setUser(null);
   };


  useEffect(() => {
    const token = user?.token;

    // JWT ...

    setUser(JSON.parse(localStorage.getItem('profile')));
   }, [location]);

  return (
    <AppBar className={classes.appBar}  position="static">
      <a href="/"><img className={classes.logo} src={Logo} alt="Social Recipes" /></a>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button className={classes.logout} onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button className={classes.signIn} component={Link} to="/auth">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  )
};

export default Header;
