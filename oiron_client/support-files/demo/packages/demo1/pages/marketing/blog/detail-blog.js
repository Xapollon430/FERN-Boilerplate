import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/marketing/Header/BlogHeader';
import Article from '../../../components/marketing/Blog/Article';
import Sidebar from '../../../components/marketing/Blog/Sidebar';
import Footer from '../../../components/marketing/@Custom/Footer';
// Theme Wrapper
import Marketing from '../../../components/wrapper/Marketing';

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
        <div className={classes.containerGeneral}>
          <Box pt={{ xs: 7, sm: 5 }} className={classes.spaceBottom}>
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
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

function BlogDetail(props) {
  return(
    <div>
      <Marketing pageName="Blog Detail">
        <DetailContent {...props} />
      </Marketing>
    </div>
  )
};

BlogDetail.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default BlogDetail;
