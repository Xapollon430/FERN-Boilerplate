import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/fintech/@Custom/Header';
import Detail from '../../../components/fintech/List/Detail';
import Description from '../../../components/fintech/List/Description';
import RelatedItems from '../../../components/fintech/List/RelatedItems';
import CommentGroup from '../../../components/fintech/Comment/Group';
import Footer from '../../../components/fintech/@Custom/Footer';
import FooterExtend from '../../../components/fintech/Footer/FooterExtend';
// Theme Wrapper
import Fintech from '../../../components/wrapper/Fintech';

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
        <div className={clsx(classes.containerGeneral, classes.containerFront)}>
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
      <Fintech pageName="Product Detail">
        <DetailContent {...props} />
      </Fintech>
    </div>
  )
}

DetailProduct.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default DetailProduct;
