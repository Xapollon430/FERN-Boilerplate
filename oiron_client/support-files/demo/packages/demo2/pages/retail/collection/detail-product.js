import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/retail/@Custom/Header';
import Detail from '../../../components/retail/List/Detail';
import Description from '../../../components/retail/List/Description';
import RelatedItems from '../../../components/retail/List/RelatedItems';
import CommentGroup from '../../../components/retail/Comment/Group';
import Footer from '../../../components/retail/@Custom/Footer';
// Theme Wrapper
import Retail from '../../../components/wrapper/Retail';

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
          <Box mt={{ lg: 4 }}>
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
  return (
    <div>
      <Retail pageName="Detail Product">
        <DetailContent {...props} />
      </Retail>
    </div>
  );
}

DetailProduct.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default DetailProduct;
