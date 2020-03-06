import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useSelector } from 'react-redux';

import useFormValidation from "../../hooks/userFormValidation.js";
import { authenticateUser as submitFunction } from "../../actions/authenticateUser";

const INITIAL_STATE = {
  username: "",
  password: ""
};

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  }
}));

export default function Login(props) {

  const classes = useStyles();
  const { isLoading, isAuthenticated, formValidationErrors } = useSelector(state => state.auth);

  // if the user is authenticated, redirect them to the dashboard
  if (isAuthenticated) {
    props.history.push("/dashboard");
  }

  // allow the `useFormValidation` hook to handle the form's state and related submit logic
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values
  } = useFormValidation(INITIAL_STATE, props, submitFunction);
  const [checked, setChecked] = useState(false);

  const handleChecked = event => {
    setChecked(event.target.checked);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            error={!!formValidationErrors.username}
            id="outlined-error-helper-text"
            label="username"
            onChange={handleChange}
            onBlur={handleBlur}
            name="username"
            value={values.username}
            helperText={formValidationErrors.username}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          <TextField
            error={!!formValidationErrors.password}
            id="outlined-error-helper-text"
            label="password"
            onChange={handleChange}
            onBlur={handleBlur}
            name="password"
            type="password"
            value={values.password}
            helperText={formValidationErrors.password}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChecked}
                value="primary"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
            label="Remember me"
          />
          <Button
            disabled={isLoading}
            onSubmit={handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
