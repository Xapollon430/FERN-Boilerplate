import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import imgAPI from '~/public/images/imgAPI';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/marketing/@Custom/Header';
import Counter from '../../../components/marketing/Counter';
import Banner from '../../../components/marketing/About/Banner';
import PhotoSlider from '../../../components/marketing/About/PhotoSlider';
import TeamGrid from '../../../components/marketing/About/TeamGrid';
import CallAction from '../../../components/marketing/CallAction';
import Footer from '../../../components/marketing/@Custom/Footer';
import { withTranslation } from '~/i18n';
import { useTextAlign, useText } from '~/theme/common';
// Theme Wrapper
import Marketing from '../../../components/wrapper/Marketing';

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
            <p className={clsx(text.subtitle2, isMobile ? align.textCenter : align.textLeft)}>
              Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <TeamGrid />
          </Container>
        </div>
        <div className={clsx(classes.spaceTopShort, classes.spaceBottomShort)}>
          <PhotoSlider />
        </div>
        <div className={classes.spaceBottom}>
          <CallAction />
        </div>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

function Team(props) {
  return(
    <div>
      <Marketing pageName="Team">
        <TeamContent {...props} />
      </Marketing>
    </div>
  )
};

Team.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

Team.propTypes = {
  t: PropTypes.func.isRequired,
};


export default withTranslation(['common'])(Team);
