import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'next-i18next';
import link from '~/public/text/link';
import { useText } from '~/theme/common';
import useStyles from './action-style';

function CallAction() {
  // Translation Function
  const { t } = useTranslation('common');

  const text = useText();
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <ScrollAnimation animateOnce animateIn="fadeInUpShort" offset={40} delay={300} duration={0.5}>
          <Paper className={classes.paper}>
            <Grid container alignItems="center">
              <Grid item md={9} xs={12}>
                <Typography variant="h4" className={text.textPrimary} gutterBottom display="block">
                  {t('about_ready')}
                </Typography>
                <Typography display="block" component="p">
                  Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.
                </Typography>
              </Grid>
              <Grid item md={3} xs={12}>
                <Grid container alignItems="center">
                  <Button size="large" variant="contained" color="primary" fullWidth href={link.education.register} className={classes.button}>
                    {t('btn_join')}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </ScrollAnimation>
      </div>
    </Container>
  );
}

export default CallAction;
