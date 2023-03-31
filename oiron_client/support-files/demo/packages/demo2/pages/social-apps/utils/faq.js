import React, { Fragment, useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { useSpacing } from '~/theme/common';
import brand from '~/public/text/brand';
import Header from '../../../components/social/@Custom/Header';
import Search from '../../../components/social/Filter/Search';
import FaqList from '../../../components/social/Faq/FaqList';
import TopicList from '../../../components/social/Faq/TopicList';
import HelperWidget from '../../../components/social/List/Sidebar/HelperWidget';
import Footer from '../../../components/social/@Custom/Footer';
// Theme Wrapper
import Social from '../../../components/wrapper/Social';

function FaqContent(props) {
  const classes = useSpacing();
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
        <div className={classes.containerWrap}>
          <div className={clsx(classes.containerGeneral, classes.spaceTopShort)}>
            <Grid spacing={3} justify="center" container>
              <Grid item md={6} xs={12}>
                <Box px={3}>
                  <FaqList />
                </Box>
              </Grid>
              <Grid item md={4} xs={12}>
                <Box px={3}>
                  <div className={classes.spaceBottomShort}>
                    <TopicList />
                  </div>
                  <div>
                    <HelperWidget />
                  </div>
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={classes.spaceTopShort}>
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

function Faq(props) {
  return (
    <div>
      <Social pageName="Faq">
        <FaqContent {...props} />
      </Social>
    </div>
  );
}

Faq.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Faq;
