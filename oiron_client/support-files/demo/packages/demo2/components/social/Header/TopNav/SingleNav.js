import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import { withTranslation } from '~/i18n';
import navMenu from '../data/single';
import useStyles from '../header-style';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function MixedNav(props) {
  const classes = useStyles();

  const {
    menuPrimary,
    singleNav,
    t
  } = props;

  return (
    <Fragment>
      <Scrollspy
        className={classes.scrollactiveNav}
        items={navMenu}
        currentClassName="active"
      >
        {menuPrimary.map(item => (
          <li key={item.id.toString()}>
            {singleNav ? (
              <Button component={AnchorLink} href={item.url}>
                {t('social-landing:header_' + item.name)}
              </Button>
            ) : (
              <Button href={'/' + item.url}>
                {t('social-landing:header_' + item.name)}
              </Button>
            )}
          </li>
        ))}
        <li>
          <Button href="#">
            {t('common:header_sample_page')}
          </Button>
        </li>
      </Scrollspy>
    </Fragment>
  );
}

MixedNav.propTypes = {
  menuPrimary: PropTypes.array.isRequired,
  singleNav: PropTypes.bool,
  t: PropTypes.func.isRequired
};

MixedNav.defaultProps = {
  singleNav: false
};

MixedNav.getInitialProps = async () => ({
  namespacesRequired: ['common', 'social-landing'],
});

export default withTranslation(['common', 'social-landing'])(MixedNav);
