import React, { Fragment } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import imgAPI from '~/public/images/imgAPI';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/crypto/@Custom/Header';
import Counter from '../../../components/crypto/Counter';
import Banner from '../../../components/crypto/About/Banner';
import PhotoSlider from '../../../components/crypto/About/PhotoSlider';
import TeamGrid from '../../../components/crypto/About/TeamGrid';
import FooterExtend from '../../../components/crypto/Footer/FooterExtend';
import Footer from '../../../components/crypto/@Custom/Footer';
import Title from '../../../components/crypto/Title';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
// Theme Wrapper
import Crypto from '../../../components/wrapper/Crypto';

function TeamContent(props) {
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
              <Box mb={3}>
                <Title text={t('common:about_team')} />
              </Box>
              <p className={text.subtitle2}>
                Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <TeamGrid />
            </Container>
          </div>
          <div className={classes.spaceTopShort}>
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
      <Crypto pageName="Team">
        <TeamContent {...props} />
      </Crypto>
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
