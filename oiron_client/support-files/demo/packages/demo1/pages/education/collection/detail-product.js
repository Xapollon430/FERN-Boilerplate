import React, { Fragment } from 'react';
import { useSpacing } from '~/theme/common';
import Box from '@material-ui/core/Box';
import Header from '../../../components/education/@Custom/Header';
import Detail from '../../../components/education/List/Detail';
import Description from '../../../components/education/List/Description';
import RelatedItems from '../../../components/education/List/RelatedItems';
import CommentGroup from '../../../components/education/Comment/Group';
import Footer from '../../../components/education/@Custom/Footer';
// Theme Wrapper
import Education from '../../../components/wrapper/Education';

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
      <Education pageName="Detail Product">
        <DetailContent {...props} />
      </Education>
    </div>
  )
};

DetailProduct.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default DetailProduct;
