import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import imgAPI from '~/public/images/imgAPI';
import Header from '../../../components/saas2/@Custom/Header';
import Counter from '../../../components/saas2/Counter';
import Banner from '../../../components/saas2/About/Banner';
import PhotoSlider from '../../../components/saas2/About/PhotoSlider';
import TeamGrid from '../../../components/saas2/About/TeamGrid';
import CallAction from '../../../components/saas2/CallAction';
import Footer from '../../../components/saas2/@Custom/Footer';
import { withTranslation } from '~/i18n';
import { useTextAlign, useText, useSpacing } from '~/theme/common';
// Theme Wrapper
import Saas2 from '../../../components/wrapper/Saas2';

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
          <div className={classes.spaceBottomShort}>
            <CallAction />
          </div>
        </div>
        <div className={classes.spaceTop}>
          <Footer bg toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

function Team(props) {
  return (
    <div>
      <Saas2 pageName="Team">
        <TeamContent {...props} />
      </Saas2>
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
