import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'next-i18next';
import link from '~/public/text/link';
import useStyles from './action-style';

function CallAction() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));

  // Translation Function
  const { t } = useTranslation('common');

  const classes = useStyles();
  return (
    <Container fixed={isDesktop}>
      <div className={classes.root}>
        <div className={classes.deco}>
          <span className={classes.decoTop} />
          <span className={classes.decoBottom} />
          <span className={classes.decoRight} />
        </div>
        <ScrollAnimation animateOnce animateIn="fadeInUpShort" offset={40} delay={300} duration={0.5}>
          <Paper className={classes.paper}>
            <Grid container alignItems="center">
              <Grid item md={8} xs={12}>
                <Typography variant="h4" gutterBottom display="block">
                  {t('marketing-landing.cta_title')}
                </Typography>
                <Typography display="block" component="p">
                  {t('marketing-landing.cta_subtitle')}
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
                    {t('btn_join')}
                  </Button>
                </Box>
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
