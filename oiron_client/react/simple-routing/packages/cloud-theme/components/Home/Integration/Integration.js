import React from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import useStyle from './integration-style';
import { useText } from '~/theme/common';
import Title from '../../Title';

const integration1 = [
  {
    color: 'Secondary',
    icon: 'ion-flash',
    title: 'Nam vitae scelerisque lorem',
    subtitle: 'Quis tempus libero proin varius'
  },
  {
    color: 'Secondary',
    icon: 'ion-folder',
    title: 'Nam vitae scelerisque lorem',
    subtitle: 'Quis tempus libero proin varius'
  },
  {
    color: 'Secondary',
    icon: 'ion-locked',
    title: 'Nam vitae scelerisque lorem',
    subtitle: 'Quis tempus libero proin varius'
  }
];

const integration2 = [
  {
    color: 'Primary',
    icon: 'ion-merge',
    title: 'Nam vitae scelerisque lorem',
    subtitle: 'Quis tempus libero proin varius'
  },
  {
    color: 'Primary',
    icon: 'ion-soup-can',
    title: 'Nam vitae scelerisque lorem',
    subtitle: 'Quis tempus libero proin varius'
  },
  {
    color: 'Primary',
    icon: 'ion-upload',
    title: 'Nam vitae scelerisque lorem',
    subtitle: 'Quis tempus libero proin varius'
  }
];

function Integration() {
  const classes = useStyle();
  const { t } = useTranslation('common');
  const text = useText();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container className={classes.decoWrap}>
          <div className={classes.dashedDivider} />
          <Grid item md={6} xs={12}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInUpShort"
              delay={500}
              duration={0.5}
            >
              <div>
                <figure className={classes.illustration}>
                  <svg className={clsx(classes.droplet, classes.secondaryColor)}>
                    <use xlinkHref="/images/cloud/droplet.svg#main" />
                  </svg>
                  <img
                    className="img-2d3d"
                    src={imgAPI.cloud[21]}
                    data-2d={imgAPI.cloud[20]}
                    data-3d={imgAPI.cloud[21]}
                    alt="background"
                  />
                </figure>
                <Title
                  caption={t('cloud-landing.mainfeature_titleitem2')}
                  text={t('cloud-landing.mainfeature_titleitem1')}
                  align="center"
                />
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box px={{ sm: 10 }}>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInUpShort"
                delay={800}
                duration={0.5}
              >
                <div>
                  <figure className={classes.illustration}>
                    <svg className={clsx(classes.droplet, classes.primaryColor)}>
                      <use xlinkHref="/images/cloud/droplet.svg#main" />
                    </svg>
                    <img
                      className="img-2d3d"
                      src={imgAPI.cloud[23]}
                      data-2d={imgAPI.cloud[22]}
                      data-3d={imgAPI.cloud[23]}
                      alt="background"
                    />
                  </figure>
                  <Title
                    caption={t('cloud-landing.morefeature_headtitle2')}
                    text={t('cloud-landing.benefit_title')}
                    align="center"
                  />
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
              <Box px={{ lg: 5 }}>
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
                            <strong className={text.subtitle2}>{item.title}</strong>
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
              <Box px={{ lg: 5 }}>
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
                            <strong className={text.subtitle2}>{item.title}</strong>
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

Integration.propTypes = {

};

export default Integration;
