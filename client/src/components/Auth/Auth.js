import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './styles';
import Input from './Input';


const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const isSignup = false;

  const handleChange = () => {

  };

  const handleSubmit = () => {

  };

  const hanleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <React.Fragment>
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                  <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                </React.Fragment>
              )}
              <Input name="email" label="Emain Address" handleChange={handleChange} type="email" />
              <Input name="Password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} hanleShowPassword={hanleShowPassword}  />
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
        </form>
      </Paper>
    </Container>
  )
};

export default Auth;
