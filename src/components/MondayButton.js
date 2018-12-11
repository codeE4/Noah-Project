import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });
  
  function MondayButton(props, text) {
    const { classes } = props;
    return (
      <div>
        <Link to="/monday">
        <Button variant="contained" color="primary" className={classes.button}>
        Monday
        </Button>
        </Link>
        </div>
  );
}

MondayButton.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MondayButton);