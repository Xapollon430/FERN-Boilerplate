import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/education/@Custom/Header';
import ContactMap from '../../../components/education/Forms/ContactMap';
import Footer from '../../../components/education/@Custom/Footer';
// Theme Wrapper
import Education from '../../../components/wrapper/Education';

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
      <Education pageName="Contact Map">
        <MapContent {...props} />
      </Education>
    </div>
  )
};

WithMap.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default WithMap;
