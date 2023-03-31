import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-slick';
import clsx from 'clsx';
import { withTranslation } from '~/i18n';
import imgAPI from '~/public/images/imgAPI';
import { useText, useTextAlign } from '~/theme/common';
import Title from '../../Title';
import PromoCard from '../../Cards/PromoCard';
import useStyle from './top-promotions-style';

const promoData = [
  {
    img: imgAPI.fintech[25],
    title: 'Aenean sit amet magna vel magna fringilla fermentum.',
    periode: 'Periode 27 Dec 2020 - 1 Jan 2021'
  },
  {
    img: imgAPI.fintech[26],
    title: 'Aenean sit amet magna vel magna fringilla fermentum.',
    periode: 'Periode 27 Dec 2020 - 1 Jan 2021'
  },
  {
    img: imgAPI.fintech[27],
    title: 'Aenean sit amet magna vel magna fringilla fermentum.',
    periode: 'Periode 27 Dec 2020 - 1 Jan 2021'
  },
  {
    img: imgAPI.fintech[28],
    title: 'Aenean sit amet magna vel magna fringilla fermentum.',
    periode: 'Periode 27 Dec 2020 - 1 Jan 2021'
  },
  {
    img: imgAPI.fintech[29],
    title: 'Aenean sit amet magna vel magna fringilla fermentum.',
    periode: 'Periode 27 Dec 2020 - 1 Jan 2021'
  },
  {
    img: imgAPI.fintech[30],
    title: 'Aenean sit amet magna vel magna fringilla fermentum.',
    periode: 'Periode 27 Dec 2020 - 1 Jan 2021'
  },
  {
    img: imgAPI.fintech[31],
    title: 'Aenean sit amet magna vel magna fringilla fermentum.',
    periode: 'Periode 27 Dec 2020 - 1 Jan 2021'
  },
  {
    img: imgAPI.fintech[33],
    title: 'Aenean sit amet magna vel magna fringilla fermentum.',
    periode: 'Periode 27 Dec 2020 - 1 Jan 2021'
  }
];


function TopPromotions(props) {
  // Translation function
  const { t } = props;

  const text = useText();
  const align = useTextAlign();

  const slider = useRef(null);
  const classes = useStyle();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={classes.root}>
      <Title
        align="center"
        text={t('common:fintech-landing.promotion_title')}
      />
      <p className={clsx(text.subtitle2, align.textCenter)}>
        {t('common:fintech-landing.promotion_desc')}
      </p>
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <Carousel ref={slider} {...settings}>
            {promoData.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <PromoCard
                  periode={item.periode}
                  title={item.title}
                  img={item.img}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

TopPromotions.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['fintech-landing'])(TopPromotions);
