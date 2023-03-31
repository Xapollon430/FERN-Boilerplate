import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import imgAPI from '~/public/images/imgAPI';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/fintech/@Custom/Header';
import Counter from '../../../components/fintech/Counter';
import Banner from '../../../components/fintech/About/Banner';
import PhotoSlider from '../../../components/fintech/About/PhotoSlider';
import TeamGrid from '../../../components/fintech/About/TeamGrid';
import FooterExtend from '../../../components/fintech/Footer/FooterExtend';
import Footer from '../../../components/fintech/@Custom/Footer';
import Title from '../../../components/fintech/Title';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
// Theme Wrapper
import Fintech from '../../../components/wrapper/Fintech';

function TeamContent(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

   // Translation Function
  const { t } = props;

  const classes = useSpacing();
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
              <Title align={isMobile ? 'center' : 'left'} text={t('common:about_team')} />
              <p className={text.subtitle2}>
                Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <TeamGrid />
            </Container>
          </div>
          <div className={clsx(classes.spaceTopShort, classes.spaceBottomShort)}>
            <PhotoSlider />
          </div>
        </div>
        <FooterExtend withCounter>
          <Footer toggleDir={onToggleDir} />
        </FooterExtend>
      </div>
    </Fragment>
  );
}

function Team(props) {
  return(
    <div>
      <Fintech pageName="Team">
        <TeamContent {...props} />
      </Fintech>
    </div>
  )
}

Team.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

Team.propTypes = {
  t: PropTypes.func.isRequired,
};


export default withTranslation(['common'])(Team);
