import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/retail/@Custom/Header';
import Pricing from '../../../components/retail/Pricing';
import Faq from '../../../components/retail/Faq';
import Footer from '../../../components/retail/@Custom/Footer';
// Theme Wrapper
import Retail from '../../../components/wrapper/Retail';

function PricingContent(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('sm'));

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
          <div className={classes.spaceTop}>
            <Faq />
          </div>
        </div>
        <div className={isTablet ? classes.spaceTop : ''}>
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

function PricingPage(props) {
  return (
    <div>
      <Retail pageName="Pricing">
        <PricingContent {...props} />
      </Retail>
    </div>
  );
}

PricingPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default PricingPage;
