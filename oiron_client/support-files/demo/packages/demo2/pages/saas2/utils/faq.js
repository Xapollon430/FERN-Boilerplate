import React, { Fragment, useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/saas2/@Custom/Header';
import Search from '../../../components/saas2/Filter/Search';
import FaqList from '../../../components/saas2/Faq/FaqList';
import TopicList from '../../../components/saas2/Faq/TopicList';
import HelperWidget from '../../../components/saas2/List/Sidebar/HelperWidget';
import Footer from '../../../components/saas2/@Custom/Footer';
// Theme Wrapper
import Saas2 from '../../../components/wrapper/Saas2';

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
        <div className={clsx(classes.containerFront, classes.containerWrap)}>
          <div className={clsx(classes.containerGeneral, classes.spaceTopShort)}>
            <Grid spacing={3} justify="center" container>
              <Grid item md={6} xs={12}>
                <Box px={3}>
                  <div className={classes.spaceBottomShort}>
                    <FaqList />
                  </div>
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
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

function Faq(props) {
  return (
    <div>
      <Saas2 pageName="Faq">
        <FaqContent {...props} />
      </Saas2>
    </div>
  );
}

Faq.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Faq;
