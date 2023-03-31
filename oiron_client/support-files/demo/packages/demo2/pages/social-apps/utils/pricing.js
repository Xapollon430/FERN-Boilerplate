import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/social/@Custom/Header';
import Pricing from '../../../components/social/Pricing';
import Faq from '../../../components/social/Faq';
import Footer from '../../../components/social/@Custom/Footer';
// Theme Wrapper
import Social from '../../../components/wrapper/Social';

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
        <div className={classes.containerGeneral}>
          <Box mt={{ sm: 3 }}>
            <Pricing />
          </Box>
          <div className={classes.spaceTopShort}>
            <Faq />
          </div>
        </div>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

function PricingPage(props) {
  return (
    <div>
      <Social pageName="Pricing">
        <PricingContent {...props} />
      </Social>
    </div>
  );
}

PricingPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default PricingPage;
