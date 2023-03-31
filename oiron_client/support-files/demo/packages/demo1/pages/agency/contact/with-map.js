import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/agency/@Custom/Header';
import FormDeco from '../../../components/agency/Decoration/FormDeco';
import ContactMap from '../../../components/agency/Forms/ContactMap';
import Footer from '../../../components/agency/@Custom/Footer';
// Theme Wrapper
import Agency from '../../../components/wrapper/Agency';

function MapContent(props) {
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
  return(
    <div>
      <Agency pageName="Blog Detail">
        <MapContent {...props} />
      </Agency>
    </div>
  )
};

WithMap.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default WithMap;
