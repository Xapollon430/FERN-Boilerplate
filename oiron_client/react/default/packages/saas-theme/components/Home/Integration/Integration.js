import React from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'next-i18next';
import { useText, useTextAlign } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import useStyle from './integration-style';
import Title from '../../Title';

const integration1 = [
  {
    color: 'Primary',
    icon: 'ion-android-time',
    title: 'Nam vitae scelerisque lorem',
    subtitle: 'Quis tempus libero proin varius'
  },
  {
    color: 'Accent',
    icon: 'ion-ios-lightbulb-outline',
    title: 'Nam vitae scelerisque lorem',
    subtitle: 'Quis tempus libero proin varius'
  },
  {
    color: 'Secondary',
    icon: 'ion-ios-world-outline',
    title: 'Nam vitae scelerisque lorem',
    subtitle: 'Quis tempus libero proin varius'
  }
];

const integration2 = [
  {
    color: 'Secondary',
    icon: 'ion-ios-flask-outline',
    title: 'Nam vitae scelerisque lorem',
    subtitle: 'Quis tempus libero proin varius'
  },
  {
    color: 'Primary',
    icon: 'ion-ios-navigate-outline',
    title: 'Nam vitae scelerisque lorem',
    subtitle: 'Quis tempus libero proin varius'
  },
  {
    color: 'Accent',
    icon: 'ion-wand',
    title: 'Nam vitae scelerisque lorem',
    subtitle: 'Quis tempus libero proin varius'
  }
];

function Intergration() {
  const classes = useStyle();
  const { t } = useTranslation('common');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const text = useText();
  const align = useTextAlign();

  return (
    <div className={classes.root}>
      <div className={classes.decorationBg}>
        <svg className={classes.wave}>
          <use xlinkHref="/images/saas/deco-bg2.svg#main" />
        </svg>
      </div>
      <Container>
        <Grid container className={classes.decoWrap}>
          <div className={classes.dashedDivider} />
          <Grid item md={6} xs={12}>
            <Box mb={isMobile ? 10 : 0} px={{ sm: 5 }}>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInUpShort"
                offset={-100}
                delay={500}
                duration={0.5}
              >
                <div>
                  <figure className={classes.illustration}>
                    <img
                      className="img-2d3d"
                      src={imgAPI.saas[16]}
                      data-2d={imgAPI.saas[15]}
                      data-3d={imgAPI.saas[16]}
                      alt="background"
                    />
                  </figure>
                  <Title align="center">
                    <span>
                      {t('saas-landing.feature_title1')}
                    </span>
                  </Title>
                  <h6 className={clsx(text.subtitle2, align.textCenter)}>
                    {t('saas-landing.feature_desc1')}
                  </h6>
                </div>
              </ScrollAnimation>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box px={{ sm: 5 }}>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInUpShort"
                offset={-100}
                delay={800}
                duration={0.5}
              >
                <div>
                  <figure className={classes.illustration}>
                    <img
                      className="img-2d3d"
                      src={imgAPI.saas[18]}
                      data-2d={imgAPI.saas[17]}
                      data-3d={imgAPI.saas[18]}
                      alt="background"
                    />
                  </figure>
                  <Title align="center">
                    <span>
                      {t('saas-landing.feature_title3')}
                    </span>
                  </Title>
                  <h6 className={clsx(text.subtitle2, align.textCenter)}>
                    {t('saas-landing.feature_desc2')}
                  </h6>
                </div>
              </ScrollAnimation>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <div className={classes.timeline}>
          <div className={classes.solidDivider} />
          <Grid container>
            <Grid item sm={6} xs={12}>
              <Box px={{ md: 5 }}>
                <ul className={classes.leftSide}>
                  {integration1.map((item, index) => (
                    <li
                      key={index.toString()}
                      className={classes['type' + item.color]}
                    >
                      <ScrollAnimation
                        animateOnce
                        animateIn="fadeInRightShort"
                        offset={-100}
                        delay={(200 + (100 * index))}
                        duration={0.5}
                      >
                        <div className={classes.item}>
                          <div className={classes.text}>
                            <strong>{item.title}</strong>
                            <p>{item.subtitle}</p>
                          </div>
                          <div className={classes.icon}>
                            <i className={item.icon} />
                          </div>
                        </div>
                      </ScrollAnimation>
                    </li>
                  ))}
                </ul>
              </Box>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Box px={{ md: 5 }}>
                <ul className={classes.rightSide}>
                  {integration2.map((item, index) => (
                    <li
                      key={index.toString()}
                      className={classes['type' + item.color]}
                    >
                      <ScrollAnimation
                        animateOnce
                        animateIn="fadeInLeftShort"
                        offset={-100}
                        delay={(200 + (200 * index))}
                        duration={0.5}
                      >
                        <div className={classes.item}>
                          <div className={classes.icon}>
                            <i className={item.icon} />
                          </div>
                          <div className={classes.text}>
                            <strong>{item.title}</strong>
                            <p>{item.subtitle}</p>
                          </div>
                        </div>
                      </ScrollAnimation>
                    </li>
                  ))}
                </ul>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Intergration;
