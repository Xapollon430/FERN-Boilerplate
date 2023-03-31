import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import imgAPI from '~/public/images/imgAPI';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/education/@Custom/Header';
import Counter from '../../../components/education/Counter';
import Banner from '../../../components/education/About/Banner';
import PhotoSlider from '../../../components/education/About/PhotoSlider';
import TeamGrid from '../../../components/education/About/TeamGrid';
import CallAction from '../../../components/education/CallAction';
import DecoFooter from '../../../components/education/Footer/DecorationTop';
import Footer from '../../../components/education/@Custom/Footer';
import Title from '../../../components/education/Title';
import { withTranslation } from '~/i18n';
// Theme Wrapper
import Education from '../../../components/wrapper/Education';

function TeamContent(props) {
   // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

   // Translation Function
  const { t } = props;

  const classes = useSpacing();

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
                <Title
                  align={isMobile ? 'center' : 'left'}
                  head={t('common:about_team')}
                  desc="Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </Box>
              <TeamGrid />
            </Container>
          </div>
          <div className={clsx(classes.spaceTopShort, classes.spaceBottomShort)}>
            <PhotoSlider />
          </div>
        </div>
        <div className={clsx(classes.bottomDecoWrap, classes.spaceBottom, classes.spaceTop)}>
          <DecoFooter />
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
      <Education pageName="Team">
        <TeamContent {...props} />
      </Education>
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
