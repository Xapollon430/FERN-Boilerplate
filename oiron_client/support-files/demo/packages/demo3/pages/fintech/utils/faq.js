import React, { Fragment, useState } from 'react';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/fintech/@Custom/Header';
import Search from '../../../components/fintech/Filter/Search';
import FaqList from '../../../components/fintech/Faq/FaqList';
import TopicList from '../../../components/fintech/Faq/TopicList';
import HelperWidget from '../../../components/fintech/List/Sidebar/HelperWidget';
import Footer from '../../../components/fintech/@Custom/Footer';
import FooterExtend from '../../../components/fintech/Footer/FooterExtend';
// Theme Wrapper
import Fintech from '../../../components/wrapper/Fintech';

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
        <div className={clsx(classes.containerWrap, classes.containerFront)}>
          <Box mt={5}>
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
          </Box>
        </div>
        <FooterExtend>
          <Footer toggleDir={onToggleDir} />
        </FooterExtend>
      </div>
    </Fragment>
  );
}

function Faq(props) {
  return(
    <div>
      <Fintech pageName="Faq">
        <FaqContent {...props} />
      </Fintech>
    </div>
  )
}

Faq.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Faq;
