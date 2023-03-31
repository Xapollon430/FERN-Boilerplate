import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
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
        {t('common:retail-landing.footer_text')}
      </h4>
      <div className={classes.btnArea}>
        <Button href="#" variant="contained" color="primary">{t('common:btn_get')}</Button>
      </div>
    </div>
  );
}

CallAction.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['common'])(CallAction);
