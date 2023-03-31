import React, { Fragment } from 'react';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/crypto/@Custom/Header';
import Pricing from '../../../components/crypto/Pricing';
import Faq from '../../../components/crypto/Faq';
import Footer from '../../../components/crypto/@Custom/Footer';
import FooterExtend from '../../../components/crypto/Footer/FooterExtend';
// Theme Wrapper
import Crypto from '../../../components/wrapper/Crypto';

function PricingContent(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;

  return (
    <Fragment>
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <div className={clsx(classes.containerFront, classes.containerGeneral)}>
          <div className={classes.spaceBottomShort}>
            <Box mt={{ sm: 3 }}>
              <Pricing />
            </Box>
            <div className={classes.spaceTopShort}>
              <Faq />
            </div>
          </div>
        </div>
        <FooterExtend>
          <Footer toggleDir={onToggleDir} />
        </FooterExtend>
      </div>
    </Fragment>
  );
}

function PricingPage(props) {
  return(
    <div>
      <Crypto pageName="Pricing">
        <PricingContent {...props} />
      </Crypto>
    </div>
  )
}

PricingPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default PricingPage;
