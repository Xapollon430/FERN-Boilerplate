import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Grid from '@material-ui/core/Grid';
import { withTranslation } from '~/i18n';
import Title from '../../Title';
import useStyles from './merchants-style';

function Merchants(props) {
  const classes = useStyles();

  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { t } = props;

  const logos1 = [
    '/images/logos/architect.png',
    '/images/logos/cloud.png',
    '/images/logos/coin.png',
    '/images/logos/mobile.png',
    '/images/logos/profile.png',
    '/images/logos/saas.png',
    '/images/logos/agency-logo.png',
    '/images/logos/crypto-logo.png',
    '/images/logos/saas-logo.png',
    '/images/logos/cloud-logo.png',
    '/images/logos/fashion.png',
    '/images/logos/hosting-logo.png'
  ];
  const logos2 = [
    '/images/logos/agency-logo.png',
    '/images/logos/education-logo.png',
    '/images/logos/fashion-logo.png',
    '/images/logos/medical-logo.png',
    '/images/logos/mobile.png',
    '/images/logos/profile.png',
    '/images/logos/profile-logo.png',
    '/images/logos/starter.png',
    '/images/logos/coin.png',
    '/images/logos/profile.png',
    '/images/logos/saas.png',
    '/images/logos/agency.png'
  ];
  const logos3 = [
    '/images/logos/saas.png',
    '/images/logos/mobile.png',
    '/images/logos/profile.png',
    '/images/logos/profile-logo.png',
    '/images/logos/starter.png',
    '/images/logos/agency.png',
    '/images/logos/cloud-logo.png',
    '/images/logos/agency-logo.png',
    '/images/logos/mobile-logo.png',
    '/images/logos/fashion.png',
    '/images/logos/movie-logo.png',
    '/images/logos/education-logo.png'
  ];

  return (
    <div className={classes.root}>
      <Container>
        <Title
          text={t('common:fintech-landing.partner_title')}
          align="center"
        />
        <div className={classes.tab}>
          <Box p={{ sm: 3 }}>
            <Grid container justify="center">
              <Grid item md={10} xs={12}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="secondary"
                  centered={!isMobile}
                  className={classes.tabMenu}
                  classes={{
                    indicator: classes.indicator
                  }}
                >
                  <Tab classes={{ root: classes.tabLabel }} label="Online" />
                  <Tab classes={{ root: classes.tabLabel }} label="Offline" />
                  <Tab classes={{ root: classes.tabLabel }} label="Channel" />
                </Tabs>
                <div className={classes.tabContent}>
                  {value === 0 && (
                    <section>
                      <Grid container spacing={isMobile ? 2 : 4}>
                        {logos1.map((logo, index) => (
                          <Grid
                            item
                            key={index.toString()}
                            sm={2}
                            xs={4}
                          >
                            <div className={classes.imgLogo}>
                              <img src={logo} alt={'logo' + index} />
                            </div>
                          </Grid>
                        ))}
                      </Grid>
                    </section>
                  )}
                  {value === 1 && (
                    <section>
                      <Grid container spacing={isMobile ? 2 : 4}>
                        {logos2.map((logo, index) => (
                          <Grid
                            item
                            key={index.toString()}
                            sm={2}
                            xs={4}
                          >
                            <div className={classes.imgLogo}>
                              <img src={logo} alt={'logo' + index} />
                            </div>
                          </Grid>
                        ))}
                      </Grid>
                    </section>
                  )}
                  {value === 2 && (
                    <section>
                      <Grid container spacing={isMobile ? 2 : 4}>
                        {logos3.map((logo, index) => (
                          <Grid
                            item
                            key={index.toString()}
                            sm={2}
                            xs={4}
                          >
                            <div className={classes.imgLogo}>
                              <img src={logo} alt={'logo' + index} />
                            </div>
                          </Grid>
                        ))}
                      </Grid>
                    </section>
                  )}
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Container>
    </div>
  );
}

Merchants.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['fintech-landing'])(Merchants);
