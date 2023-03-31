import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useStyles from './deco-style';

function Decoration(props) {
  const classes = useStyles();
  const { bg } = props;
  return (
    <div className={clsx(classes.footerDeco, bg ? classes.bg : '')}>
      <div className={classes.decoBgTop} />
    </div>
  );
}

Decoration.propTypes = {
  bg: PropTypes.bool,
};

Decoration.defaultProps = {
  bg: 'false'
};

export default Decoration;
