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
      <div className={classes.decoration}>
        <svg className={classes.wave}>
          <use xlinkHref="/images/saas/deco-bg.svg#main" />
        </svg>
      </div>
      <Container fixed={isDesktop}>
        <div className={classes.item}>
          <Grid container spacing={2} direction={isMobile ? 'column-reverse' : 'row'}>
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 8 }}>
                <ReactWOW
                  animation="fadeInLeftShort"
                  offset={100}
                  delay="0.5s"
                  duration="0.5s"
                >
                  <div className={classes.illustrationLeft}>
                    <figure className={clsx(classes.figure, classes.graphic)}>
                      <img
                        src={imgAPI.saas[10]}
                        data-2d={imgAPI.saas[9]}
                        data-3d={imgAPI.saas[10]}
                        className="img-2d3d"
                        alt="illustration"
                      />
                    </figure>
                  </div>
                </ReactWOW>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={classes.desc}>
                <Title align={isMobile ? 'center' : 'left'}>
                  <span>
                    {t('common:saas-landing.feature_title1')}
                    &nbsp;
                    <strong>
                      {t('common:saas-landing.feature_titlestrong1')}
                    </strong>
                  </span>
                </Title>
                <h6 className={clsx(text.subtitle2, isMobile ? align.textCenter : align.textLeft)}>
                  {t('common:saas-landing.feature_desc1')}
                </h6>
                <Button variant="contained" color="secondary" size="large" className={classes.btn}>
                  {t('common:saas-landing.see_detail')}
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <div>
                <Title align={isMobile ? 'center' : 'right'}>
                  <span>
                    {t('common:saas-landing.feature_title1')}
                    &nbsp;
                    <strong>
                      {t('common:saas-landing.feature_titlestrong2')}
                    </strong>
                  </span>
                </Title>
                <h6 className={clsx(text.subtitle2, isMobile ? align.textCenter : align.textRight)}>
                  {t('common:saas-landing.feature_desc2')}
                </h6>
                <div className={isMobile ? align.textCenter : align.textRight}>
                  <Button variant="contained" color="secondary" size="large" className={classes.btn}>
                    {t('common:saas-landing.see_detail')}
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <ReactWOW
                animation="fadeInRightShort"
                offset={200}
                delay="0.5s"
                duration="0.5s"
              >
                <div className={classes.illustrationRight}>
                  <figure className={clsx(classes.figure, classes.graphic)}>
                    <img
                      src={imgAPI.saas[12]}
                      data-2d={imgAPI.saas[11]}
                      data-3d={imgAPI.saas[12]}
                      className="img-2d3d"
                      alt="illustration"
                    />
                  </figure>
                </div>
              </ReactWOW>
            </Grid>
          </Grid>
        </div>
        <div className={clsx(classes.item, classes.last)}>
          <Title align="center">
            {t('common:saas-landing.feature_title3')}
            &nbsp;
            <strong>
              {t('common:saas-landing.feature_titlestrong3')}
            </strong>
          </Title>
          <div className={classes.tab}>
            <Grid container justify="center" spacing={6}>
              <Grid item md={10} xs={12}>
                <Box p={{ md: 6 }}>
                  <h6 className={clsx(align.textCenter, text.subtitle2)}>
                    {t('common:saas-landing.feature_desc3')}
                  </h6>
                  <ReactWOW
                    animation="fadeInUpShort"
                    offset={10}
                    delay="0.5s"
                    duration="0.5s"
                  >
                    <div className={classes.illustrationCenter}>
                      <figure className={classes.graphic}>
                        <img
                          src={imgAPI.saas[14]}
                          data-2d={imgAPI.saas[13]}
                          data-3d={imgAPI.saas[14]}
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
        </div>
      </Container>
    </div>
  );
}

Feature.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['saas-landing'])(Feature);
