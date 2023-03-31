import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/agency/Header/BlogHeader';
import Article from '../../../components/agency/Blog/Article';
import Sidebar from '../../../components/agency/Blog/Sidebar';
import Footer from '../../../components/agency/@Custom/Footer';
import brand from '../../../public/text/brand';
// Theme Wrapper
import Agency from '../../../components/wrapper/Agency';

function ArticleContent(props) {
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
          <Box pt={5} className={classes.spaceBottom}>
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
      <Agency pageName="Blog Detail">
        <ArticleContent {...props} />
      </Agency>
    </div>
  )
};

BlogDetail.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default BlogDetail;
