import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import Paper from '../../Paper';
import useStyles from '../blog-style';

function GalleryWidget() {
  const classes = useStyles();
  const { t } = useTranslation('common');

  const imgData = [{
    src: imgAPI.photo[3]
  },
  {
    src: imgAPI.photo[5]
  },
  {
    src: imgAPI.photo[9]
  },
  {
    src: imgAPI.photo[10]
  }];

  return (
    <Paper title={t('blog_album')} icon="ion-images" whiteBg desc="">
      <div>
        <div className={classes.albumRoot}>
          <ImageList rowHeight={180} className={classes.gridList}>
            {
              imgData.map((tile, index) => {
                if (index >= 4) {
                  return false;
                }
                return (
                  <ImageListItem key={index.toString()}>
                    <img src={tile.src} className={classes.img} alt="thumb" />
                    <ImageListItemBar
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
                  </ImageListItem>
                );
              })
            }
          </ImageList>
        </div>
        <Divider className={classes.divider} />
        <Grid container justifyContent="center">
          <Button color="primary" fullWidth>
            See All
          </Button>
        </Grid>
      </div>
    </Paper>
  );
}

export default GalleryWidget;
