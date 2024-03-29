import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { withTranslation } from '~/i18n';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Logo from '../../../components/cloud/Logo';
import CloudDeco from '../../../components/cloud/Decoration/CloudDeco';
import BuildingDeco from '../../../components/cloud/Decoration/BuildingDeco';
import { useSpacing, useTextAlign, useText } from '~/theme/common';
// Theme Wrapper
import Cloud from '../../../components/wrapper/Cloud';

function SoonContent(props) {
  const classes = useSpacing();
  const align = useTextAlign();
  const text = useText();
  const { t } = props;

  // Breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const [email, setEmail] = useState('');

  const handleChange = event => {
    setEmail(event.target.value);
  };

  return (
    <Fragment>
      <CloudDeco />
      <Container maxWidth="sm">
        <div className={classes.fullScreenContainer}>
          <Grid container alignItems="center">
            <Grid item md={12} xs={12} className={align.textCenter}>
              <Box
                className={classes.logo}
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb={5}
              >
                <Logo type="landscape" size="large" />
              </Box>
              <div className={align.textCenter}>
                <h3 className={clsx(text.title, text.textPrimary)}>
                  {t('common:util_soon')}
                </h3>
                <Box mb={5}>
                  <h5 className={text.subtitle2}>
                    {t('common:util_soon_desc')}
                  </h5>
                </Box>
                <div className={classes.form}>
                  <Box mb={{ sm: 4 }}>
                    <Grid container justify="center">
                      <Grid item sm={10} xs={12}>
                        <FormControl fullWidth variant="filled">
                          <InputLabel htmlFor="standard-adornment-password">{t('common:form_email')}</InputLabel>
                          <FilledInput
                            fullWidth
                            id="standard-adornment-password"
                            value={email}
                            onChange={handleChange}
                            endAdornment={isDesktop && (
                              <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                size="small"
                                className={classes.btnNotify}
                              >
                                {t('common:util_notif')}
                              </Button>
                            )}
                          />
                        </FormControl>
                        {!isDesktop && (
                          <Box my={3}>
                            <Button
                              variant="contained"
                              color="primary"
                              type="submit"
                              fullWidth
                            >
                              {t('common:util_notif')}
                            </Button>
                          </Box>
                        )}
                      </Grid>
                    </Grid>
                  </Box>
                </div>
                <Box mb={{ xs: 10, sm: 0 }}>
                  <IconButton color="primary" href="#"><FacebookIcon className={classes.fb} /></IconButton>
                  <IconButton color="primary" href="#"><InstagramIcon className={classes.ig} /></IconButton>
                  <IconButton color="primary" href="#"><TwitterIcon className={classes.tw} /></IconButton>
                  <IconButton color="primary" href="#"><LinkedInIcon className={classes.li} /></IconButton>
                </Box>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
      <BuildingDeco />
    </Fragment>
  );
}

function ComingSoon(props) {
  return(
    <div>
      <Cloud pageName="Coming Soon">
        <SoonContent {...props} />
      </Cloud>
    </div>
  )
}

ComingSoon.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

ComingSoon.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['common'])(ComingSoon);
