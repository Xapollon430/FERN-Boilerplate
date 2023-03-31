import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import ReactWOW from 'react-wow';
import Grid from '@material-ui/core/Grid';
import link from '~/public/text/link';
import { withTranslation } from '~/i18n';
import useStyles from './action-style';

function CallAction(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));

  // Translation Function
  const { t } = props;

  const classes = useStyles();
  return (
    <Fragment>
      <Container fixed={isDesktop}>
        <div className={classes.root}>
          <div className={classes.deco}>
            <span className={classes.decoTop} />
            <span className={classes.decoBottom} />
            <span className={classes.decoRight} />
          </div>
          <ReactWOW animation="fadeInUpShort" offset={40} delay="0.3s" duration="0.5s">
            <Paper className={classes.paper}>
              <Grid container alignItems="center">
                <Grid item md={8} xs={12}>
                  <Typography variant="h4" gutterBottom display="block">
                    {t('common:marketing-landing.cta_title')}
                  </Typography>
                  <Typography display="block" component="p">
                    {t('common:marketing-landing.cta_subtitle')}
                  </Typography>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Box alignItems="center" pl={{ md: 8 }}>
                    <div className={classes.decoButton} />
                    <Button
                      size="large"
                      variant={isTablet ? 'outlined' : 'contained'}
                      fullWidth
                      color={isTablet ? 'white' : 'primary'}
                      href={link.marketing.contact}
                      className={classes.button}
                    >
                      {t('common:btn_join')}
                    </Button>
                  </Box>
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
