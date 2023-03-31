import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
        <Box mb={4}>
          <h3 className={text.title2}>
            {t('blog_subscribe_desc')}
          </h3>
        </Box>
        <Typography>Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. </Typography>
        <div className={classes.form}>
          <form>
            <TextField
              className={classes.field}
              fullWidth
              variant="outlined"
              placeholder={t('form_email')}
              onChange={(e) => handleChange(e)}
              value={value}
            />
            <Button color="primary" variant="contained" className={classes.button}>
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
