import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/fintech/@Custom/Header';
import ContactMap from '../../../components/fintech/Forms/ContactMap';
import FooterExtend from '../../../components/fintech/Footer/FooterExtend';
import Footer from '../../../components/fintech/@Custom/Footer';
// Theme Wrapper
import Fintech from '../../../components/wrapper/Fintech';

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
      <Fintech pageName="Contact with Map">
        <WithMapContent {...props} />
      </Fintech>
    </div>
  )
}

WithMap.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default WithMap;
