import React from 'react';
import { AppBar } from '@material-ui/core';

import Logo from '../../images/social-recipes-logo.png'
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="static">
      <img className={classes.logo} src={Logo} alt="code notes" />
    </AppBar>
  )
};

export default Header;
