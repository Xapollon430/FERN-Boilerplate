import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/agency/@Custom/Header';
import Pricing from '../../../components/agency/Pricing';
import Faq from '../../../components/agency/Faq';
import Footer from '../../../components/agency/@Custom/Footer';
// Theme Wrapper
import Agency from '../../../components/wrapper/Agency';

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
  return(
    <div>
      <Agency pageName="Pricing">
        <PricingContent {...props} />
      </Agency>
    </div>
  )
};

PricingPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default PricingPage;
