import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useSpacing } from '~/theme/common';
import { withTranslation } from '~/i18n';
import imgAPI from '~/public/images/imgAPI';
import Header from '../../../components/saas/Header/BlogHeader';
import Headline from '../../../components/saas/Blog/Headline';
import PostCard from '../../../components/saas/Cards/PostCard';
import Sidebar from '../../../components/saas/Blog/Sidebar';
import Footer from '../../../components/saas/@Custom/Footer';
import link from '~/public/text/link';
// Theme Wrapper
import Saas from '../../../components/wrapper/Saas';

function BlogContent(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir, t } = props;
  return (
    <Fragment>
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <div className={classes.containerGeneral}>
          <Box pt={{ xs: 7, sm: 0 }}>
            <Container>
              <Grid container spacing={3}>
                <Grid item sm={12}>
                  <Headline />
                </Grid>
              </Grid>
              <Box mt={{ xs: 5, sm: 8 }}>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <PostCard
                      href={link.saas.blogDetail}
                      img={imgAPI.photo[37]}
                      title="Maecenas rutrum dolor sed nisi"
                      desc="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                      date="12 Nov 2020"
                      orientation="landscape"
                      type="oval"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <PostCard
                      href={link.saas.blogDetail}
                      img={imgAPI.photo[36]}
                      title="Maecenas rutrum dolor sed nisi"
                      desc="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                      date="12 Nov 2020"
                      orientation="landscape"
                      type="oval"
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box mt={2}>
                <Grid spacing={4} container>
                  <Grid item md={8} xs={12}>
                    {[...Array(6)].map((e, index) => (
                      <Box
                        key={index.toString()}
                        mt={index > 0 ? 8 : 0}
                      >
                        <PostCard
                          href={link.saas.blogDetail}
                          img={imgAPI.photo[30 + index]}
                          title="Maecenas rutrum dolor sed nisi"
                          desc="Maecenas rutrum dolor sed nisi maximus rhoncus. Nunc vel dignissim enim. Proin pretium arcu eget"
                          date="12 Nov 2020"
                          orientation="portrait"
                          type="oval"
                        />
                      </Box>
                    ))}
                    <Box mt={5} className={classes.arrow}>
                      <Grid container justify="space-between">
                        <Button>
                          <ArrowBackIcon />
                          {t('common:btn_prev')}
                        </Button>
                        <Button>
                          {t('common:btn_next')}
                          <ArrowForwardIcon />
                        </Button>
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <Sidebar />
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Box>
        </div>
        <div id="footer" className={classes.spaceTopShort}>
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

function BlogHome(props) {
  return(
    <div>
      <Saas pageName="Blog">
        <BlogContent {...props} />
      </Saas>
    </div>
  )
}

BlogHome.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

BlogHome.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['common'])(BlogHome);
