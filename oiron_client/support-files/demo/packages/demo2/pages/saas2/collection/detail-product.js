import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/saas2/@Custom/Header';
import Detail from '../../../components/saas2/List/Detail';
import Description from '../../../components/saas2/List/Description';
import RelatedItems from '../../../components/saas2/List/RelatedItems';
import CommentGroup from '../../../components/saas2/Comment/Group';
import Footer from '../../../components/saas2/@Custom/Footer';
// Theme Wrapper
import Saas2 from '../../../components/wrapper/Saas2';

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
      <Saas2 pageName="Detail Product">
        <DetailContent {...props} />
      </Saas2>
    </div>
  );
}

DetailProduct.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default DetailProduct;
