import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/education/Header/BlogHeader';
import Article from '../../../components/education/Blog/Article';
import Sidebar from '../../../components/education/Blog/Sidebar';
import Footer from '../../../components/education/@Custom/Footer';
// Theme Wrapper
import Education from '../../../components/wrapper/Education';

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
      <Education pageName="Blog Detail">
        <ArticleContent {...props} />
      </Education>
    </div>
  )
};

BlogDetail.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default BlogDetail;
