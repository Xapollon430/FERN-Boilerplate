import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './counter-single-style';

function CounterSingle() {
  const classes = useStyles();
  const text = useText();
  const { t } = useTranslation('common');
  const [play, setPlay] = useState(false);
  const countup = (val, isPlay) => (
    <span>
      {isPlay ? <CountUp end={val} /> : 0}
    </span>
  );
  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 500);
    }
  };
  return (
    <div className={classes.counterWrap}>
      <Container maxWidth="md">
        <ScrollAnimation animateOnce animateIn="fadeIn" offset={100} afterAnimatedIn={handlePlay}>
          <Typography variant="h3" className={text.title}>
            {countup(2, play)}
            &nbsp;
            {countup(234, play)}
            &nbsp;
            {countup(567, play)}
          </Typography>
          <p className={text.subtitle2}>
            {t('cloud-landing.footer_counter')}
          </p>
        </ScrollAnimation>
      </Container>
    </div>
  );
}

CounterSingle.propTypes = {

};

export default CounterSingle;
