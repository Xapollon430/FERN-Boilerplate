import React from 'react';
import Container from '@material-ui/core/Container';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import { useText } from '~/theme/common';
import Title from '../../Title';
import useStyles from './benefit-style';

function Benefit() {
  const classes = useStyles();
  const text = useText();
  const { t } = useTranslation('common');

  const imgSlider = [
    imgAPI.crypto[28],
    imgAPI.crypto[29],
    imgAPI.crypto[30],
    imgAPI.crypto[31],
    imgAPI.crypto[32],
    imgAPI.crypto[33]
  ];

  const slickOptions = {
    dots: true,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 10000
  };

  return (
    <div className={classes.root}>
      <div className={classes.decoBg}>
        <svg>
          <use xlinkHref="/images/crypto/deco-benefit.svg#main" />
        </svg>
      </div>
      <Container maxWidth="md" fixed>
        <div className={classes.wrapper}>
          <div className={classes.desc}>
            <Title
              text={t('crypto-landing.benefit_title')}
              align="center"
            />
            <p className={text.subtitle2}>
              {t('crypto-landing.banner_subtitle')}
            </p>
            <div className={classes.carousel}>
              <Carousel
                {...slickOptions}
                className={classes.slider}
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

export default Benefit;
