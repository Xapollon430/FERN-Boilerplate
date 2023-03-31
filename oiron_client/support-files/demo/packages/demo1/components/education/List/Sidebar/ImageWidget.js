import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { withTranslation } from '~/i18n';
import imgAPI from '~/public/images/imgAPI';
import Paper from '../../Paper';
import useStyles from '../list-style';

function ImageWidget(props) {
  const classes = useStyles();
  const { t } = props;

  const imgData = [{
    src: imgAPI.photo[5]
  },
  {
    src: imgAPI.photo[6]
  },
  {
    src: imgAPI.photo[7]
  },
  {
    src: imgAPI.photo[9]
  }];

  return (
    <Paper title={t('common:blog_album')} icon="ion-images" whiteBg desc="">
      <div className={classes.albumRoot}>
        <GridList cellHeight={180} className={classes.gridList}>
          {
            imgData.map((tile, index) => {
              if (index >= 4) {
                return false;
              }
              return (
                <GridListTile key={index.toString()}>
                  <img src={tile.src} className={classes.img} alt="thumb" />
                  <GridListTileBar
                    title={tile.title}
                    subtitle={(
                      <span>
                        by:&nbsp;
                        John Doe
                      </span>
                    )}
                    actionIcon={(
                      <IconButton className={classes.icon}>
                        <InfoIcon />
                      </IconButton>
                    )}
                  />
                </GridListTile>
              );
            })
          }
        </GridList>
        <Divider className={classes.divider} />
        <Grid container justify="center">
          <Button fullWidth color="primary">
            {t('common:btn_seeall')}
          </Button>
        </Grid>
      </div>
    </Paper>
  );
}

ImageWidget.propTypes = {
  t: PropTypes.func.isRequired,
};

ImageWidget.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation(['common'])(ImageWidget);
