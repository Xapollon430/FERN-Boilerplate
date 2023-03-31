import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './subscribe-style';

function SubscribeForm() {
  const text = useText();
  const classes = useStyles();
  const { t } = useTranslation('common');
  const [value, setValue] = useState('');
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <p className={text.subtitle2}>
          {t('blog_subscribe_desc')}
        </p>
        <div className={classes.form}>
          <form>
            <TextField
              className={classes.field}
              fullWidth
              placeholder={t('form_email')}
              onChange={(e) => handleChange(e)}
              value={value}
            />
            <Button variant="contained" color="primary" className={classes.button}>
              <span>
                {t('blog_subscribe')}
              </span>
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default SubscribeForm;
