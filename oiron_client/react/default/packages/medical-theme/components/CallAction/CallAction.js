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
    <Container>
      <div className={classes.root}>
        <ScrollAnimation animateOnce animateIn="fadeInUpShort" offset={40} delay={300} duration={0.5}>
          <Paper className={classes.paper}>
            <Grid container spacing={2} alignItems="center">
              <Grid item md={8} xs={12}>
                <h4 className={text.title2}>
                  {t('medical-landing.cta_title')}
                </h4>
                <Typography display="block" component="p">
                  {t('medical-landing.cta_subtitle')}
                </Typography>
              </Grid>
              <Grid item md={4} xs={12}>
                <Grid container alignItems="center">
                  <Button size="large" fullWidth href={link.medical.contact} className={classes.button}>
                    {t('medical-landing.cta_btn')}
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

CallAction.propTypes = {

};

export default CallAction;
