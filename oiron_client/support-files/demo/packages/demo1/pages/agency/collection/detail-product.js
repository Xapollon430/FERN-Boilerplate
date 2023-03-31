import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/agency/@Custom/Header';
import Detail from '../../../components/agency/List/Detail';
import Description from '../../../components/agency/List/Description';
import RelatedItems from '../../../components/agency/List/RelatedItems';
import CommentGroup from '../../../components/agency/Comment/Group';
import Footer from '../../../components/agency/@Custom/Footer';
// Theme Wrapper
import Agency from '../../../components/wrapper/Agency';

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
  return(
    <div>
      <Agency pageName="Detail Product">
        <DetailContent {...props} />
      </Agency>
    </div>
  )
};

DetailProduct.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default DetailProduct;
