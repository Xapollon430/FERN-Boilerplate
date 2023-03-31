import React, { Fragment, useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/cloud/@Custom/Header';
import Search from '../../../components/cloud/Filter/Search';
import FaqList from '../../../components/cloud/Faq/FaqList';
import TopicList from '../../../components/cloud/Faq/TopicList';
import HelperWidget from '../../../components/cloud/List/Sidebar/HelperWidget';
import Footer from '../../../components/cloud/@Custom/Footer';
import FooterExtend from '../../../components/cloud/Footer/FooterExtend';
// Theme Wrapper
import Cloud from '../../../components/wrapper/Cloud';

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
          <div className={classes.containerGeneral}>
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
      <Cloud pageName="Faq">
        <FaqContent {...props} />
      </Cloud>
    </div>
  )
}

Faq.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Faq;
