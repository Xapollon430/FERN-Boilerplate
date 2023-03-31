import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import ReactWOW from 'react-wow';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { withTranslation } from '~/i18n';
import { useTextAlign, useText } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import Title from '../../Title';
import useStyles from './feature-style';

function MoreFeature(props) {
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
          <Grid
            direction={isMobile ? 'column-reverse' : 'row'}
            container
            spacing={6}
          >
            <Grid item md={6} xs={12}>
              <ReactWOW
                animation="fadeInRightShort"
                offset={-160}
                delay="0.4s"
                duration="0.3s"
              >
                <figure className={classes.illustration}>
                  <img
                    className="img-2d3d"
                    src={imgAPI.cloud[17]}
                    data-2d={imgAPI.cloud[16]}
                    data-3d={imgAPI.cloud[17]}
                    alt="feature"
                  />
                </figure>
              </ReactWOW>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={classes.text}>
                <div>
                  <Title
                    caption={t('common:cloud-landing.morefeature_headtitle1')}
                    text={t('common:cloud-landing.morefeature_title1')}
                    align={isMobile ? 'center' : 'left'}
                  />
                  <div className={isMobile ? align.textCenter : ''}>
                    <p className={text.subtitle2} align={isMobile ? 'center' : 'left'}>
                      {t('common:cloud-landing.morefeature_desc1')}
                    </p>
                    <Button variant="contained" color="primary">
                      {t('common:cloud-landing.learnmore')}
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.item}>
          <Grid container spacing={6}>
            <Grid item md={6} xs={12}>
              <div className={clsx(classes.text, align.textRight)}>
                <div>
                  <Title
                    caption={t('common:cloud-landing.morefeature_headtitle2')}
                    text={t('common:cloud-landing.morefeature_title2')}
                    align={isMobile ? 'center' : 'right'}
                  />
                  <div className={isMobile ? align.textCenter : ''}>
                    <p className={text.subtitle2} align={isMobile ? 'center' : 'right'}>
                      {t('common:cloud-landing.morefeature_desc2')}
                    </p>
                    <Button variant="contained" color="primary">
                      {t('common:cloud-landing.learnmore')}
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <ReactWOW
                animation="fadeInLeftShort"
                delay="0.4s"
                duration="0.3s"
              >
                <figure className={classes.illustration}>
                  <img
                    className="img-2d3d"
                    src={imgAPI.cloud[19]}
                    data-2d={imgAPI.cloud[18]}
                    data-3d={imgAPI.cloud[19]}
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

MoreFeature.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['cloud-landing'])(MoreFeature);
