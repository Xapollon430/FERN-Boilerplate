import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useStyles from './deco-style';

function Decoration(props) {
  const classes = useStyles();
  const { bg } = props;
  return (
    <div className={clsx(classes.footerDeco, bg ? classes.bg : '')}>
      <div className={classes.decoWrap}>
        <div className={clsx(classes.deco, classes.bottom)}>
          <svg className={classes.wave}>
            <use xlinkHref="/images/saas/deco-wave.svg#main" />
          </svg>
        </div>
        <div className={clsx(classes.deco, classes.top)}>
          <svg className={classes.wave}>
            <use xlinkHref="/images/saas/deco-wave.svg#main" />
          </svg>
        </div>
      </div>
      <div className={clsx(classes.wave, classes.waveCover)} />
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
