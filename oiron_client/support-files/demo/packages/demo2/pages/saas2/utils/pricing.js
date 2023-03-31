import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/saas2/@Custom/Header';
import Pricing from '../../../components/saas2/Pricing';
import Faq from '../../../components/saas2/Faq';
import Footer from '../../../components/saas2/@Custom/Footer';
// Theme Wrapper
import Saas2 from '../../../components/wrapper/Saas2';

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
      <Saas2 pageName="Pricing">
        <PricingContent {...props} />
      </Saas2>
    </div>
  );
}

PricingPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default PricingPage;
