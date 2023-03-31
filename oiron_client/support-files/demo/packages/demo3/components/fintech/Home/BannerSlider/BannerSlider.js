import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';
import Carousel from 'react-slick';
import link from '~/public/text/link';
import imgAPI from '~/public/images/imgAPI';
import { withTranslation } from '~/i18n';
import { useText, useTextAlign } from '~/theme/common';
import useStyles from './slider-style';

function BannerSlider(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const classes = useStyles();
  const text = useText();
  const align = useTextAlign();
  const { t } = props;
  const slider = useRef(null);

  const [curSlide, setCurSlide] = useState(0);

  const slickOptions = {
    dots: false,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    infinite: true,
    autoplay: false,
    cssEase: 'ease-out',
    fade: isMobile,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          dots: true,
        }
      }
    ]
  };

  const handleAfterChange = currentSlide => {
    setCurSlide(currentSlide);
  };

  const gotoSlide = slide => {
    slider.current.slickGoTo(slide);
  };

  return (
    <div className={classes.bannerWrap}>
      <div className={classes.root}>
        <div className={classes.bannerWrap}>
          <div className={classes.carousel}>
            <Carousel
              {...slickOptions}
              className={classes.slider}
              afterChange={handleAfterChange}
              ref={slider}
            >
              <div className={classes.slide} id="slide1">
                <div className={classes.inner}>
                  <div className={clsx(classes.img, classes.backgroundBanner)}>
                    <div className={classes.deco}>
                      <div className={classes.decoLeft}>
                        <span className={classes.leaf} />
                        <span className={classes.land} />
                        <span className={classes.round} />
                      </div>
                      <div className={classes.decoRight}>
                        <span className={classes.leaf} />
                        <span className={classes.land} />
                        <span className={classes.round} />
                      </div>
                    </div>
                    <img
                      className="img-2d3d"
                      src={imgAPI.fintech[3]}
                      data-2d={imgAPI.fintech[2]}
                      data-3d={imgAPI.fintech[3]}
                      alt="background"
                    />
                  </div>
                  <Container>
                    <Grid container alignItems="center">
                      <Grid item md={6} lg={6} xs={12}>
                        <Box px={{ sm: 3 }} alignItems="center">
                          <div className={classes.text}>
                            <div className={classes.title}>
                              <h4 className={text.title2}>
                                {t('common:fintech-landing.banner_title')}
                              </h4>
                            </div>
                            <h5 className={text.subtitle2}>
                              {t('common:fintech-landing.banner_subtitle')}
                            </h5>
                            <div className={classes.btnArea}>
                              <Button size="large" variant="outlined" color="primary" href="#" className={classes.button}>
                                {t('common:btn_detail')}
                              </Button>
                              <Button size="large" variant="contained" color="primary" href={link.fintech.register} className={clsx(classes.button, classes.containedBtn)}>
                                {t('common:btn_get')}
                              </Button>
                            </div>
                          </div>
                        </Box>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Box px={{ sm: 3 }}>
                          <div className={classes.img}>
                            <img
                              className={clsx('img-2d3d', classes.imgSlide1)}
                              src={imgAPI.fintech[5]}
                              data-2d={imgAPI.fintech[4]}
                              data-3d={imgAPI.fintech[5]}
                              alt="banner 1 3D"
                            />
                          </div>
                        </Box>
                      </Grid>
                    </Grid>
                  </Container>
                </div>
              </div>
              <div className={classes.slide} id="slide2">
                <div className={classes.inner}>
                  <Container>
                    <Grid container justify="flex-end" direction={isMobile ? 'column-reverse' : 'row'}>
                      <Grid item md={6} xs={12}>
                        <Box px={{ sm: 3 }}>
                          <div className={classes.img}>
                            <img
                              className={clsx('img-2d3d', classes.imgSlide2)}
                              src={imgAPI.fintech[7]}
                              data-2d={imgAPI.fintech[6]}
                              data-3d={imgAPI.fintech[7]}
                              alt="banner 2 3D"
                            />
                          </div>
                        </Box>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Box px={{ sm: 3 }} alignItems="center">
                          <div className={classes.text}>
                            <div className={classes.title}>
                              <h4 className={text.title2}>
                                {t('common:fintech-landing.banner_title')}
                              </h4>
                            </div>
                            <h5 className={text.subtitle2}>
                              {t('common:fintech-landing.banner_subtitle')}
                            </h5>
                            <div className={classes.btnArea}>
                              <Button size="large" variant="outlined" color="primary" href="#" className={classes.button}>
                                {t('common:btn_detail')}
                              </Button>
                              <Button size="large" variant="contained" color="primary" href={link.fintech.register} className={clsx(classes.button, classes.containedBtn)}>
                                {t('common:btn_get')}
                              </Button>
                            </div>
                          </div>
                        </Box>
                      </Grid>
                    </Grid>
                  </Container>
                </div>
              </div>
              <div className={clsx(classes.slide, classes.centerContent)} id="slide3">
                <div className={classes.inner}>
                  <Container>
                    <Grid container justify="flex-end">
                      <Grid item md={12} xs={12}>
                        <Box px={{ sm: 12 }}>
                          <div className={clsx(classes.text, align.textCenter)}>
                            <div className={classes.title}>
                              <h4 className={text.title2}>
                                {t('common:fintech-landing.banner_title')}
                              </h4>
                            </div>
                            <h5 className={text.subtitle2}>
                              {t('common:fintech-landing.banner_subtitle')}
                            </h5>
                            <div className={classes.btnArea}>
                              <Button size="large" variant="outlined" color="primary" href="#" className={classes.button}>
                                {t('common:btn_detail')}
                              </Button>
                              <Button size="large" variant="contained" color="primary" href={link.fintech.register} className={clsx(classes.button, classes.containedBtn)}>
                                {t('common:btn_get')}
                              </Button>
                            </div>
                          </div>
                        </Box>
                      </Grid>
                      <Grid item md={12} xs={12}>
                        <div className={clsx(classes.img, classes.hBanner)}>
                          <img
                            className="img-2d3d"
                            src={imgAPI.fintech[9]}
                            data-2d={imgAPI.fintech[8]}
                            data-3d={imgAPI.fintech[9]}
                            alt="banner 3 3D"
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </Container>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className={classes.slideNavGroup}>
        <Hidden smDown>
          <Container>
            <nav className={classes.slideNav}>
              <ButtonBase
                className={clsx(classes.btnNav, curSlide === 0 ? classes.active : '')}
                onClick={() => gotoSlide(0)}
              >
                <strong>First Slide</strong>
                Interdum et malesuada fames ac ante
              </ButtonBase>
              <Divider className={classes.divider} orientation="vertical" flexItem />
              <ButtonBase
                className={clsx(classes.btnNav, curSlide === 1 ? classes.active : '')}
                onClick={() => gotoSlide(1)}
              >
                <strong>Second Slide</strong>
                Interdum et malesuada fames ac ante
              </ButtonBase>
              <Divider className={classes.divider} orientation="vertical" flexItem />
              <ButtonBase
                className={clsx(classes.btnNav, curSlide === 2 ? classes.active : '')}
                onClick={() => gotoSlide(2)}
              >
                <strong>Third Slide</strong>
                Interdum et malesuada fames ac ante
              </ButtonBase>
            </nav>
          </Container>
        </Hidden>
      </div>
    </div>
  );
}

BannerSlider.propTypes = {
  t: PropTypes.func.isRequired,
};

BannerSlider.getInitialProps = async () => ({
  namespacesRequired: ['common', 'fintech-landing'],
});

export default withTranslation(['common', 'fintech-landing'])(BannerSlider);
