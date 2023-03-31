import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './counter-style';

function Counter(props) {
  const { t } = props;
  const classes = useStyles();
  const text = useText();
  return (
    <div className={classes.counterWrap}>
      <Container fixed>
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <h3 className={clsx(classes.primaryLine, text.title)}>
                  +200
                </h3>
                <p className={text.subtitle}>
                  {t('common:marketing-landing.about_employee')}
                </p>
              </div>
            </div>
          </Grid>
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <h3 className={clsx(classes.secondaryLine, text.title)}>
                  +500
                </h3>
                <p className={text.subtitle}>
                  {t('common:marketing-landing.about_projects')}
                </p>
              </div>
            </div>
          </Grid>
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <h3 className={clsx(classes.accentLine, text.title)}>
                  +300
                </h3>
                <p className={text.subtitle}>
                  {t('common:marketing-landing.about_client')}
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Counter.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['marketing-landing'])(Counter);
