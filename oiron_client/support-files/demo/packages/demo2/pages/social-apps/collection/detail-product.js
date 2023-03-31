import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/social/@Custom/Header';
import Detail from '../../..//components/social/List/Detail';
import Description from '../../..//components/social/List/Description';
import RelatedItems from '../../..//components/social/List/RelatedItems';
import CommentGroup from '../../..//components/social/Comment/Group';
import Footer from '../../../components/social/@Custom/Footer';
// Theme Wrapper
import Social from '../../../components/wrapper/Social';

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
  return (
    <div>
      <Social pageName="Product Detail">
        <DetailContent {...props} />
      </Social>
    </div>
  );
}

DetailProduct.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default DetailProduct;
