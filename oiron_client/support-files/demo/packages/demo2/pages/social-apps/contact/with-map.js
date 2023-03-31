import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/social/@Custom/Header';
import PageDeco from '../../../components/social/Decoration/PageDeco';
import ContactMap from '../../../components/social/Forms/ContactMap';
import Footer from '../../../components/social/@Custom/Footer';
// Theme Wrapper
import Social from '../../../components/wrapper/Social';

function WithMapContent(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;

  return (
    <Fragment>
      <div className={classes.mainWrap}>
        <PageDeco />
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
      <Social pageName="Contact with Map">
        <WithMapContent {...props} />
      </Social>
    </div>
  );
}

WithMap.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default WithMap;
