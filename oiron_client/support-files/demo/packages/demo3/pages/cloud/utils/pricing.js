import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/cloud/@Custom/Header';
import Pricing from '../../../components/cloud/Pricing';
import Faq from '../../../components/cloud/Faq';
import Footer from '../../../components/cloud/@Custom/Footer';
import FooterExtend from '../../../components/cloud/Footer/FooterExtend';
// Theme Wrapper
import Cloud from '../../../components/wrapper/Cloud';

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
          <div className={classes.spaceBottomShort}>
            <Box mt={{ sm: 3 }}>
              <Pricing />
            </Box>
            <div className={classes.spaceTop}>
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
      <Cloud pageName="Pricing">
        <PricingContent {...props} />
      </Cloud>
    </div>
  )
}

PricingPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default PricingPage;
