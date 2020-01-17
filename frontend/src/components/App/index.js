import React from "react";
import Login from "../Login";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";



const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "auto 100%",
    backgroundPosition: "center"
  },
  image: {
  }
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Nescion
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const App = () => {
  const classes = useStyles();
  return (
    <Container component="main" className={classes.root}>
      {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
      {/* <Box my={4}> */}
        <Login />
        <Box mt={8}>
          <Copyright />
        </Box>
      {/* </Box> */}
    </Container>
  );
};

export default App;
