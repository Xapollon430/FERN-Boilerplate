import React from 'react';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import Title from '../../Title';
import useStyles from './feature-style';

const featureList = [
  {
    img: '/images/cloud/gear.svg#main',
    title: 'titleitem1',
    desc: 'descitem1'
  },
  {
    img: '/images/cloud/connection.svg#main',
    title: 'titleitem2',
    desc: 'descitem2'
  },
  {
    img: '/images/cloud/support.svg#main',
    title: 'titleitem3',
    desc: 'descitem3'
  }
];

function MainFeature() {
  const classes = useStyles();
  const text = useText();
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainFeature}>
      <Container>
        <Title caption={t('cloud-landing.mainfeature_headtitle')} text={t('cloud-landing.mainfeature_title')} align="center" />
        <Grid container spacing={6} className={classes.grid}>
          {featureList.map((item, index) => (
            <Grid item sm={4} key={index.toString()}>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInUpShort"
                offset={-260}
                delay={(200 + (100 * index))}
                duration={0.3}
              >
                <div className={classes.item}>
                  <figure>
                    <svg className={classes.wave}>
                      <use xlinkHref={item.img} />
                    </svg>
                  </figure>
                  <Typography variant="h6" className={text.subtitle2}>
                    {t('cloud-landing.mainfeature_' + item.title)}
                  </Typography>
                  <Typography component="p" className={text.paragraph}>
                    {t('cloud-landing.mainfeature_' + item.desc)}
                  </Typography>
                </div>
              </ScrollAnimation>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

MainFeature.propTypes = {

};

export default MainFeature;
