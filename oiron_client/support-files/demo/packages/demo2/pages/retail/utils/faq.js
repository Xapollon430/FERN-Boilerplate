import React, { Fragment, useState } from 'react';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/retail/@Custom/Header';
import Search from '../../../components/retail/Filter/Search';
import FaqList from '../../../components/retail/Faq/FaqList';
import TopicList from '../../../components/retail/Faq/TopicList';
import HelperWidget from '../../../components/retail/List/Sidebar/HelperWidget';
import Footer from '../../../components/retail/@Custom/Footer';
// Theme Wrapper
import Retail from '../../../components/wrapper/Retail';

function FaqContent(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  const [keyword, setKeyword] = useState('');
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <Fragment>
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Search value={keyword} updateValue={setKeyword} />
        <div className={classes.containerWrap}>
          <div className={classes.spaceTopShort}>
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
        <div className={isTablet ? classes.spaceTop : classes.spaceTopShort}>
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

function Faq(props) {
  return (
    <div>
      <Retail pageName="Faq">
        <FaqContent {...props} />
      </Retail>
    </div>
  );
}

Faq.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Faq;
