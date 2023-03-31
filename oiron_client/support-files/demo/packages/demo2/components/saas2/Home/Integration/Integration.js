import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Icon from '@material-ui/core/Icon';
import ReactWOW from 'react-wow';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useText, useTextAlign } from '~/theme/common';
import { withTranslation } from '~/i18n';
import imgAPI from '~/public/images/imgAPI';
import useStyle from './integration-style';
import Title from '../../Title';

const integration1 = [
  {
    icon: 'search',
    title: 'Vestibulum a massa'
  },
  {
    icon: 'shuffle',
    title: 'Interdum et malesuada'
  },
  {
    icon: 'layers',
    title: 'Cras convallis lacus orci'
  },
  {
    icon: 'rss_feed',
    title: 'Nulla vehicula'
  },
  {
    icon: 'speed',
    title: 'Interdum et malesuada'
  },
  {
    icon: 'thumb_up',
    title: 'Cras convallis lacus orci'
  },
  {
    icon: 'cloud_upload',
    title: 'Donec sit amet nulla'
  },
  {
    icon: 'build',
    title: 'Donec sit amet nulla'
  }
];

const integration2 = [
  {
    icon: 'router',
    title: 'Vestibulum a massa'
  },
  {
    icon: 'shuffle',
    title: 'Interdum et malesuada'
  },
  {
    icon: 'equalizer',
    title: 'Cras convallis lacus orci'
  },
  {
    icon: 'add_circle',
    title: 'Nulla vehicula'
  },
  {
    icon: 'pie_chart',
    title: 'Interdum et malesuada'
  },
  {
    icon: 'supervisor_account',
    title: 'Cras convallis lacus orci'
  },
  {
    icon: 'merge_type',
    title: 'Donec sit amet nulla'
  },
  {
    icon: 'sync',
    title: 'Donec sit amet nulla'
  }
];

function Intergration(props) {
  const classes = useStyle();
  const { t } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const text = useText();
  const align = useTextAlign();

  return (
    <div className={classes.root}>
      <div className={classes.decorationBg}>
        <svg className={classes.wave}>
          <use xlinkHref="/images/saas2/deco-bg2.svg#main" />
        </svg>
      </div>
      <Container>
        <Grid container className={classes.row} spacing={6} justify="center">
          <Grid item lg={9} xs={12}>
            <Box py={{ lg: 6 }} px={{ sm: 6 }}>
              <Title align="center">
                <span>
                  {t('common:saas2-landing.feature_title1')}
                  <strong>
                    {t('common:saas2-landing.feature_titlestrong1')}
                  </strong>
                </span>
              </Title>
              <h6 className={clsx(align.textCenter, text.subtitle2)}>
                {t('common:saas2-landing.feature_desc3')}
              </h6>
              <div className={classes.list}>
                <Box mb={{ xs: 0, md: 15 }}>
                  <Grid container spacing={3} className={classes.row}>
                    <Grid item sm={6} xs={12}>
                      <ReactWOW
                        animation="fadeInUpShort"
                        offset={-100}
                        delay="0.5s"
                        duration="0.5s"
                      >
                        <div className={isDesktop ? align.textRight : align.textCenter}>
                          <figure className={clsx(classes.illustration, classes.left)}>
                            <img
                              className="img-2d3d"
                              src={imgAPI.saas2[16]}
                              data-2d={imgAPI.saas2[15]}
                              data-3d={imgAPI.saas2[16]}
                              alt="background"
                            />
                          </figure>
                          <h3 className={clsx(text.textPrimary, text.subtitle)}>
                            Ut sed eros finibus
                          </h3>
                          <p className={text.subtitle2}>
                            Quisque a consequat ante, at volutpat enim. Aenean sit amet magna vel magna fringilla fermentum.
                          </p>
                        </div>
                      </ReactWOW>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Box px={{ sm: 4 }}>
                        <ReactWOW
                          animation="fadeInUpShort"
                          offset={-100}
                          delay="0.8s"
                          duration="0.5s"
                        >
                          <div>
                            <ul className={classes.listPrimary}>
                              {integration1.map((item, index) => (
                                <li key={index.toString()}>
                                  <Icon className={classes.icon}>{item.icon}</Icon>
                                  {item.title}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </ReactWOW>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Grid container className={classes.row} direction={isMobile ? 'column-reverse' : 'row'}>
                  <Grid item sm={6} xs={12}>
                    <Box px={{ sm: 4 }}>
                      <ReactWOW
                        animation="fadeInUpShort"
                        offset={-100}
                        delay="0.8s"
                        duration="0.5s"
                      >
                        <div>
                          <ul className={classes.listSecondary}>
                            {integration2.map((item, index) => (
                              <li key={index.toString()}>
                                {item.title}
                                <Icon className={classes.icon}>{item.icon}</Icon>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </ReactWOW>
                    </Box>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Box px={{ sm: 4 }}>
                      <ReactWOW
                        animation="fadeInUpShort"
                        offset={-100}
                        delay="0.5s"
                        duration="0.5s"
                      >
                        <div className={isDesktop ? align.textLeft : align.textCenter}>
                          <figure className={classes.illustration}>
                            <img
                              className="img-2d3d"
                              src={imgAPI.saas2[18]}
                              data-2d={imgAPI.saas2[17]}
                              data-3d={imgAPI.saas2[18]}
                              alt="background"
                            />
                          </figure>
                          <h3 className={clsx(text.textSecondary, text.subtitle)}>
                            Ut sed eros finibus
                          </h3>
                          <p className={text.subtitle2}>
                            Quisque a consequat ante, at volutpat enim. Aenean sit amet magna vel magna fringilla fermentum.
                          </p>
                        </div>
                      </ReactWOW>
                    </Box>
                  </Grid>
                </Grid>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Intergration.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['saas2-landing'])(Intergration);
