import React, { useRef } from 'react';
import Container from '@material-ui/core/Container';
import Carousel from 'react-slick';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import { useText, useTextAlign } from '~/theme/common';
import Title from '../../Title';
import TestiCard from '../../Cards/TestiCard';
import useStyle from './testi-style';

const testiData = [
  {
    img: imgAPI.fintech[34],
    text:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
    name: 'John Doe',
    title: 'Chief Digital Officer'
  },
  {
    img: imgAPI.fintech[35],
    text:
      'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    name: 'Jean Doe',
    title: 'Chief Digital Officer'
  },
  {
    img: imgAPI.fintech[36],
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    name: 'Jena Doe',
    title: 'Graphic Designer'
  },
  {
    img: imgAPI.fintech[37],
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    name: 'Jack Doe',
    title: 'Senior Graphic Designer'
  },
  {
    img: imgAPI.fintech[38],
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    name: 'James Doe',
    title: 'CEO Software House'
  },
  {
    img: imgAPI.fintech[39],
    text:
      'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer'
  }
];

function Testimonials() {
  // Translation function
  const { t } = useTranslation('common');

  const text = useText();
  const align = useTextAlign();

  const slider = useRef(null);
  const classes = useStyle();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 2,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={classes.root}>
      <Container>
        <Title
          align="center"
          text={t('fintech-landing.testi_title')}
        />
        <p className={clsx(text.subtitle2, align.textCenter)}>
          {t('fintech-landing.testi_subtitle')}
        </p>
        <div className={classes.sliderWrap}>
          <div className={classes.carousel}>
            <Button
              size="small"
              variant="contained"
              className={clsx(classes.nav, classes.prev)}
              onClick={() => slider.current.slickPrev()}
            >
              <i className="ion-ios-arrow-back" />
            </Button>
            <Carousel ref={slider} {...settings}>
              {testiData.map((item, index) => (
                <div key={index.toString()} className={classes.item}>
                  <TestiCard
                    text={item.text}
                    name={item.name}
                    title={item.title}
                    img={item.img}
                  />
                </div>
              ))}
            </Carousel>
            <Button
              variant="contained"
              size="small"
              className={clsx(classes.nav, classes.next)}
              onClick={() => slider.current.slickNext()}
            >
              <i className="ion-ios-arrow-forward" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

Testimonials.propTypes = {

};

export default Testimonials;
