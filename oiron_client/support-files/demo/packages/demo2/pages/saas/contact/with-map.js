import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/saas/@Custom/Header';
import FormDeco from '../../../components/saas/Decoration/FormDeco';
import ContactMap from '../../../components/saas/Forms/ContactMap';
import Footer from '../../../components/saas/@Custom/Footer';
// Theme Wrapper
import Saas from '../../../components/wrapper/Saas';

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
            <FormDeco />
            <div className={classes.containerFront}>
              <ContactMap />
            </div>
          </Container>
        </div>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

function WithMap(props) {
  return (
    <div>
      <Saas pageName="Contact with Map">
        <WithMapContent {...props} />
      </Saas>
    </div>
  );
}

WithMap.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default WithMap;
