import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;
  const time = new Date()

  return (
        <div>
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         {moment({time}).format('MMMM Do YYYY, h:mm:ss a')}
       </Typography>
        <Typography variant="h5" component="h2">
        Art
        </Typography>
        <Typography component="p">
        In class today, we pained a canvas.
        </Typography>
      </CardContent>
      <CardActions>
            <Link to="/homework-art">
            <Button size="small">Homework
            </Button>
            </Link>
      </CardActions>
    </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);