import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ReactWOW from 'react-wow';
import Grid from '@material-ui/core/Grid';
import { withTranslation } from '~/i18n';
import { useTextAlign, useText } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import Title from '../../Title';
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
      <div className={classes.decorationBg}>
        <svg className={classes.wave}>
          <use xlinkHref="/images/saas2/deco-bg.svg#main" />
        </svg>
      </div>
      <Container fixed={isDesktop}>
        <div className={classes.item}>
          <Grid container spacing={4} direction={isMobile ? 'column-reverse' : 'row'}>
            <Grid item md={6} xs={12}>
              <Box px={{ md: 2, lg: 8 }}>
                <ReactWOW
                  animation="fadeInLeftShort"
                  offset={-100}
                  duration="0.5s"
                >
                  <div className={classes.screenWrap}>
                    <img
                      className={clsx(classes.plant1, 'img-2d3d')}
                      src={imgAPI.saas2[10]}
                      data-2d={imgAPI.saas2[9]}
                      data-3d={imgAPI.saas2[10]}
                      alt="plant"
                    />
                    <div className={classes.illustration}>
                      <figure>
                        <img src={imgAPI.saas2[19]} alt="screen" />
                      </figure>
                    </div>
                  </div>
                </ReactWOW>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box px={{ md: 2, lg: 8 }}>
                <div className={classes.desc}>
                  <Title align={isMobile ? 'center' : 'left'}>
                    <span>
                      {t('common:saas2-landing.feature_title1')}
                      &nbsp;
                      <strong>
                        {t('common:saas2-landing.feature_titlestrong1')}
                      </strong>
                    </span>
                  </Title>
                  <h6 className={clsx(text.subtitle2, isMobile ? align.textCenter : align.textLeft)}>
                    {t('common:saas2-landing.feature_desc1')}
                  </h6>
                  <Button variant="contained" color="secondary" size="large" className={classes.btn}>
                    {t('common:saas2-landing.see_detail')}
                  </Button>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <Box px={{ md: 2, lg: 8 }}>
                <div className={classes.desc}>
                  <Title align={isMobile ? 'center' : 'right'}>
                    <span>
                      {t('common:saas2-landing.feature_title1')}
                      &nbsp;
                      <strong>
                        {t('common:saas2-landing.feature_titlestrong2')}
                      </strong>
                    </span>
                  </Title>
                  <h6 className={clsx(text.subtitle2, isMobile ? align.textCenter : align.textRight)}>
                    {t('common:saas2-landing.feature_desc2')}
                  </h6>
                  <div className={isMobile ? align.textCenter : align.textRight}>
                    <Button variant="contained" color="secondary" size="large" className={classes.btn}>
                      {t('common:saas2-landing.see_detail')}
                    </Button>
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box px={{ md: 2, lg: 8 }}>
                <ReactWOW
                  animation="fadeInRightShort"
                  offset={-200}
                  duration="0.5s"
                >
                  <div className={classes.screenWrap}>
                    <img
                      className={clsx(classes.plant2, 'img-2d3d')}
                      src={imgAPI.saas2[12]}
                      data-2d={imgAPI.saas2[11]}
                      data-3d={imgAPI.saas2[12]}
                      alt="plant"
                    />
                    <div className={classes.illustration}>
                      <figure>
                        <img src={imgAPI.saas2[20]} alt="screen" />
                      </figure>
                    </div>
                  </div>
                </ReactWOW>
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className={clsx(classes.item, classes.last)}>
          <Title align="center">
            {t('common:saas2-landing.feature_title3')}
            &nbsp;
            <strong>
              {t('common:saas2-landing.feature_titlestrong3')}
            </strong>
          </Title>
          <Grid container justify="center" spacing={3}>
            <Grid item md={10} xs={12}>
              <Box p={{ sm: 3 }}>
                <h6 className={clsx(align.textCenter, text.subtitle2)}>
                  {t('common:saas2-landing.feature_desc3')}
                </h6>
                <ReactWOW
                  animation="fadeInUpShort"
                  offset={10}
                  duration="0.5s"
                >
                  <div className={classes.screenWrap}>
                    <img
                      className={clsx(classes.plant3, 'img-2d3d')}
                      src={imgAPI.saas2[14]}
                      data-2d={imgAPI.saas2[13]}
                      data-3d={imgAPI.saas2[14]}
                      alt="plant"
                    />
                    <div className={clsx(classes.illustration, classes.screenCenter)}>
                      <figure>
                        <img src={imgAPI.saas2[21]} alt="screen" />
                      </figure>
                    </div>
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

export default withTranslation(['saas2-landing'])(Feature);
