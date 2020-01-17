import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import PrivateRoute from "routes/private";
import store from "./store";
// core components
import Admin from "layouts/Admin";
import Login from "views/Login";
import Logout from "views/Logout";
import Home from "views/Home";
import RTL from "layouts/RTL";

import "assets/css/app.css";

import { saveState } from "utils";

const hist = createBrowserHistory();

// save the state to local storage every time it updates
store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/rtl" component={RTL} />
        <Route exact path="/" component={Home} />
        <Redirect from="*" to="" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
