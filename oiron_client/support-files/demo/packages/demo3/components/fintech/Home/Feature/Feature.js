import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import ReactWOW from 'react-wow';
import Grid from '@material-ui/core/Grid';
import { withTranslation } from '~/i18n';
import { useTextAlign, useText } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import Title from '../../Title';
import useStyles from './feature-style';

function Feature(props) {
  // Theme breakpoints
  const theme = useTheme();
  const text = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Translation Function
  const { t } = props;

  const classes = useStyles();
  const align = useTextAlign();

  return (
    <div className={classes.moreFeature}>
      <Container fixed={isDesktop}>
        <div className={classes.item}>
          <Grid container spacing={isMobile ? 2 : 6}>
            <Grid item md={6} xs={12}>
              <div className={classes.text}>
                <Title
                  text={t('common:fintech-landing.morefeature_title1')}
                  align={isMobile ? 'center' : 'left'}
                />
                <div className={isMobile ? align.textCenter : ''}>
                  <p className={clsx(text.subtitle2, isMobile ? align.textCenter : align.textLeft)}>
                    {t('common:fintech-landing.morefeature_subtitle1')}
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <ReactWOW
                animation="fadeInRightShort"
                delay="0.4s"
                duration="0.3s"
              >
                <figure className={classes.illustration}>
                  <img
                    className="img-2d3d"
                    src={imgAPI.fintech[11]}
                    data-2d={imgAPI.fintech[10]}
                    data-3d={imgAPI.fintech[11]}
                    alt="feature"
                  />
                </figure>
              </ReactWOW>
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Grid
            direction={isMobile ? 'column-reverse' : 'row'}
            container
            spacing={isMobile ? 2 : 6}
          >
            <Grid item md={6} xs={12}>
              <ReactWOW
                offset={100}
                animation="fadeInLeftShort"
                delay="0.4s"
                duration="0.3s"
              >
                <figure className={classes.illustration}>
                  <img
                    className="img-2d3d"
                    src={imgAPI.fintech[13]}
                    data-2d={imgAPI.fintech[12]}
                    data-3d={imgAPI.fintech[13]}
                    alt="feature"
                  />
                </figure>
              </ReactWOW>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box py={{ md: 3 }}>
                <div className={classes.text}>
                  <Title
                    text={t('common:fintech-landing.morefeature_title2')}
                    align={isMobile ? 'center' : 'left'}
                  />
                  <div className={isMobile ? align.textCenter : ''}>
                    <p className={clsx(text.subtitle2, isMobile ? align.textCenter : align.textLeft)}>
                      {t('common:fintech-landing.morefeature_subtitle2')}
                    </p>
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className={clsx(classes.item, classes.last)}>
          <Grid container>
            <Grid item xs={12}>
              <div className={clsx(classes.text, align.textCenter)}>
                <Title
                  text={t('common:fintech-landing.morefeature_title3')}
                  align="center"
                />
                <p className={clsx(text.subtitle2, align.textCenter)}>
                  {t('common:fintech-landing.morefeature_subtitle3')}
                </p>
              </div>
              <ReactWOW
                offset={100}
                animation="fadeInUpShort"
                delay="0.4s"
                duration="0.3s"
              >
                <figure className={classes.illustration}>
                  <img
                    className="img-2d3d"
                    src={imgAPI.fintech[15]}
                    data-2d={imgAPI.fintech[14]}
                    data-3d={imgAPI.fintech[15]}
                    alt="feature"
                  />
                </figure>
              </ReactWOW>
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

export default withTranslation(['fintech-landing'])(Feature);
