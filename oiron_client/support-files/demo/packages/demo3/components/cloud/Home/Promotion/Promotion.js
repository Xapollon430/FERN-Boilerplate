import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-slick';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './promotion-style';

const sliderData = [
  {
    icon: 'ion-cube',
    title: 'Wordpress Hosting start from $2/mo',
    desc:
      'Sed imperdiet enim ligula vitae viverra. Vivamus sit amet interdum elit.',
    date: '12 Jul - 10 Aug'
  },
  {
    icon: 'ion-ios-toggle',
    title: 'Dedicated VPS start from $5/mo',
    desc:
      'Sed imperdiet enim ligula vitae viverra. Vivamus sit amet interdum elit.',
    date: '12 Jul - 10 Aug'
  },
  {
    icon: 'ion-filing',
    title: '.COM + Hosting Only $15/mo',
    desc:
      'Sed imperdiet enim ligula vitae viverra. Vivamus sit amet interdum elit.',
    date: '12 Jul - 10 Aug'
  }
];

function Promotion(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;
  const slider = useRef(null);

  const slickOptions = {
    dots: false,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: 'ease-out',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          dots: true
        }
      }
    ]
  };

  const prev = () => {
    slider.current.slickNext();
  };

  const next = () => {
    slider.current.slickPrev();
  };

  return (
    <div className={classes.root}>
      <div className={classes.nav}>
        <a
          href="#!"
          className={classes.prev}
          onClick={() => prev()}
        >
          <ArrowBackIosIcon />
        </a>
        <a
          href="#!"
          className={classes.next}
          onClick={() => next()}
        >
          <ArrowForwardIosIcon />
        </a>
      </div>
      <div className={classes.sliderWrap}>
        <Carousel
          {...slickOptions}
          className={clsx(classes.slider, classes.slideContent)}
          ref={slider}
        >
          {sliderData.map((item, index) => (
            <div className={clsx(classes.inner, classes.item)} key={index.toString()}>
              <Container>
                <Grid container spacing={2} justify="center">
                  <Grid item md={3} sm={4} xs={12} className={classes.promoImage}>
                    <section>
                      <div className={classes.image}>
                        <span className={clsx(classes.icon, item.icon)} />
                      </div>
                    </section>
                  </Grid>
                  <Grid item md={7} sm={8} xs={12}>
                    <div className={classes.text}>
                      <Typography variant="h1">
                        <ButtonBase>
                          {item.title}
                        </ButtonBase>
                      </Typography>
                      <p className={text.subtitle2}>
                        {item.desc}
                      </p>
                      <section className={classes.time}>
                        <Typography component="h6" className={text.caption}>
                          <span>
                            {t('common:cloud-landing.promo_periode')}
                            :&nbsp;
                            {item.date}
                          </span>
                        </Typography>
                      </section>
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          ))}
        </Carousel>
      </div>
      <div className={classes.cloudTop}>
        <svg>
          <use xlinkHref="/images/cloud/cloud_top.svg#main" />
        </svg>
      </div>
      <div className={classes.cloudTopCover}>
        <svg>
          <use xlinkHref="/images/cloud/cloud_top.svg#main" />
        </svg>
      </div>
    </div>
  );
}

Promotion.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['cloud-landing'])(Promotion);
