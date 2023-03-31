import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import useStyles from './hero-banner-style';

function HeroBanner(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.heroBannerWrap}>
      <Container className={classes.container}>
        {children}
      </Container>
      <div className={classes.decoWrap}>
        <div className={clsx(classes.deco, classes.bottom)}>
          <svg className={classes.wave}>
            <use xlinkHref="/images/saas2/deco-wave.svg#main" />
          </svg>
        </div>
        <div className={clsx(classes.deco, classes.top)}>
          <div className={clsx(classes.wave, classes.waveCover)} />
        </div>
      </div>
      <div className={classes.waveCover} />
    </div>
  );
}

HeroBanner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeroBanner;
