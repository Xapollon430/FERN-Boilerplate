import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import { useText } from '~/theme/common';
import Counter from '../CounterSingle';
import useStyles from './footer-extend-style';

function FooterExtend(props) {
  const classes = useStyles();
  const text = useText();
  const { withCounter, children } = props;
  const { t } = useTranslation('common');
  return (
    <div className={clsx(classes.footerCounter, withCounter ? classes.extend : '')}>
      <span className={classes.round} />
      {withCounter && (
        <div>
          <Counter />
          <div className={classes.action}>
            <h4 className={text.title2}>
              {t('about_ready')}
            </h4>
            <Button color="secondary" size="large" variant="contained">
              {t('cloud-landing.getstarted')}
            </Button>
          </div>
        </div>
      )}
      {children}
      {withCounter && (
        <div className={classes.buildingDeco}>
          <img
            className={clsx(classes.imgLeft, 'img-2d3d')}
            src={imgAPI.cloud[29]}
            data-2d={imgAPI.cloud[28]}
            data-3d={imgAPI.cloud[29]}
            alt="building"
          />
          <img
            className={clsx(classes.imgCenter, 'img-2d3d')}
            src={imgAPI.cloud[31]}
            data-2d={imgAPI.cloud[30]}
            data-3d={imgAPI.cloud[31]}
            alt="building"
          />
          <img
            className={clsx(classes.imgLeft, 'img-2d3d')}
            src={imgAPI.cloud[29]}
            data-2d={imgAPI.cloud[28]}
            data-3d={imgAPI.cloud[29]}
            alt="building"
          />
        </div>
      )}
    </div>
  );
}

FooterExtend.propTypes = {
  withCounter: PropTypes.bool,
  children: PropTypes.node.isRequired,

};

FooterExtend.defaultProps = {
  withCounter: false
};

export default FooterExtend;
