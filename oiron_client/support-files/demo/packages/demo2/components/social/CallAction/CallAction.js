import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './action-style';

function CallAction(props) {
  // Translation Function
  const { t } = props;
  const text = useText();

  const classes = useStyles();
  return (
    <div className={classes.action}>
      <h4 className={text.title2}>
        {t('common:social-landing.footer_text')}
      </h4>
      <div className={classes.btnArea}>
        <a href="#">
          <img src="/images/social/app-store.png" alt="app store" />
        </a>
        <a href="#">
          <img src="/images/social/play-store.png" alt="play store" />
        </a>
      </div>
    </div>
  );
}

CallAction.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['common'])(CallAction);
