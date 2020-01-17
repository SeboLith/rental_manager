import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps, ExitToApp } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown";

import styles from "./styles.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a href="#" target="_blank" className={classes.dropdownLink}>
              Documentation
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/login" className={classes.navLink}>
          <ExitToApp className={classes.icons} /> Login
        </Link>
      </ListItem>
    </List>
  );
}
