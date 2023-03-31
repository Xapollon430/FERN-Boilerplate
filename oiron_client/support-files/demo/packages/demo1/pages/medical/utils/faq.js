import React, { Fragment, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/medical/@Custom/Header';
import Search from '../../../components/medical/Filter/Search';
import FaqList from '../../../components/medical/Faq/FaqList';
import TopicList from '../../../components/medical/Faq/TopicList';
import HelperWidget from '../../../components/medical/List/Sidebar/HelperWidget';
import Footer from '../../../components/medical/@Custom/Footer';
// Theme Wrapper
import Medical from '../../../components/wrapper/Medical';

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
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

function Faq(props) {
  return(
    <div>
      <Medical pageName="Faq">
        <FaqContent {...props} />
      </Medical>
    </div>
  )
};

Faq.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Faq;
