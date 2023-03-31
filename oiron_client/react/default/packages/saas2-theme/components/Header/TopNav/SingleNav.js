import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import { useTranslation } from 'next-i18next';
import navMenu from '../data/single';
import useStyles from '../header-style';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function MixedNav(props) {
  const classes = useStyles();
  const { t } = useTranslation('common');

  const {
    menuPrimary,
    singleNav,
  } = props;

  return (
    <Scrollspy
      className={classes.scrollactiveNav}
      items={navMenu}
      currentClassName="active"
    >
      {menuPrimary.map(item => (
        <li key={item.id.toString()}>
          {singleNav ? (
            <Button component={AnchorLink} offset={() => 50} href={item.url}>
              {t('saas2-landing.header_' + item.name)}
            </Button>
          ) : (
            <Button href={'/' + item.url}>
              {t('saas2-landing.header_' + item.name)}
            </Button>
          )}
        </li>
      ))}
      <li>
        <Button href="#">
          {t('header_sample_page')}
        </Button>
      </li>
    </Scrollspy>
  );
}

MixedNav.propTypes = {
  menuPrimary: PropTypes.array.isRequired,
  singleNav: PropTypes.bool,
};

MixedNav.defaultProps = {
  singleNav: false
};

export default MixedNav;
