import React, { useRef, useState } from 'react';
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
import { useTranslation } from 'next-i18next';
import link from '~/public/text/link';
import imgAPI from '~/public/images/imgAPI';
import { useText, useTextAlign } from '~/theme/common';
import useStyles from './slider-style';

function BannerSlider() {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const classes = useStyles();
  const text = useText();
  const align = useTextAlign();
  const { t } = useTranslation('common');
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
      <div className={classes.carousel}>
        <Carousel
          {...slickOptions}
          className={classes.slider}
          afterChange={handleAfterChange}
          ref={slider}
        >
          <div className={classes.slide}>
            <div className={classes.inner}>
              <div className={clsx(classes.img, classes.backgroundBanner)}>
                <img
                  src={imgAPI.saas[5]}
                  data-2d={imgAPI.saas[4]}
                  data-3d={imgAPI.saas[5]}
                  alt="background"
                  className="img-2d3d"
                />
              </div>
              <Container>
                <Grid container alignItems="center">
                  <Grid item md={6} lg={6} xs={12}>
                    <Box px={3} alignItems="center">
                      <div className={classes.text}>
                        <h4 className={text.title2}>
                          {t('saas-landing.banner_title') + ' ' + t('saas-landing.banner_titlestrong')}
                        </h4>
                        <h5 className={text.subtitle2}>
                          {t('saas-landing.banner_subtitle')}
                        </h5>
                        <div className={classes.btnArea}>
                          <Button size="large" color="primary" href="#" className={clsx(classes.button, classes.textBtn)}>
                            {t('btn_detail')}
                          </Button>
                          <Button size="large" variant="contained" color="secondary" href={link.saas.register} className={clsx(classes.button, classes.containedBtn)}>
                            {t('saas-landing.getstarted')}
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Box px={{ sm: 3 }}>
                      <div className={classes.img}>
                        <div className={clsx(classes.ovalFloor, classes.slide1)} />
                        <img
                          className={clsx('img-2d3d', classes.imgSlide1)}
                          src={imgAPI.saas[1]}
                          data-2d={imgAPI.saas[0]}
                          data-3d={imgAPI.saas[1]}
                          alt="banner 1 3D"
                        />
                      </div>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
          <div className={classes.slide}>
            <div className={classes.inner}>
              <div className={clsx(classes.img, classes.backgroundBanner, classes.mobile)}>
                <img
                  src={imgAPI.saas[5]}
                  data-2d={imgAPI.saas[4]}
                  data-3d={imgAPI.saas[5]}
                  alt="background"
                  className="img-2d3d"
                />
              </div>
              <Container>
                <Grid container spacing={2} alignItems="center" justifyContent="flex-end" direction={isMobile ? 'column-reverse' : 'row'}>
                  <Grid item md={6} xs={12}>
                    <Box px={{ sm: 3 }}>
                      <div className={classes.img}>
                        <div className={clsx(classes.ovalFloor, classes.slide2)} />
                        <img
                          className={clsx('img-2d3d', classes.imgSlide2)}
                          src={imgAPI.saas[3]}
                          data-2d={imgAPI.saas[2]}
                          data-3d={imgAPI.saas[3]}
                          alt="banner 1 3D"
                        />
                      </div>
                    </Box>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Box px={3}>
                      <div className={classes.text}>
                        <h4 className={text.title2}>
                          {t('saas-landing.banner_title') + ' ' + t('saas-landing.banner_titlestrong')}
                        </h4>
                        <h5 className={text.subtitle2}>
                          {t('saas-landing.banner_subtitle')}
                        </h5>
                        <div className={classes.btnArea}>
                          <Button size="large" color="primary" href="#" className={clsx(classes.button, classes.textBtn)}>
                            {t('btn_detail')}
                          </Button>
                          <Button size="large" variant="contained" color="secondary" href={link.saas.register} className={classes.button}>
                            {t('saas-landing.getstarted')}
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
          <div className={clsx(classes.slide, classes.centerContent)}>
            <div className={classes.inner}>
              <Container>
                <Grid container spacing={2} justifyContent="flex-end">
                  <Grid item md={12} xs={12}>
                    <Box px={{ xs: 3, md: 12 }}>
                      <div className={clsx(classes.text, align.textCenter)}>
                        <h4 className={text.title2}>
                          {t('saas-landing.banner_title') + ' ' + t('saas-landing.banner_titlestrong')}
                        </h4>
                        <h5 className={text.subtitle2}>
                          {t('saas-landing.banner_subtitle')}
                        </h5>
                        <div className={classes.btnArea}>
                          <Button size="large" color="primary" href="#" className={clsx(classes.button, classes.textBtn)}>
                            {t('btn_detail')}
                          </Button>
                          <Button size="large" variant="contained" color="secondary" href={link.saas.register} className={classes.button}>
                            {t('saas-landing.getstarted')}
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <div className={clsx(classes.img, classes.hBanner)}>
                      <div className={clsx(classes.ovalFloor, classes.slide3)} />
                      <img
                        className="img-2d3d"
                        src={imgAPI.saas[7]}
                        data-2d={imgAPI.saas[6]}
                        data-3d={imgAPI.saas[7]}
                        alt="banner 1 3D"
                      />
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
        </Carousel>
      </div>
      <div className={classes.slideNavGroup}>
        <div className={classes.decoWrap}>
          <div className={clsx(classes.deco, classes.bottom)}>
            <svg className={classes.wave}>
              <use xlinkHref="/images/saas/deco-wave.svg#main" />
            </svg>
          </div>
          <div className={clsx(classes.deco, classes.top)}>
            <svg className={classes.wave}>
              <use xlinkHref="/images/saas/deco-wave.svg#main" />
            </svg>
          </div>
        </div>
        <div className={clsx(classes.wave, classes.waveCover)} />
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

export default BannerSlider;
