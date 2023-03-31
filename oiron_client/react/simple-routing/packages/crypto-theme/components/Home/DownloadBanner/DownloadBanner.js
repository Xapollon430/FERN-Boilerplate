import React from 'react';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import useStyles from './download-style';

function CallAction() {
  // Translation Function
  const { t } = useTranslation('common');
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <ScrollAnimation animateOnce animateIn="fadeInUpShort" offset={40} delay={300} duration={0.5}>
        <div className={classes.root}>
          {isDesktop && (
            <figure>
              <img src={imgAPI.crypto[35]} alt="mobile" />
            </figure>
          )}
          <div>
            <h3>{t('crypto-landing.download_mobile')}</h3>
            <div className={classes.btnArea}>
              <a href="#">
                <img src="/images/crypto/app-store.png" alt="app store" />
              </a>
              <a href="#">
                <img src="/images/crypto/play-store.png" alt="play store" />
              </a>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </Container>
  );
}

export default CallAction;
