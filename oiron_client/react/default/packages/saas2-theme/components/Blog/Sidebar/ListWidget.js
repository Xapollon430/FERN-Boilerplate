import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { useTranslation } from 'next-i18next';
import Paper from '../../Paper';
import useStyles from '../blog-style';

function ListWidget() {
  const classes = useStyles();
  const { t } = useTranslation('common');

  const periode = [
    'October 2018',
    'September 2018',
    'August 2018',
    'July 2018',
    'June 2018',
    'April 2018',
    'March 2018',
    'Febuary 2018'
  ];

  return (
    <Paper title={t('blog_archived')} icon="ion-folder" whiteBg desc="">
      <div>
        <div className={classes.albumRoot}>
          <List component="nav">
            {periode.map((item, index) => (
              <ListItem key={index.toString()} button>
                <ListItemText primary={item} />
                <KeyboardArrowRight className={classes.flipRtl} />
              </ListItem>
            ))}
          </List>
        </div>
        <Divider className={classes.divider} />
        <Grid container justifyContent="center">
          <Button fullWidth color="secondary">
            See All
          </Button>
        </Grid>
      </div>
    </Paper>
  );
}

export default ListWidget;
