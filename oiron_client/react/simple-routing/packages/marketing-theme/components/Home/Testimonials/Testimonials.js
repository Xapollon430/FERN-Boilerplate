import React, { useRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import TestimonialCard from '../../Cards/TestiCard';
import imgAPI from '~/public/images/imgAPI';
import { useText } from '~/theme/common';
import SliderArt from '../SliderArt';
import DecoRoom from '../Deco/Room';
import useStyle from './testi-style';

const testiContent = [
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    avatar: imgAPI.avatar[10],
    name: 'John Doe',
    title: 'Chief Digital Officer',
    rating: 5
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[1],
    name: 'Jean Doe',
    title: 'Chief Digital Officer',
    rating: 4
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[2],
    name: 'Jena Doe',
    title: 'Graphic Designer',
    rating: 4
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    avatar: imgAPI.avatar[3],
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer',
    rating: 3
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[4],
    name: 'Jihan Doe',
    title: 'CEO Software House',
    rating: 5
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[6],
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer',
    rating: 5
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[7],
    name: 'John Doe',
    title: 'Senior Graphic Designer',
    rating: 4
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    avatar: imgAPI.avatar[10],
    name: 'John Doe',
    title: 'Chief Digital Officer',
    rating: 5
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[1],
    name: 'Jean Doe',
    title: 'Chief Digital Officer',
    rating: 4
  },
];

function Testimonials() {
  const classes = useStyle();
  const [fade, setFade] = useState(false);
  const text = useText();

  // Carousel Setting
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    afterChange: current => {
      const edge = testiContent.length - 4;
      if (current <= edge) {
        setFade(true);
      } else {
        setFade(false);
      }
    },
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  };

  // Translation function
  const { t } = useTranslation('common');

  // Carousel
  const slider = useRef(null);
  useEffect(() => {
    const prop = window.innerWidth > 1400 ? 0 : 1; // div.carousel-props length for screen < 1400px and (-1) for screen > 1400px
    const lastSlide = Math.floor(testiContent.length + prop - settings.slidesToShow);
    if (window.innerWidth > 1279) {
      slider.current.slickGoTo(lastSlide);
    }
  }, []);

  return (
    <div className={classes.root}>
      <Container className={classes.carouselHeader}>
        <Box flex="1" px={{ xs: 1, md: 3 }}>
          <h4 className={clsx(text.title2, text.capitalize)}>
            {t('marketing-landing.testimonial_title')}
          </h4>
          <p className={text.subtitle2}>Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed.</p>
        </Box>
      </Container>
      <div className={classes.carousel}>
        <Carousel ref={slider} {...settings}>
          {testiContent.map((item, index) => (
            <div key={index.toString()} className={classes.item}>
              <TestimonialCard
                avatar={item.avatar}
                title={item.title}
                name={item.name}
                text={item.text}
                star={item.rating}
              />
            </div>
          ))}
          <div className={classes.item}>
            <div className={classes.itemPropsLast} />
          </div>
        </Carousel>
      </div>
      <div className={classes.floatingArtwork}>
        <Container fixed>
          <div className={classes.artwork}>
            <SliderArt fade={fade}>
              <div>
                <ScrollAnimation animateOnce animateIn="fadeIn" duration={0.5}>
                  <DecoRoom />
                </ScrollAnimation>
                <ScrollAnimation animateOnce animateIn="fadeInLeftShort" offset={-60} delay={300} duration={0.5}>
                  <div>
                    <img
                      src={imgAPI.marketing[17]}
                      data-2d={imgAPI.marketing[16]}
                      data-3d={imgAPI.marketing[17]}
                      className="img-2d3d"
                      alt="testimonial 3d"
                    />
                  </div>
                </ScrollAnimation>
              </div>
            </SliderArt>
          </div>
        </Container>
      </div>
    </div>
  );
}

Testimonials.propTypes = {

};

export default Testimonials;
