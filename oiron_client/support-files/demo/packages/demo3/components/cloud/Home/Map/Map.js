import React from 'react';
import PropTypes from 'prop-types';
import ReactWOW from 'react-wow';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import locationsData from './location-data';
import Title from '../../Title';
import useStyle from './map-style';

function LocationBuble(props) {
  const classes = useStyle();
  const { color } = props;
  return (
    <span className={clsx(classes.dot, classes[color + 'Color'])} />
  );
}

LocationBuble.propTypes = {
  color: PropTypes.string,
};

LocationBuble.defaultProps = {
  color: ''
};

function Map(props) {
  const { t } = props;
  const classes = useStyle();
  const text = useText();

  return (
    <div className={classes.root}>
      <Container>
        <Title
          caption={t('common:cloud-landing.mainfeature_title')}
          text={t('common:cloud-landing.morefeature_title2')}
          align="center"
        />
        <Grid container>
          <Grid item md={7} xs={12} className={classes.mapWrap}>
            <div className={classes.worldMap}>
              <div className={classes.locationWrap}>
                {locationsData.map((item, index) => (
                  <div
                    key={index.toString()}
                    className={classes.locationItem}
                    style={{
                      left: item.x + 'px',
                      top: item.y + 'px'
                    }}
                  >
                    <Tooltip title={item.name} placement="top">
                      <IconButton className={classes.location}>
                        <LocationBuble color={item.color} />
                      </IconButton>
                    </Tooltip>
                  </div>
                ))}
              </div>
            </div>
          </Grid>
          <Grid item md={5} xs={12}>
            <div className={classes.text}>
              <ReactWOW animation="fadeInLeftShort" offset={100} delay="0.2s" duration="0.3s">
                <Box px={4}>
                  <h3 className={clsx(classes.titlePrimary, text.subtitle)}>
                    <span />
                    Region A
                  </h3>
                  <p className={text.paragraph}>
                    Aliquam nec ex aliquet, aliquam neque non, gravida est. Vestibulum nec mi suscipit, dapibus purus a, imperdiet tellus.
                  </p>
                </Box>
              </ReactWOW>
              <ReactWOW animation="fadeInLeftShort" offset={100} delay="0.3s" duration="0.3s">
                <Box px={4}>
                  <h3 className={clsx(classes.titleSecondary, text.subtitle)}>
                    <span />
                    Region B
                  </h3>
                  <p className={text.paragraph}>
                    Aliquam nec ex aliquet, aliquam neque non, gravida est. Vestibulum nec mi suscipit, dapibus purus a, imperdiet tellus.
                  </p>
                </Box>
              </ReactWOW>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Map.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['cloud-landing'])(Map);
