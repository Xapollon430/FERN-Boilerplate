import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/cloud/@Custom/Header';
import Detail from '../../../components/cloud/List/Detail';
import Description from '../../../components/cloud/List/Description';
import RelatedItems from '../../../components/cloud/List/RelatedItems';
import CommentGroup from '../../../components/cloud/Comment/Group';
import Footer from '../../../components/cloud/@Custom/Footer';
import FooterExtend from '../../../components/cloud/Footer/FooterExtend';
// Theme Wrapper
import Cloud from '../../../components/wrapper/Cloud';

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
        <FooterExtend>
          <Footer toggleDir={onToggleDir} />
        </FooterExtend>
      </div>
    </Fragment>
  );
}

function DetailProduct(props) {
  return(
    <div>
      <Cloud pageName="Detail Product">
        <DetailContent {...props} />
      </Cloud>
    </div>
  )
}

DetailProduct.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default DetailProduct;
