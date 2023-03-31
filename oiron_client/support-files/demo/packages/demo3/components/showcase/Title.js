import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  title: {
    display: 'block',
    margin: theme.spacing(3, 0, 10),
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(3, 2, 10),
    },
    '& h2': {
      fontSize: '2.75rem',
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.75rem'
      },
    },
    '& p': {
      color: theme.palette.common.white,
      fontSize: 14,
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'uppercase',
      display: 'inline-block',
      position: 'relative',
      borderRadius: 8,
      padding: '2px 8px',
      background: 'linear-gradient(90deg,#9851DF,#3333C8 47%,#231F94 98%)'
    }
  },
  center: {
    textAlign: 'center'
  },
  left: {
    textAlign: 'left'
  },
}));

function Title(props) {
  const classes = useStyles();
  const { subtitle, title, align } = props;
  return (
    <div className={clsx(classes.title, align === 'left' ? classes.left : classes.center)}>
      <Typography component="p">
        <span />
        {subtitle}
      </Typography>
      <Typography variant="h2">
        {title}
      </Typography>
    </div>
  );
}

Title.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  align: PropTypes.string
};

Title.defaultProps = {
  align: 'center'
};

export default Title;
