import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './subscribe-style';

function SubscribeForm(props) {
  const text = useText();
  const classes = useStyles();
  const { t } = props;
  const [value, setValue] = useState('');
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <p className={text.subtitle2}>
          {t('common:blog_subscribe_desc')}
        </p>
        <div className={classes.form}>
          <form>
            <TextField
              className={classes.field}
              fullWidth
              placeholder={t('common:form_email')}
              onChange={(e) => handleChange(e)}
              value={value}
            />
            <Button variant="contained" color="primary" className={classes.button}>
              <span>
                {t('common:blog_subscribe')}
              </span>
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

SubscribeForm.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['saas-landing'])(SubscribeForm);
