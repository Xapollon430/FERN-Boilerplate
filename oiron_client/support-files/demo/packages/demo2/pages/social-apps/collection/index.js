import React, { useState, Fragment } from 'react';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ProfileCards from '../../..//components/social/Cards/ProfileCard';
import ProductCards from '../../..//components/social/Cards/ProductCard';
import MediaCard from '../../..//components/social/Cards/MediaCard';
import NewsCard from '../../..//components/social/Cards/NewsCard';
import PostCard from '../../..//components/social/Cards/PostCard';
import { useSpacing, useText } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import Header from '../../../components/social/@Custom/Header';
import Footer from '../../../components/social/@Custom/Footer';
import Search from '../../../components/social/Filter/Search';
import Sidebar from '../../../components/social/List/Sidebar';
// Theme Wrapper
import Social from '../../../components/wrapper/Social';

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
          <div className={classes.spaceTopShort}>
            <Container>
              <Grid container alignItems="flex-start" justify="center" spacing={3}>
                <Grid item md={8} xs={12}>
                  <div id="profile_p">
                    <Box mb={3}>
                      <h4 className={clsx(text.subtitle, text.textPrimary)}>
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
                      <h4 className={clsx(text.subtitle, text.textPrimary)}>
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
                      <h4 className={clsx(text.subtitle, text.textPrimary)}>
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
                      <h4 className={clsx(text.subtitle, text.textPrimary)}>
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
                      <h4 className={clsx(text.subtitle, text.textPrimary)}>
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
                      <h4 className={clsx(text.subtitle, text.textPrimary)}>
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
                      <h4 className={clsx(text.subtitle, text.textPrimary)}>
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
                      <h4 className={clsx(text.subtitle, text.textPrimary)}>
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
                      <h4 className={clsx(text.subtitle, text.textPrimary)}>
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
                      <h4 className={clsx(text.subtitle, text.textPrimary)}>
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
                <Grid item md={4} xs={12}>
                  <Sidebar />
                </Grid>
              </Grid>
            </Container>
          </div>
        </section>
        <div className={classes.spaceTopShort}>
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

function Collection(props) {
  return (
    <div>
      <Social pageName="Collection">
        <CollectionContent {...props} />
      </Social>
    </div>
  );
}

Collection.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Collection;
