import React, { useState, useEffect, useRef } from 'react';
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
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const classes = useStyles();
  const text = useText();
  const align = useTextAlign();
  const { t } = props;
  const slider = useRef(null);
  const sliderDeco = useRef(null);
  const [deco, setDeco] = useState(null);

  const [curSlide, setCurSlide] = useState(0);

  const slickOptionsDeco = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    fade: true,
    cssEase: 'ease-out',
    autoplay: false
  };

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

  useEffect(() => {
    setDeco(sliderDeco.current);
  }, []);

  return (
    <div className={classes.bannerWrap}>
      <div className={classes.carousel}>
        {isDesktop && (
          <Carousel
            {...slickOptionsDeco}
            className={classes.sliderDeco}
            ref={sliderDeco}
          >
            <div className={clsx(classes.slide, curSlide === 0 ? classes.cur : '')}>
              <div className={classes.inner}>
                <div className={classes.decoWrap}>
                  <div className={clsx(classes.deco, classes.s1)}>&nbsp;</div>
                </div>
              </div>
            </div>
            <div className={clsx(classes.slide, curSlide === 1 ? classes.cur : '')}>
              <div className={classes.inner}>
                <div className={classes.decoWrap}>
                  <div className={clsx(classes.deco, classes.s2)}>&nbsp;</div>
                </div>
              </div>
            </div>
            <div className={clsx(classes.slide, curSlide === 2 ? classes.cur : '')}>
              <div className={classes.inner}>
                &nbsp;
              </div>
            </div>
          </Carousel>
        )}
        <Carousel
          className={classes.slider}
          {...slickOptions}
          ref={slider}
          asNavFor={deco}
          afterChange={handleAfterChange}
        >
          <div className={classes.slide}>
            <div className={classes.inner}>
              <div className={clsx(classes.img, classes.backgroundBanner)}>
                <img
                  className="img-2d3d"
                  src={imgAPI.social[5]}
                  data-2d={imgAPI.social[4]}
                  data-3d={imgAPI.social[5]}
                  alt="background"
                />
              </div>
              <Container>
                <Grid spacing={6} container alignItems="center">
                  <Grid item md={7} lg={6} xs={12}>
                    <Box px={{ sm: 3 }}>
                      <div className={classes.text}>
                        <h4 className={text.title}>
                          {t('common:social-landing.banner_title')}
                        </h4>
                        <h5 className={text.subtitle}>
                          {t('common:social-landing.banner_desc')}
                        </h5>
                        <div className={clsx(classes.btnArea, classes.download)}>
                          <a href="#">
                            <img src="/images/social/app-store.png" alt="app store" />
                          </a>
                          <a href="#">
                            <img src="/images/social/play-store.png" alt="play store" />
                          </a>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item md={5} lg={6} xs={12}>
                    <div className={classes.img}>
                      <img
                        src={imgAPI.social[1]}
                        className={clsx('img-2d3d', classes.imgSlide1)}
                        data-2d={imgAPI.social[0]}
                        data-3d={imgAPI.social[1]}
                        alt="banner 1 3D"
                      />
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
          <div className={classes.slide}>
            <div className={classes.inner}>
              <Container>
                <Grid container spacing={4} justify="flex-end" alignItems="center" direction={isMobile ? 'column-reverse' : 'row'}>
                  <Grid item md={5} lg={6} xs={12}>
                    <div className={classes.img}>
                      <img
                        className={clsx('img-2d3d', classes.imgSlide2)}
                        src={imgAPI.social[3]}
                        data-2d={imgAPI.social[2]}
                        data-3d={imgAPI.social[3]}
                        alt="banner 2 3D"
                      />
                    </div>
                  </Grid>
                  <Grid item md={7} lg={6} xs={12}>
                    <Box px={{ sm: 2 }}>
                      <div className={classes.text}>
                        <h4 className={text.title}>
                          {t('common:social-landing.banner_title')}
                        </h4>
                        <h5 className={text.subtitle}>
                          {t('common:social-landing.banner_desc')}
                        </h5>
                        <div className={classes.btnArea}>
                          <Box justify="center">
                            <Button color="primary" href="#" className={classes.button}>
                              {t('common:btn_detail')}
                            </Button>
                            <Button size="large" variant="contained" color="secondary" href={link.social.register} className={classes.button}>
                              {t('common:btn_get')}
                            </Button>
                          </Box>
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
                <Grid container justify="flex-end">
                  <Grid item md={12} xs={12}>
                    <div className={clsx(classes.text, align.textCenter)}>
                      <h4 className={text.title}>
                        {t('common:social-landing.banner_title')}
                      </h4>
                      <h5 className={text.subtitle}>
                        {t('common:social-landing.banner_desc')}
                      </h5>
                      <div className={classes.btnArea}>
                        <Box justify="center">
                          <Button color="primary" href="#" className={classes.button}>
                            {t('common:btn_detail')}
                          </Button>
                          <Button size="large" variant="contained" color="secondary" href={link.social.register} className={classes.button}>
                            {t('common:btn_get')}
                          </Button>
                        </Box>
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <div className={clsx(classes.img, classes.hBanner)}>
                      <img
                        className="img-2d3d"
                        src={imgAPI.social[7]}
                        data-2d={imgAPI.social[6]}
                        data-3d={imgAPI.social[7]}
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
  );
}

BannerSlider.propTypes = {
  t: PropTypes.func.isRequired,
};

BannerSlider.getInitialProps = async () => ({
  namespacesRequired: ['common', 'social-landing'],
});

export default withTranslation(['common', 'social-landing'])(BannerSlider);
