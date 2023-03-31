import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import { useTranslation } from 'next-i18next';
import link from '~/public/text/link';
import useStyles from './action-style';

function CallAction() {
  // Translation Function
  const { t } = useTranslation('common');
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const classes = useStyles();
  return (
    <Container fixed={isDesktop}>
      <div className={classes.root}>
        <ScrollAnimation animateOnce animateIn="fadeInUpShort" offset={-100} delay={500} duration={0.5}>
          <Paper className={classes.paper}>
            <div className={classes.deco} />
            <Box mb={5}>
              <Typography variant="h4" gutterBottom display="block">
                {t('saas2-landing.footer_waiting')}
              </Typography>
            </Box>
            <Button size="large" variant="contained" color="primary" href={link.saas2.register} className={classes.button}>
              {t('saas2-landing.getstarted')}
            </Button>
          </Paper>
        </ScrollAnimation>
      </div>
    </Container>
  );
}

CallAction.propTypes = {

};

export default CallAction;
