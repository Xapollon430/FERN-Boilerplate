import React from 'react';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import { useTranslation } from 'next-i18next';
import { useTextAlign } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import link from '~/public/text/link';
import Title from '../../Title';
import useStyles from './about-style';

function About() {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const classes = useStyles();
  const align = useTextAlign();
  const { t } = useTranslation('common');
  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container justifyContent="center" spacing={8}>
          <Grid item md={6} xs={12}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInLeftShort"
              offset={-100}
              delay={200}
              duration={0.6}
            >
              <div className={classes.illustration}>
                <img
                  src={imgAPI.education[38]}
                  data-2d={imgAPI.education[37]}
                  data-3d={imgAPI.education[38]}
                  className="img-2d3d"
                  alt="about"
                />
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className={isMobile ? align.textCenter : align.textLeft}>
              <Title
                head={t('education-landing.about_title')}
                desc={t('education-landing.about_desc')}
                align={isMobile ? 'center' : 'left'}
                color="secondary"
              />
              <Button
                href={link.education.login}
                className={classes.btn}
                color="secondary"
                variant="contained"
              >
                {t('education-landing.about_join')}
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
