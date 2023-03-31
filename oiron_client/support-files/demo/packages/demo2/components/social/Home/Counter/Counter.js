import React, { useState } from 'react';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';
import ReactWOW from 'react-wow';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './counter-style';

function Counter(props) {
  const classes = useStyles();
  const text = useText();
  const [play, setPlay] = useState(false);
  const { t } = props;
  const countup = (val, isPlay) => (
    <span>
      {isPlay ? <CountUp end={val} /> : 0}
    </span>
  );
  const handlePlay = () => {
    setTimeout(() => { setPlay(true); }, 200);
  };
  return (
    <div className={classes.counterWrap}>
      <Container maxWidth="md">
        <ReactWOW animation="fadeIn" offset={-200} callback={handlePlay}>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.counterInner}
            spacing={6}
          >
            <Grid md={4} item>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <h3 className={text.title}>
                    {countup(200, play)}
                    M
                  </h3>
                  <p className={text.subtitle}>
                    <i className="ion-ios-cloud-download-outline" />
                    {t('common:social-landing.counter_downloads')}
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
                    M
                  </h3>
                  <p className={text.subtitle}>
                    <i className="ion-ios-people-outline" />
                    {t('common:social-landing.counter_members')}
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
                    <i className="ion-ios-paw-outline" />
                    {t('common:social-landing.counter_communities')}
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </ReactWOW>
      </Container>
    </div>
  );
}

Counter.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['social-landing'])(Counter);
