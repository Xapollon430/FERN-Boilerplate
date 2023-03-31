import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CountUp from 'react-countup';
import ReactWOW from 'react-wow';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withTranslation } from '~/i18n';
import { useText, useTextAlign } from '~/theme/common';
import useStyles from './counter-style';

function Counter(props) {
  const { t } = props;
  const classes = useStyles();
  const text = useText();
  const align = useTextAlign();

  // Counter Scroll
  const [play, setPlay] = useState(false);
  const countup = (val, isPlay) => (
    <span>
      {isPlay ? <CountUp end={val} /> : 0}
    </span>
  );
  const handlePlay = () => {
    setTimeout(() => { setPlay(true); }, 500);
  };

  return (
    <div className={classes.counterWrap}>
      <Container maxWidth="md">
        <Grid container justify="center" alignItems="center" spacing={6}>
          <Grid sm={4} item>
            <ReactWOW animation="fadeIn" offset={300} callback={handlePlay}>
              <div>
                <div className={classes.counterItem}>
                  <span className={clsx(classes.icon, text.primaryColor, 'ion-ios-people-outline')} />
                  <div className={classes.text}>
                    <h4>
                      +
                      {countup(456, play)}
                    </h4>
                    <h6 className={text.subtitle}>
                      {t('common:medical-landing.about_doctor')}
                    </h6>
                  </div>
                </div>
                <Typography className={align.textCenter}>Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. </Typography>
              </div>
            </ReactWOW>
          </Grid>
          <Grid sm={4} item>
            <div className={classes.counterItem}>
              <span className={clsx(classes.icon, text.primaryColor, 'ion-ios-home-outline')} />
              <div className={classes.text}>
                <h4>
                  +
                  {countup(123, play)}
                </h4>
                <h6 className={text.subtitle}>
                  {t('common:medical-landing.about_clinics')}
                </h6>
              </div>
            </div>
            <Typography className={align.textCenter}>Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. </Typography>
          </Grid>
          <Grid sm={4} item>
            <div className={classes.counterItem}>
              <span className={clsx(classes.icon, text.primaryColor, 'ion-ios-medkit-outline')} />
              <div className={classes.text}>
                <h4>
                  {countup(24, play)}
                </h4>
                <h6 className={text.subtitle}>
                  {t('common:medical-landing.about_hours')}
                </h6>
              </div>
            </div>
            <Typography className={align.textCenter}>Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Counter.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['medical-landing'])(Counter);
