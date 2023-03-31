import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/medical/@Custom/Header';
import Pricing from '../../../components/medical/Pricing';
import Faq from '../../../components/medical/Faq';
import Footer from '../../../components/medical/@Custom/Footer';
// Theme Wrapper
import Medical from '../../../components/wrapper/Medical';

function ContactContent(props) {
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
            <div className={classes.spaceTopShort}>
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
      <Medical pageName="Pricing">
        <ContactContent {...props} />
      </Medical>
    </div>
  )
};

ContactPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default ContactPage;
