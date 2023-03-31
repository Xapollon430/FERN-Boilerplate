import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import ReactWOW from 'react-wow';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { withTranslation } from '~/i18n';
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

function Integration(props) {
  const classes = useStyle();
  const { t } = props;
  const text = useText();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container className={classes.decoWrap}>
          <div className={classes.dashedDivider} />
          <Grid item md={6} xs={12}>
            <ReactWOW
              animation="fadeInDownShort"
              delay="0.5s"
              duration="0.5s"
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
                  caption={t('common:cloud-landing.mainfeature_titleitem2')}
                  text={t('common:cloud-landing.mainfeature_titleitem1')}
                  align="center"
                />
              </div>
            </ReactWOW>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box px={{ sm: 10 }}>
              <ReactWOW
                animation="fadeInUpShort"
                delay="0.8s"
                duration="0.5s"
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
                    caption={t('common:cloud-landing.morefeature_headtitle2')}
                    text={t('common:cloud-landing.benefit_title')}
                    align="center"
                  />
                </div>
              </ReactWOW>
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
                      <ReactWOW
                        animation="fadeInRightShort"
                        offset={-100}
                        delay={(0.2 + (0.1 * index)) + 's'}
                        duration="0.5s"
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
                      </ReactWOW>
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
                      <ReactWOW
                        animation="fadeInLeftShort"
                        offset={-100}
                        delay={(0.2 + (0.2 * index)) + 's'}
                        duration="0.5s"
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
                      </ReactWOW>
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
  t: PropTypes.func.isRequired
};

export default withTranslation(['cloud-landing'])(Integration);
