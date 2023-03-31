import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import useStyles from './about-style';
import Counter from '../Counter';

function About(props) {
  const text = useText();
  const { t } = props;

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={0}>
          <Grid item md={6} xs={12}>
            <div className={classes.puzzle}>
              <Box p={{ sm: 6 }}>
                <div className={clsx(classes.deco, classes.deco1)} />
                <div className={clsx(classes.deco, classes.deco2)} />
                <figure className={clsx(classes.img, classes.big)}>
                  <img src={imgAPI.marketing[20]} alt="gallery" />
                </figure>
                <figure className={clsx(classes.img, classes.medium)}>
                  <img src={imgAPI.marketing[19]} alt="gallery" />
                </figure>
                <figure className={clsx(classes.img, classes.small)}>
                  <img src={imgAPI.marketing[18]} alt="gallery" />
                </figure>
                <div className={clsx(classes.deco, classes.deco3)} />
                <div className={clsx(classes.deco, classes.deco4)} />
                <div className={clsx(classes.deco, classes.deco5)} />
              </Box>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <h4 className={text.subtitle}>
              {t('common:marketing-landing.about_subtitle')}
            </h4>
            <Typography>
              Vestibulum sit amet tortor libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper ultrices. Aenean facilisis vitae purus facilisis semper.
            </Typography>
            <Counter />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

About.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['marketing-landing'])(About);
