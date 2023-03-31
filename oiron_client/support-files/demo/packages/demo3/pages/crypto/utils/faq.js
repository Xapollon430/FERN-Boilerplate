import React, { Fragment, useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/crypto/@Custom/Header';
import Search from '../../../components/crypto/Filter/Search';
import FaqList from '../../../components/crypto/Faq/FaqList';
import TopicList from '../../../components/crypto/Faq/TopicList';
import HelperWidget from '../../../components/crypto/List/Sidebar/HelperWidget';
import Footer from '../../../components/crypto/@Custom/Footer';
import FooterExtend from '../../../components/crypto/Footer/FooterExtend';
// Theme Wrapper
import Crypto from '../../../components/wrapper/Crypto';

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
                <Box px={2}>
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
      <Crypto pageName="Faq">
        <FaqContent {...props} />
      </Crypto>
    </div>
  )
}

Faq.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Faq;
