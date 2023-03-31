import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/marketing/@Custom/Header';
import Pricing from '../../../components/marketing/Pricing';
import Faq from '../../../components/marketing/Faq';
import Footer from '../../../components/marketing/@Custom/Footer';
// Theme Wrapper
import Marketing from '../../../components/wrapper/Marketing';

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
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

function ContactPage(props) {
  return(
    <div>
      <Marketing pageName="Pricing">
        <PricingContent {...props} />
      </Marketing>
    </div>
  )
};

ContactPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default ContactPage;
