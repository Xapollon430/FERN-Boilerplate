import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/crypto/@Custom/Header';
import ContactMap from '../../../components/crypto/Forms/ContactMap';
import FooterExtend from '../../../components/crypto/Footer/FooterExtend';
import Footer from '../../../components/crypto/@Custom/Footer';
// Theme Wrapper
import Crypto from '../../../components/wrapper/Crypto';

function WithMapContent(props) {
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
          <Container className={classes.spaceBottomShort}>
            <div className={classes.containerFront}>
              <ContactMap />
            </div>
          </Container>
        </div>
        <FooterExtend>
          <Footer toggleDir={onToggleDir} />
        </FooterExtend>
      </div>
    </Fragment>
  );
}

function WithMap(props) {
  return(
    <div>
      <Crypto pageName="Contact with Map">
        <WithMapContent {...props} />
      </Crypto>
    </div>
  )
}

WithMap.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default WithMap;
