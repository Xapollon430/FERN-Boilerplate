import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import ReactWOW from 'react-wow';
import Grid from '@material-ui/core/Grid';
import { withTranslation } from '~/i18n';
import { useTextAlign, useText } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import Title from '../../Title';
import TitleSecondary from '../../Title/TitleSecondary';
import useStyles from './feature-style';

function Feature(props) {
  const classes = useStyles();
  const text = useText();
  const align = useTextAlign();
  const theme = useTheme();

  const { t } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Title align="center">
          <span>
            {t('common:social-landing.feature_title')}
          </span>
        </Title>
        <div className={classes.item}>
          <Grid container alignItems="center" direction={isMobile ? 'column-reverse' : 'row'}>
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 4 }}>
                <ReactWOW
                  animation="fadeInLeftShort"
                  offset={100}
                  delay="0.5s"
                  duration="0.5s"
                >
                  <div className={classes.illustration}>
                    <div className={clsx(classes.bg, classes.liquid1)} />
                    <figure className={clsx(classes.screen1, classes.mobileScreen)}>
                      <img
                        src={imgAPI.social[27]}
                        alt="screen"
                      />
                    </figure>
                    <figure className={clsx(classes.graphic, classes.artwork1)}>
                      <img
                        src={imgAPI.social[10]}
                        data-2d={imgAPI.social[9]}
                        data-3d={imgAPI.social[10]}
                        className="img-2d3d"
                        alt="illustration"
                      />
                    </figure>
                  </div>
                </ReactWOW>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 4 }}>
                <div className={classes.desc}>
                  <TitleSecondary
                    text={t('common:social-landing.feature_title1')}
                    align={isMobile ? 'center' : 'left'}
                  />
                  <h6 className={clsx(text.subtitle2, isMobile ? align.textCenter : align.textLeft)}>
                    {t('common:social-landing.feature_desc1')}
                  </h6>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Grid container alignItems="center">
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 4 }}>
                <div className={classes.desc}>
                  <TitleSecondary
                    text={t('common:social-landing.feature_title2')}
                    align={isMobile ? 'center' : 'right'}
                  />
                  <h6 className={clsx(text.subtitle2, isMobile ? align.textCenter : align.textRight)}>
                    {t('common:social-landing.feature_desc2')}
                  </h6>
                </div>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 5 }}>
                <ReactWOW
                  animation="fadeInRightShort"
                  offset={200}
                  delay="0.5s"
                  duration="0.5s"
                >
                  <div className={classes.illustration}>
                    <div className={clsx(classes.bg, classes.liquid2)} />
                    <figure className={clsx(classes.screen2, classes.mobileScreen)}>
                      <img
                        src={imgAPI.social[28]}
                        alt="screen"
                      />
                    </figure>
                    <figure className={clsx(classes.graphic, classes.artwork2)}>
                      <img
                        src={imgAPI.social[12]}
                        data-2d={imgAPI.social[11]}
                        data-3d={imgAPI.social[12]}
                        className="img-2d3d"
                        alt="illustration"
                      />
                    </figure>
                  </div>
                </ReactWOW>
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className={clsx(classes.item, classes.last)}>
          <div className={classes.decorationBg}>
            <svg className={classes.wave}>
              <use xlinkHref="/images/social/deco-bg2.svg#main" />
            </svg>
          </div>
          <TitleSecondary
            text={t('common:social-landing.feature_title3')}
            align="center"
          />
          <Grid container justify="center" spacing={6}>
            <Grid item md={10} xs={12}>
              <Box p={{ sm: 6 }}>
                <h6 className={clsx(align.textCenter, text.subtitle2)}>
                  {t('common:social-landing.feature_desc3')}
                </h6>
                <ReactWOW
                  animation="fadeInUpShort"
                  offset={10}
                  delay="0.5s"
                  duration="0.5s"
                >
                  <div className={classes.illustration}>
                    <div className={clsx(classes.bg, classes.liquid3)} />
                    <figure className={clsx(classes.screen3, classes.desktopScreen)}>
                      <img
                        src={imgAPI.social[29]}
                        alt="screen"
                      />
                    </figure>
                    <figure className={clsx(classes.graphic, classes.artwork3)}>
                      <img
                        src={imgAPI.social[14]}
                        data-2d={imgAPI.social[13]}
                        data-3d={imgAPI.social[14]}
                        className="img-2d3d"
                        alt="illustration"
                      />
                    </figure>
                  </div>
                </ReactWOW>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

Feature.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['social-landing'])(Feature);
