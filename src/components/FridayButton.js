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

function FridayButton(props) {
  const { classes } = props;
  return (
    <div>
       <Link to="/friday">
        <Button variant="contained" color="primary" className={classes.button}>
        Friday
        </Button>
        </Link>
      </div>
  );
}

FridayButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FridayButton);