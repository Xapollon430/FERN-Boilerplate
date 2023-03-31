import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/cloud/@Custom/Header';
import ContactMap from '../../../components/cloud/Forms/ContactMap';
import FooterExtend from '../../../components/cloud/Footer/FooterExtend';
import Footer from '../../../components/cloud/@Custom/Footer';
// Theme Wrapper
import Cloud from '../../../components/wrapper/Cloud';

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
      <Cloud pageName="Map with Contact">
        <WithMapContent {...props} />
      </Cloud>
    </div>
  )
}

WithMap.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default WithMap;
