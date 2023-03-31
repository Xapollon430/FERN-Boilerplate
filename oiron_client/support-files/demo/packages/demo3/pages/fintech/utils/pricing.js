import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/fintech/@Custom/Header';
import Pricing from '../../../components/fintech/Pricing';
import Faq from '../../../components/fintech/Faq';
import Footer from '../../../components/fintech/@Custom/Footer';
import FooterExtend from '../../../components/fintech/Footer/FooterExtend';
// Theme Wrapper
import Fintech from '../../../components/wrapper/Fintech';

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
            <Box mt={3}>
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
      <Fintech pageName="Pricing">
        <PricingContent {...props} />
      </Fintech>
    </div>
  )
}

PricingPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default PricingPage;
