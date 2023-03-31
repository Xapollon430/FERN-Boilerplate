import React, { useState, useRef } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Carousel from 'react-slick';
import PrevIcon from '@material-ui/icons/ArrowBack';
import NextIcon from '@material-ui/icons/ArrowForward';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import link from '~/public/text/link';
import { useText } from '~/theme/common';
import useStyles from './facilities-style';
import SliderArt from '../SliderArt';
import FacilityCard from '../../Cards/FacilityCard';

const servicesList = [
  {
    title: 'Lorem Ipsum',
    desc:
      'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
    img: imgAPI.medical[26]
  },
  {
    title: 'Etiam rhoncus',
    desc:
      'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
    img: imgAPI.medical[27]
  },
  {
    title: 'Duis fermentum',
    desc:
      'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
    img: imgAPI.medical[28]
  },
  {
    title: 'Lorem Ipsum',
    desc:
      'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
    img: imgAPI.medical[29]
  },
  {
    title: 'Etiam rhoncus',
    desc:
      'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
    img: imgAPI.medical[30]
  },
  {
    title: 'Duis fermentum',
    desc:
      'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
    img: imgAPI.medical[26]
  }
];

function Facilities() {
  const { t } = useTranslation('common');
  const classes = useStyles();
  const slider = useRef(null);
  const [fade, setFade] = useState(false);
  const text = useText();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    afterChange: current => {
      if (current > 0) {
        setFade(true);
      } else {
        setFade(false);
      }
    },
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className={classes.root}>
      <Container className={classes.carouselHeader}>
        <Box flex={1} px={{ xs: 2, sm: 3 }}>
          <h4 className={text.title}>
            {t('medical-landing.services_title')}
          </h4>
          <p className={text.subtitle2}>Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed.</p>
        </Box>
        <Button
          href={link.medical.product}
          color="primary"
          className={classes.viewAll}
        >
          {t('btn_seeall')}
          <NextIcon className={classes.icon} />
        </Button>
      </Container>
      <div className={classes.carouselHandle}>
        <div className={classes.carouselWrap}>
          <Carousel ref={slider} {...settings}>
            <div className={classes.item}>
              <div className={classes.carouselProp}>
                <div />
              </div>
            </div>
            {servicesList.map((item, index) => (
              <div className={classes.item} key={index.toString()}>
                <FacilityCard
                  title={item.title}
                  desc={item.desc}
                  img={item.img}
                  button={t('btn_detail')}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className={classes.floatingArtwork}>
        <Container fixed>
          <div className={classes.artwork}>
            <SliderArt fade={fade}>
              <ScrollAnimation animateOnce animateIn="fadeInLeftShort" offset={-60} delay={300} duration={0.5}>
                <div>
                  <img
                    src={imgAPI.medical[13]}
                    data-2d={imgAPI.medical[12]}
                    data-3d={imgAPI.medical[13]}
                    className="img-2d3d"
                    alt="services 3d"
                  />
                </div>
              </ScrollAnimation>
            </SliderArt>
            <nav className={classes.arrow}>
              <Fab size="small" onClick={() => slider.current.slickPrev()} aria-label="prev" className={classes.margin}>
                <PrevIcon />
              </Fab>
              <Fab size="small" onClick={() => slider.current.slickNext()} aria-label="next" className={classes.margin}>
                <NextIcon />
              </Fab>
            </nav>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Facilities;
