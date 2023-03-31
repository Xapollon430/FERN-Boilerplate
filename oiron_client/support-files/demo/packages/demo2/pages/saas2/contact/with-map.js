import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/saas2/@Custom/Header';
import ContactMap from '../../../components/saas2/Forms/ContactMap';
import Footer from '../../../components/saas2/@Custom/Footer';
// Theme Wrapper
import Saas2 from '../../../components/wrapper/Saas2';

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
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

function WithMap(props) {
  return (
    <div>
      <Saas2 pageName="Contact with Map">
        <WithMapContent {...props} />
      </Saas2>
    </div>
  );
}

WithMap.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default WithMap;
