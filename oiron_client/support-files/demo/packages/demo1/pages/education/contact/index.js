import React, { Fragment } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/education/@Custom/Header';
import Contact from '../../../components/education/Forms/Contact';
import Footer from '../../../components/education/@Custom/Footer';
// Theme Wrapper
import Education from '../../../components/wrapper/Education';

function ContactContent(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;

  // Media query
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'sm'));

  return (
    <Fragment>
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <div className={clsx(classes.containerGeneral, classes.containerFront)}>
          <Container maxWidth="md">
            <Contact />
          </Container>
        </div>
        <div className={isTablet ? classes.spaceTop : ''}>
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

function ContactPage(props) {
  return(
    <div>
      <Education pageName="Contact">
        <ContactContent {...props} />
      </Education>
    </div>
  )
};

ContactPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default ContactPage;
