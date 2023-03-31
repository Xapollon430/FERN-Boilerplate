import React from 'react';
import PropTypes from 'prop-types';
import ReactWOW from 'react-wow';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import ButtonBase from '@material-ui/core/ButtonBase';
import Box from '@material-ui/core/Box';
import { useText, useTextAlign } from '~/theme/common';
import { withTranslation } from '~/i18n';
import Title from '../../Title';
import useStyles from './business-style';

const businessData = [
  {
    icon: 'ion-briefcase',
    name: 'profesional',
    type: 'large',
    color: 'Primary',
    rotate: -90,
    x: 0,
    y: 0
  },
  {
    icon: 'ion-scissors',
    name: 'barbershop',
    type: 'medium',
    color: 'Secondary',
    rotate: 0,
    x: 320,
    y: 10
  },
  {
    icon: 'ion-tshirt',
    name: 'clothing',
    type: 'medium',
    color: 'Accent',
    rotate: 180,
    x: 40,
    y: 315
  },
  {
    icon: 'ion-android-home',
    name: 'minimarket',
    type: 'small',
    color: 'Secondary',
    rotate: 180,
    x: 275,
    y: 295
  },
  {
    icon: 'ion-android-restaurant',
    name: 'restaurant',
    type: 'large',
    color: 'Accent',
    rotate: 120,
    x: 425,
    y: 303
  },
  {
    icon: 'ion-android-car',
    name: 'automotive',
    type: 'medium',
    color: 'Primary',
    rotate: 80,
    x: 748,
    y: 277
  },
  {
    icon: 'ion-ios-wineglass',
    name: 'cafe',
    type: 'small',
    color: 'Accent',
    rotate: 120,
    x: 580,
    y: 100
  },
  {
    icon: 'ion-coffee',
    name: 'cofeshop',
    type: 'small',
    color: 'Primary',
    rotate: -60,
    x: 720,
    y: 10
  },
  {
    icon: 'ion-ios-cart',
    name: 'retail',
    type: 'large',
    color: 'Secondary',
    rotate: 0,
    x: 873,
    y: 0
  }
];

function Business(props) {
  const classes = useStyles();
  const { t } = props;
  const text = useText();
  const align = useTextAlign();

  return (
    <Container className={classes.root}>
      <Title align="center">
        {t('common:retail-landing.business_title')}
      </Title>
      <Box px={5}>
        <p className={clsx(text.subtitle2, align.textCenter)}>
          {t('common:retail-landing.business_desc')}
        </p>
      </Box>
      <div className={classes.circleGroup}>
        {businessData.map((item, index) => (
          <div key={index.toString()}>
            <ReactWOW
              offset={50}
              delay={(0.2 * index) + 's'}
              animation="zoomInShort"
              duration="0.5s"
            >
              <div
                className={clsx(classes.circle, classes['fill' + item.color], classes[item.type])}
                style={{ top: item.y + 'px', left: item.x + 'px' }}
              >
                <svg style={{ transform: `rotate(${item.rotate}deg)` }}>
                  <use xlinkHref={'/images/retail/circle-' + item.type + '.svg#main'} />
                </svg>
                <ButtonBase href="javascipt:void(0)" className={classes.paper}>
                  <i className={item.icon} />
                  <h6>
                    {item.name}
                  </h6>
                </ButtonBase>
              </div>
            </ReactWOW>
          </div>
        ))}
      </div>
    </Container>
  );
}

Business.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['retail-landing'])(Business);
