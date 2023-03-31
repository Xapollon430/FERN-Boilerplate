import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/saas/@Custom/Header';
import Pricing from '../../../components/saas/Pricing';
import Faq from '../../../components/saas/Faq';
import Footer from '../../../components/saas/@Custom/Footer';
// Theme Wrapper
import Saas from '../../../components/wrapper/Saas';

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
      <Saas pageName="Pricing">
        <PricingContent {...props} />
      </Saas>
    </div>
  );
}

PricingPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default PricingPage;
