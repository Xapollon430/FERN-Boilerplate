import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import ReactWOW from 'react-wow';
import Grid from '@material-ui/core/Grid';
import link from '~/public/text/link';
import { useText } from '~/theme/common';
import { withTranslation } from '~/i18n';
import useStyles from './action-style';

function CallAction(props) {
  // Translation Function
  const { t } = props;
  const text = useText();
  const classes = useStyles();
  return (
    <Fragment>
      <Container>
        <div className={classes.root}>
          <ReactWOW animation="fadeInUpShort" offset={40} delay="0.3s" duration="0.5s">
            <Paper className={classes.paper}>
              <Grid container spacing={2} alignItems="center">
                <Grid item md={8} xs={12}>
                  <h4 className={text.title2}>
                    {t('common:medical-landing.cta_title')}
                  </h4>
                  <Typography display="block" component="p">
                    {t('common:medical-landing.cta_subtitle')}
                  </Typography>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Grid container alignItems="center">
                    <Button size="large" fullWidth href={link.medical.contact} className={classes.button}>
                      {t('common:medical-landing.cta_btn')}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </ReactWOW>
        </div>
      </Container>
    </Fragment>
  );
}

CallAction.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['common'])(CallAction);
