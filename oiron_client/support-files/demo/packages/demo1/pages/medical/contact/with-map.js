import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/medical/@Custom/Header';
import ContactMap from '../../../components/medical/Forms/ContactMap';
import Footer from '../../../components/medical/@Custom/Footer';
// Theme Wrapper
import Medical from '../../../components/wrapper/Medical';

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
      <Medical pageName="About">
        <MapContent {...props} />
      </Medical>
    </div>
  )
};

WithMap.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default WithMap;
