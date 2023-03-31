import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-slick';
import { withTranslation } from '~/i18n';
import imgAPI from '~/public/images/imgAPI';
import Title from '../../Title';
import DiscoverCard from '../../Cards/DiscoverCard';
import useStyles from './discover-style';

const discoverData = [
  {
    title: 'item1_title',
    desc: 'item1_desc',
    color: 'primary',
    illustration: [imgAPI.social[15], imgAPI.social[16]],
    img: imgAPI.social[30]
  },
  {
    title: 'item2_title',
    desc: 'item2_desc',
    color: 'secondary',
    illustration: [imgAPI.social[17], imgAPI.social[18]],
    img: imgAPI.social[31]
  },
  {
    title: 'item3_title',
    desc: 'item3_desc',
    color: 'accent',
    illustration: [imgAPI.social[19], imgAPI.social[20]],
    img: imgAPI.social[32]
  },
  {
    title: 'item4_title',
    desc: 'item4_desc',
    color: 'primary',
    illustration: [imgAPI.social[21], imgAPI.social[22]],
    img: imgAPI.social[33]
  },
  {
    title: 'item5_title',
    desc: 'item5_desc',
    color: 'secondary',
    illustration: [imgAPI.social[23], imgAPI.social[24]],
    img: imgAPI.social[34]
  },
  {
    title: 'item6_title',
    desc: 'item6_desc',
    color: 'accent',
    illustration: [imgAPI.social[25], imgAPI.social[26]],
    img: imgAPI.social[35]
  }
];

function Discover(props) {
  const classes = useStyles();
  const { t } = props;

  // Slider Carousel
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 2,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={classes.root}>
      <Title align="center">
        <span>
          {t('common:social-landing.discover_title')}
        </span>
      </Title>
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <Carousel {...settings}>
            {discoverData.map((item, index) => (
              <div
                key={index.toString()}
                className={classes.item}
              >
                <DiscoverCard
                  img={item.img}
                  illustration2d={item.illustration[0]}
                  illustration3d={item.illustration[1]}
                  color={item.color}
                  title={t('common:social-landing.discover_' + item.title)}
                  desc={t('common:social-landing.discover_' + item.desc)}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

Discover.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['common', 'social-landing'])(Discover);
