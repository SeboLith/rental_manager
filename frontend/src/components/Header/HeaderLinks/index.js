import React from "react";
import { useSelector } from "react-redux";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps, ExitToApp } from "@material-ui/icons";
import { Dashboard } from "@material-ui/icons";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

// core components
import CustomDropdown from "components/CustomDropdown";

import styles from "./styles.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const { token } = useSelector(state => state.auth);
  const classes = useStyles();
  const links = [
      <>
      { window.location.pathname !== "/dashboard/home" && (
        <Link to="/dashboard/home" className={classes.navLink}>
          <Dashboard className={classes.icons} /> Home
      </Link>
      )}
      </>
  ];
  return (
    <List className={classes.list}>
      { token ? (
        <>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Dashboard"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={links}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/logout" className={classes.navLink}>
          <PowerSettingsNewIcon className={classes.icons} /> Logout
        </Link>
      </ListItem>
      </>
      ) : (
      <ListItem className={classes.listItem}>
        <Link to="/login" className={classes.navLink}>
          <ExitToApp className={classes.icons} /> Login
        </Link>
      </ListItem>
      )}
    </List>
  );
}
