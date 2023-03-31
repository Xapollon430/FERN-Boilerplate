import React, { Fragment } from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/fintech/Header/BlogHeader';
import Article from '../../../components/fintech/Blog/Article';
import Sidebar from '../../../components/fintech/Blog/Sidebar';
import Footer from '../../../components/fintech/@Custom/Footer';
import FooterExtend from '../../../components/fintech/Footer/FooterExtend';
// Theme Wrapper
import Fintech from '../../../components/wrapper/Fintech';

function DetailContent(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <div className={clsx(classes.containerGeneral, classes.containerFront)}>
          <Box pt={{ xs: 7, sm: 5 }} className={classes.spaceBottomShort}>
            <Container>
              <Grid container spacing={4}>
                <Grid item md={8} xs={12}>
                  <Article />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Sidebar />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </div>
        <div id="footer">
          <FooterExtend>
            <Footer toggleDir={onToggleDir} />
          </FooterExtend>
        </div>
      </div>
    </Fragment>
  );
}

function BlogDetail(props) {
  return(
    <div>
      <Fintech pageName="Blog Detail">
        <DetailContent {...props} />
      </Fintech>
    </div>
  )
}

BlogDetail.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default BlogDetail;
