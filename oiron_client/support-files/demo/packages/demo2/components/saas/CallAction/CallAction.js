import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import ReactWOW from 'react-wow';
import link from '~/public/text/link';
import { withTranslation } from '~/i18n';
import useStyles from './action-style';

function CallAction(props) {
  // Translation Function
  const { t } = props;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const classes = useStyles();
  return (
    <Fragment>
      <Container maxWidth="md" fixed={isDesktop}>
        <div className={classes.root}>
          <ReactWOW animation="fadeInUpShort" offset={-100} delay="0.5s" duration="0.5s">
            <Paper className={classes.paper}>
              <div className={classes.deco} />
              <Box mb={5}>
                <Typography variant="h4" gutterBottom display="block">
                  {t('common:saas-landing.footer_waiting')}
                </Typography>
              </Box>
              <Button size="large" variant="contained" color="secondary" href={link.saas.contact} className={classes.button}>
                {t('common:saas-landing.getstarted')}
              </Button>
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
