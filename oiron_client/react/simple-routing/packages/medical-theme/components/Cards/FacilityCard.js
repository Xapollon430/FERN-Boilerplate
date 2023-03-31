import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './facility-card-style';

function FacilityCard(props) {
  const classes = useStyles();
  const {
    img,
    title,
    desc,
    button
  } = props;
  return (
    <Paper className={classes.defaultCard}>
      <figure>
        <img src={img} alt="img" />
      </figure>
      <div className={classes.text}>
        <Typography display="block" variant="h6">{title}</Typography>
        <Typography component="p">{desc}</Typography>
      </div>
      <Button variant="contained" color="secondary" className={classes.button}>
        {button}
      </Button>
    </Paper>
  );
}

FacilityCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};

export default FacilityCard;
