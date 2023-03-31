import React, { useState, Fragment } from 'react';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import imgAPI from '~/public/images/imgAPI';
import { useSpacing, useText } from '~/theme/common';
import ProfileCards from '../../../components/agency/Cards/ProfileCard';
import ProductCards from '../../../components/agency/Cards/ProductCard';
import MediaCard from '../../../components/agency/Cards/MediaCard';
import NewsCard from '../../../components/agency/Cards/NewsCard';
import PostCard from '../../../components/agency/Cards/PostCard';
import Header from '../../../components/agency/@Custom/Header';
import Footer from '../../../components/agency/@Custom/Footer';
import Search from '../../../components/agency/Filter/Search';
import Sidebar from '../../../components/agency/List/Sidebar';
// Theme Wrapper
import Agency from '../../../components/wrapper/Agency';

function CollectionContent(props) {
  const classes = useSpacing();
  const text = useText();
  const { onToggleDark, onToggleDir } = props;
  const [keyword, setKeyword] = useState('');

  return (
    <Fragment>
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Search value={keyword} updateValue={setKeyword} />
        <section className={clsx(classes.containerFront, classes.containerWrap)}>
          <div className={classes.searchContent}>
            <Container>
              <Grid container alignItems="flex-start" justify="center" spacing={3}>
                <Grid item md={8} xs={12}>
                  <div id="profile_p" className={classes.spaceTopShort}>
                    <Box mb={3}>
                      <h4 className={text.subtitle}>
                        Profile Cards Portrait
                      </h4>
                    </Box>
                    <Grid container spacing={3}>
                      {[...Array(2)].map((e, index) => (
                        <Grid key={index.toString()} item sm={6} xs={12}>
                          <ProfileCards
                            connection={100}
                            favorites={10}
                            albums={12}
                            cover={imgAPI.photo[41]}
                            avatar={imgAPI.avatar[2]}
                            name="John Doe"
                            title="Web Designer"
                            type="over"
                            orientation="portrait"
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                  <div id="profile_l" className={classes.spaceTopShort}>
                    <Box mb={3}>
                      <h4 className={text.subtitle}>
                        Profile Cards Landscape
                      </h4>
                    </Box>
                    <Grid container>
                      {[...Array(3)].map((e, index) => (
                        <Grid key={index.toString()} item md={12} xs={12}>
                          <ProfileCards
                            connection={100}
                            favorites={10}
                            albums={12}
                            cover={imgAPI.photo[43]}
                            avatar={imgAPI.avatar[5]}
                            name="John Dalton"
                            title="Web Designer"
                            type="over"
                            orientation="landscape"
                          />
                          <br />
                          <br />
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                  <div id="product_p" className={classes.spaceTopShort}>
                    <Box mb={3}>
                      <h4 className={text.subtitle}>
                        Product Cards Portrait
                      </h4>
                    </Box>
                    <Grid container spacing={3}>
                      {[...Array(3)].map((e, index) => (
                        <Grid key={index.toString()} item sm={4} xs={12}>
                          <ProductCards
                            rating={3}
                            price={20}
                            img={imgAPI.photo[29]}
                            title="Sed lacinia velit"
                            desc="Proin pretium arcu eget metus porta consecteturc"
                            orientation="portrait"
                            type="over"
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                  <div id="product_l" className={classes.spaceTopShort}>
                    <Box mb={3}>
                      <h4 className={text.subtitle}>
                        Product Cards Landscape
                      </h4>
                    </Box>
                    <Grid container>
                      {[...Array(3)].map((e, index) => (
                        <Grid key={index.toString()} item md={12} xs={12}>
                          <Box mb={3}>
                            <ProductCards
                              rating={3}
                              price={20}
                              img={imgAPI.photo[25]}
                              title="Sed lacinia velit"
                              desc="Proin pretium arcu eget metus porta consecteturc"
                              orientation="landscape"
                              type="over"
                            />
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                  <div id="media_video" className={classes.spaceTopShort}>
                    <Box mb={3}>
                      <h4 className={text.subtitle}>
                        Video Cards
                      </h4>
                    </Box>
                    <Grid container spacing={3}>
                      {[...Array(2)].map((e, index) => (
                        <Grid key={index.toString()} item sm={6} xs={12}>
                          <MediaCard
                            title="Sed lacinia velit, ut malesuada eros interdum a"
                            orientation="portrait"
                            type="video"
                            duration="10:01"
                            thumb={imgAPI.photo[9]}
                            href="#"
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                  <div id="media_photo" className={classes.spaceTopShort}>
                    <Box mb={3}>
                      <h4 className={text.subtitle}>
                        Image Cards
                      </h4>
                    </Box>
                    <Grid container spacing={3}>
                      {[...Array(2)].map((e, index) => (
                        <Grid key={index.toString()} item sm={6} xs={12}>
                          <MediaCard
                            title="Sed lacinia velit, ut malesuada eros interdum a"
                            orientation="portrait"
                            type="photo"
                            duration="23:15"
                            thumb={imgAPI.photo[10]}
                            href="#"
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                  <div id="news_p" className={classes.spaceTopShort}>
                    <Box mb={3}>
                      <h4 className={text.subtitle}>
                        News Cards Portrait
                      </h4>
                    </Box>
                    <Grid container spacing={3}>
                      {[...Array(3)].map((e, index) => (
                        <Grid key={index.toString()} item sm={4} xs={12}>
                          <NewsCard
                            title="Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus."
                            headline="news"
                            orientation="portrait"
                            type="over"
                            img={imgAPI.photo[34]}
                            href="#"
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                  <div id="news_l" className={classes.spaceTopShort}>
                    <Box mb={3}>
                      <h4 className={text.subtitle}>
                        News Cards Landscape
                      </h4>
                    </Box>
                    <Grid container>
                      {[...Array(3)].map((e, index) => (
                        <Grid key={index.toString()} item md={12} xs={12}>
                          <NewsCard
                            title="Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus."
                            headline="news"
                            orientation="landscape"
                            type="over"
                            img={imgAPI.photo[37]}
                            href="#"
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                  <div id="post_p" className={classes.spaceTopShort}>
                    <Box mb={3}>
                      <h4 className={text.subtitle}>
                        Post Cards Portrait
                      </h4>
                    </Box>
                    <Grid container spacing={3}>
                      {[...Array(3)].map((e, index) => (
                        <Grid key={index.toString()} item sm={4} xs={12}>
                          <PostCard
                            title="Maecenas rutrum dolor sed nisi"
                            date="12 Nov 2021"
                            desc="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                            orientation="portrait"
                            type="over"
                            img={imgAPI.photo[36]}
                            href="#"
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                  <div id="post_l" className={classes.spaceTopShort}>
                    <Box mb={3}>
                      <h4 className={text.subtitle}>
                        Post Cards Landscape
                      </h4>
                    </Box>
                    <Grid container>
                      {[...Array(3)].map((e, index) => (
                        <Grid key={index.toString()} item md={12} xs={12}>
                          <PostCard
                            title="Maecenas rutrum dolor sed nisi"
                            date="12 Nov 2021"
                            desc="Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant. Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                            orientation="landscape"
                            type="over"
                            img={imgAPI.photo[32]}
                            href="#"
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </Grid>
                <Grid item lg={3} md={4} xs={12}>
                  <Box mt={8}>
                    <Sidebar />
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </div>
        </section>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

function Collection(props) {
  return(
    <div>
      <Agency pageName="Card Collection">
        <CollectionContent {...props} />
      </Agency>
    </div>
  )
};

Collection.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Collection;
