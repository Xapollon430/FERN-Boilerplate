import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import imgAPI from '~/public/images/imgAPI';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/social/@Custom/Header';
import Counter from '../../../components/social/Counter';
import Banner from '../../../components/social/About/Banner';
import PhotoSlider from '../../../components/social/About/PhotoSlider';
import TeamGrid from '../../../components/social/About/TeamGrid';
import CallAction from '../../../components/social/CallAction';
import Footer from '../../../components/social/@Custom/Footer';
import { withTranslation } from '~/i18n';
import { useTextAlign, useText } from '~/theme/common';
// Theme Wrapper
import Social from '../../../components/wrapper/Social';

function TeamContent(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

   // Translation Function
  const { t } = props;

  const classes = useSpacing();
  const align = useTextAlign();
  const text = useText();

  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <div className={classes.containerFront}>
          <Banner>
            <img
              src={imgAPI.ui[5]}
              data-2d={imgAPI.ui[4]}
              data-3d={imgAPI.ui[5]}
              className="img-2d3d"
              alt="services 3d"
            />
          </Banner>
          <Counter />
          <div className={classes.spaceTop}>
            <Container>
              <Box mb={3}>
                <h4 className={clsx(text.title2, text.textPrimary, isMobile ? align.textCenter : align.textLeft)}>
                  {t('common:about_team')}
                </h4>
              </Box>
              <p className={text.subtitle2}>
                Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <TeamGrid />
            </Container>
          </div>
          <div className={clsx(classes.spaceTopShort, classes.spaceBottomShort)}>
            <PhotoSlider />
          </div>
          <div className={classes.spaceTop}>
            <CallAction />
          </div>
        </div>
        <Footer bg toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

function Team(props) {
  return (
    <div>
      <Social pageName="Team">
        <TeamContent {...props} />
      </Social>
    </div>
  );
}

Team.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

Team.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['common'])(Team);
