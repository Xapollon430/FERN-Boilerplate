import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import ArrowIcon from '@material-ui/icons/Reply';
import UsersIcon from '@material-ui/icons/SupervisorAccount';
import LayerIcon from '@material-ui/icons/Layers';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './counter-style';

function Counter() {
  const classes = useStyles();
  const text = useText();
  const [play, setPlay] = useState(false);
  const { t } = useTranslation('common');
  const countup = (val, isPlay) => (
    <span>
      {isPlay ? <CountUp end={val} /> : 0}
    </span>
  );
  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 200);
    }
  };
  return (
    <div className={classes.counterWrap}>
      <Container maxWidth="md">
        <ScrollAnimation animateOnce animateIn="fadeIn" offset={-100} afterAnimatedIn={handlePlay}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={classes.counterInner}
            spacing={6}
          >
            <Grid md={4} item>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <h3 className={text.title}>
                    {countup(12, play)}
                    &nbsp;
                    {t('saas-landing.counter_month')}
                  </h3>
                  <p className={text.subtitle}>
                    <ArrowIcon />
                    {t('saas-landing.counter_free')}
                  </p>
                </div>
              </div>
            </Grid>
            <Grid md={4} item>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <h3 className={text.title}>
                    +
                    {countup(80, play)}
                    M
                  </h3>
                  <p className={text.subtitle}>
                    <UsersIcon />
                    {t('saas-landing.counter_users')}
                  </p>
                </div>
              </div>
            </Grid>
            <Grid md={4} item>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <h3 className={text.title}>
                    +
                    {countup(180, play)}
                    K
                  </h3>
                  <p className={text.subtitle}>
                    <LayerIcon />
                    {t('saas-landing.counter_providers')}
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </ScrollAnimation>
      </Container>
    </div>
  );
}

export default Counter;
