import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/social/@Custom/Header';
import PageDeco from '../../../components/social/Decoration/PageDeco';
import Contact from '../../../components/social/Forms/Contact';
import Footer from '../../../components/social/@Custom/Footer';
// Theme Wrapper
import Social from '../../../components/wrapper/Social';

function ContactContent(props) {
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
        <div className={clsx(classes.containerGeneral, classes.containerFront)}>
          <Container maxWidth="md">
            <Contact />
          </Container>
        </div>
        <div className={classes.spaceTopShort}>
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

function ContactPage(props) {
  return (
    <div>
      <Social pageName="Contect">
        <ContactContent {...props} />
      </Social>
    </div>
  );
}

ContactPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default ContactPage;
