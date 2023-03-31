import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/retail/@Custom/Header';
import FormDeco from '../../../components/retail/Decoration/FormDeco';
import ContactMap from '../../../components/retail/Forms/ContactMap';
import Footer from '../../../components/retail/@Custom/Footer';
// Theme Wrapper
import Retail from '../../../components/wrapper/Retail';

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
            <Hidden smDown>
              <FormDeco />
            </Hidden>
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
      <Retail pageName="Contact with Map">
        <WithMapContent {...props} />
      </Retail>
    </div>
  );
}

WithMap.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default WithMap;
