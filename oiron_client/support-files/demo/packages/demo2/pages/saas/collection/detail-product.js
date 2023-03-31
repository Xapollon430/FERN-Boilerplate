import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/saas/@Custom/Header';
import Detail from '../../../components/saas/List/Detail';
import Description from '../../../components/saas/List/Description';
import RelatedItems from '../../../components/saas/List/RelatedItems';
import CommentGroup from '../../../components/saas/Comment/Group';
import Footer from '../../../components/saas/@Custom/Footer';
// Theme Wrapper
import Saas from '../../../components/wrapper/Saas';

function DetailContent(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;

  return (
    <Fragment>
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <div className={classes.containerGeneral}>
          <Box pt={{ lg: 4 }}>
            <Detail />
            <Description />
            <RelatedItems />
            <div className={classes.spaceBottomShort}>
              <CommentGroup />
            </div>
          </Box>
        </div>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

function DetailProduct(props) {
  return (
    <div>
      <Saas pageName="Product Detail">
        <DetailContent {...props} />
      </Saas>
    </div>
  );
}

DetailProduct.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default DetailProduct;
