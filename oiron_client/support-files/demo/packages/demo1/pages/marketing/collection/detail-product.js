import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/marketing/@Custom/Header';
import Detail from '../../../components/marketing/List/Detail';
import Description from '../../../components/marketing/List/Description';
import RelatedItems from '../../../components/marketing/List/RelatedItems';
import CommentGroup from '../../../components/marketing/Comment/Group';
import Footer from '../../../components/marketing/@Custom/Footer';
// Theme Wrapper
import Marketing from '../../../components/wrapper/Marketing';

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
  return(
    <div>
      <Marketing pageName="Detail Product">
        <DetailContent {...props} />
      </Marketing>
    </div>
  )
};

DetailProduct.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default DetailProduct;
