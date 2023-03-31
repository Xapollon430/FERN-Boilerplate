import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/crypto/@Custom/Header';
import Detail from '../../../components/crypto/List/Detail';
import Description from '../../../components/crypto/List/Description';
import RelatedItems from '../../../components/crypto/List/RelatedItems';
import CommentGroup from '../../../components/crypto/Comment/Group';
import Footer from '../../../components/crypto/@Custom/Footer';
// Theme Wrapper
import Crypto from '../../../components/wrapper/Crypto';

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
            <CommentGroup />
          </Box>
        </div>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

function DetailProduct(props) {
  return(
    <div>
      <Crypto pageName="Product Detail">
        <DetailContent {...props} />
      </Crypto>
    </div>
  )
}

DetailProduct.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default DetailProduct;
