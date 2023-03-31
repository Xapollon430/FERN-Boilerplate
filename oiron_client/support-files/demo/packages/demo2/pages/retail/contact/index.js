import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import clsx from 'clsx';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/retail/@Custom/Header';
import FormDeco from '../../../components/retail/Decoration/FormDeco';
import Contact from '../../../components/retail/Forms/Contact';
import Footer from '../../../components/retail/@Custom/Footer';
// Theme Wrapper
import Retail from '../../../components/wrapper/Retail';

function ContactContent(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;

  return (
    <Fragment>
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <div className={clsx(classes.containerGeneral, classes.containerFront)}>
          <Container maxWidth="md">
            <Hidden smDown>
              <FormDeco />
            </Hidden>
            <Contact />
          </Container>
        </div>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

function ContactPage(props) {
  return (
    <div>
      <Retail pageName="Contact">
        <ContactContent {...props} />
      </Retail>
    </div>
  );
}

ContactPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default ContactPage;
