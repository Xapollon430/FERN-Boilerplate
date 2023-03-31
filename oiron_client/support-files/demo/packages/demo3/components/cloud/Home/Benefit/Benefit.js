import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Carousel from 'react-slick';
import { withTranslation } from '~/i18n';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import imgAPI from '~/public/images/imgAPI';
import { useText } from '~/theme/common';
import Title from '../../Title';
import useStyles from './benefit-style';

function Benefit(props) {
  const classes = useStyles();
  const text = useText();
  const slider = useRef(null);
  const { t } = props;

  const imgSlider = [
    imgAPI.cloud[32],
    imgAPI.cloud[33],
    imgAPI.cloud[34],
    imgAPI.cloud[35],
    imgAPI.cloud[36],
    imgAPI.cloud[37]
  ];

  const slickOptions = {
    dots: true,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 10000
  };

  return (
    <div className={classes.root}>
      <div className={classes.illustrationBg}>
        <img
          className="img-2d3d"
          src={imgAPI.cloud[11]}
          data-2d={imgAPI.cloud[10]}
          data-3d={imgAPI.cloud[11]}
          alt="feature"
        />
      </div>
      <Container maxWidth="md" fixed>
        <div className={classes.wrapper}>
          <div className={classes.desc}>
            <Title
              caption={t('common:cloud-landing.benefit_headtitle')}
              text={t('common:cloud-landing.benefit_title')}
              align="center"
              dark
            />
            <p className={text.subtitle2}>
              {t('common:cloud-landing.banner_subtitle')}
            </p>
            <div className={classes.carousel}>
              <div className={classes.nav}>
                <a
                  href="#!"
                  className={classes.prev}
                  onClick={() => slider.current.slickPrev()}
                >
                  <ArrowForwardIosIcon />
                </a>
                <a
                  href="#!"
                  className={classes.next}
                  onClick={() => slider.current.slickNext()}
                >
                  <ArrowForwardIosIcon />
                </a>
              </div>
              <Carousel
                {...slickOptions}
                className={classes.slider}
                ref={slider}
              >
                {imgSlider.map((item, index) => (
                  <div className={classes.slide} key={index.toString()}>
                    <div className={classes.border}>
                      <figure>
                        <img src={item} alt="screen" />
                      </figure>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

Benefit.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['cloud-landing'])(Benefit);
