import React from 'react';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import DecoBuilding from '../Deco/Building';
import useStyles from './speciality-style';

const expertiseList = [
  ['social media', 'marketing', 'SEO'],
  ['Web Development', 'UI Designs', 'Mobile Apps'],
  ['Photography', 'Company Profile', 'Visual Editing'],
  ['social media', 'marketing', 'SEO'],
  ['Web Development', 'UI Designs', 'Mobile Apps'],
  ['Photography', 'Company Profile', 'Visual Editing'],
  ['social media', 'marketing', 'SEO'],
  ['Web Development', 'UI Designs', 'Mobile Apps'],
  ['Photography', 'Company Profile', 'Visual Editing']
];

function Speciality() {
  const text = useText();

  // Translate Function
  const { t } = useTranslation('common');

  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true
  };

  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item md={7} lg={6} xs={12}>
            <Box px={{ sm: 3 }}>
              <h4 className={clsx(text.title2, text.capitalize)}>
                {t('marketing-landing.expertise_title')}
              </h4>
              <p className={clsx(classes.desc, text.subtitle2)}>
                {t('marketing-landing.expertise_paragraph')}
              </p>
              <div className={classes.runningTag}>
                <Carousel {...settings}>
                  {expertiseList.map((group, indexGroup) => (
                    <div className={classes.tagGroup} key={indexGroup.toString()}>
                      {group.map((item, indexChild) => (
                        <span className={classes.tagItem} key={indexChild.toString()}>{item}</span>
                      ))}
                    </div>
                  ))}
                </Carousel>
              </div>
            </Box>
          </Grid>
          <Grid item md={5} lg={6} xs={12}>
            <div className={classes.illustrationWrap}>
              <ScrollAnimation animateOnce animateIn="fadeIn" duration={0.3}>
                <div>
                  <DecoBuilding />
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateOnce animateIn="fadeInRightShort" offset={-50} delay={300} duration={0.3}>
                <figure>
                  <img
                    src={imgAPI.marketing[13]}
                    data-2d={imgAPI.marketing[12]}
                    data-3d={imgAPI.marketing[13]}
                    className="img-2d3d"
                    alt="speciality 3d"
                  />
                </figure>
              </ScrollAnimation>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Speciality.propTypes = {

};

export default Speciality;
