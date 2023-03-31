import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'next-i18next';
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
      <span className={classes.deco} />
      {withCounter && (
        <div>
          <Counter />
          <div className={classes.action}>
            <h4 className={text.title2}>
              {t('about_ready')}
            </h4>
            <Button color="secondary" size="large" variant="contained">
              {t('crypto-landing.getstarted')}
            </Button>
          </div>
        </div>
      )}
      {children}
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
