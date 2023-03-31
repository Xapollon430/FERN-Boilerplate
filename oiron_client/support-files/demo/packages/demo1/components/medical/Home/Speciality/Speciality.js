import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ReactWOW from 'react-wow';
import Carousel from 'react-slick';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import useStyles from './speciality-style';

const expertiseList = [
  ['Dentist', 'Padriatic', 'Cardiology'],
  ['Othopaedi', 'Traumatologi', 'Anestesiologi'],
  ['Reumatologi', 'Andrologi', 'Ortodonsia'],
  ['Dentist', 'Padriatic', 'Cardiology'],
  ['Othopaedi', 'Traumatologi', 'Anestesiologi'],
  ['Reumatologi', 'Andrologi', 'Ortodonsia'],
  ['Dentist', 'Padriatic', 'Cardiology'],
  ['Othopaedi', 'Traumatologi', 'Anestesiologi'],
  ['Reumatologi', 'Andrologi', 'Ortodonsia']
];

function Speciality(props) {
  // Theme breakpoints
  const theme = useTheme();
  const text = useText();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));

  // Translate Function
  const { t } = props;

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
    <Fragment>
      <div className={classes.root}>
        <Container>
          <Grid container>
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 6 }}>
                <h4 className={text.title}>
                  {t('common:medical-landing.expertise_title')}
                </h4>
                <Typography className={clsx(classes.desc, text.subtitle2)}>
                  {t('common:medical-landing.expertise_subtitle')}
                </Typography>
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
            {isTablet && (
              <Grid item md={6} xs={12}>
                <Box px={6}>
                  <div className={classes.circleWave}>
                    <div className={classes.ball}>
                      <img
                        src={imgAPI.medical[23]}
                        data-2d={imgAPI.medical[22]}
                        data-3d={imgAPI.medical[23]}
                        className="img-2d3d"
                        alt="speciality 3d"
                      />
                    </div>
                  </div>
                  <ReactWOW animation="zoomInShort" delay="0.3s" duration="0.3s">
                    <div className={classes.illustrationWrap}>
                      <div>
                        <span className={classes.iconGreen} />
                      </div>
                      <div>
                        <span className={classes.iconRed} />
                      </div>
                      <div>
                        <span className={classes.iconBlue} />
                      </div>
                    </div>
                  </ReactWOW>
                </Box>
              </Grid>
            )}
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}

Speciality.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['medical-landing'])(Speciality);
