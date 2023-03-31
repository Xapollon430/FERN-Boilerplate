import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Carousel from 'react-slick';
import { useText } from '~/theme/common';
import { withTranslation } from '~/i18n';
import imgAPI from '~/public/images/imgAPI';
import Title from '../Title';
import ProfileCard from '../Cards/ProfileCard';
import useStyles from './about-style';

function PhotoSlider(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const [loaded, setLoaded] = useState(false);

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    variableWidth: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={clsx(classes.teamRoot, classes.bgWrapper)}>
      <Container>
        <Title align={isMobile ? 'center' : 'left'}>
          <span>
            {t('common:about_team')}
          </span>
        </Title>
        <p className={text.subtitle2}>
          Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </Container>
      <Box mt={5}>
        {loaded && (
          <div className={classes.carousel}>
            <Carousel {...settings}>
              {[...Array(6)].map((e, index) => (
                <div
                  key={index.toString()}
                  className={classes.item}
                >
                  <Box px={1}>
                    <ProfileCard
                      connection={100}
                      favorites={10}
                      albums={12}
                      cover={imgAPI.photo[41 + index]}
                      name="John Dalton"
                      title="Web Designer"
                      type="oval"
                      orientation="landscape"
                      avatar={imgAPI.avatar[index]}
                    />
                  </Box>
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </Box>
    </div>
  );
}

PhotoSlider.propTypes = {
  t: PropTypes.func.isRequired,
};

PhotoSlider.getInitialProps = async () => ({
  namespacesRequired: ['common', 'saas-landing'],
});

export default withTranslation(['common', 'saas-landing'])(PhotoSlider);
