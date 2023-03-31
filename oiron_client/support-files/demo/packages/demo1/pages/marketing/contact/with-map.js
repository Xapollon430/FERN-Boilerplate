import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/marketing/@Custom/Header';
import FormDeco from '../../../components/marketing/Decoration/FormDeco';
import ContactMap from '../../../components/marketing/Forms/ContactMap';
import Footer from '../../../components/marketing/@Custom/Footer';
// Theme Wrapper
import Marketing from '../../../components/wrapper/Marketing';

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
      <Marketing pageName="Contact Map">
        <MapContent {...props} />
      </Marketing>
    </div>
  )
};

WithMap.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default WithMap;
