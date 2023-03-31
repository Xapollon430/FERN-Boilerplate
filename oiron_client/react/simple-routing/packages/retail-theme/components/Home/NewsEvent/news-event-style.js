import { makeStyles } from '@material-ui/core/styles';

const newsEventStyle = makeStyles(theme => ({
  root: {
    position: 'relative',
    margin: '0 auto',
    paddingBottom: theme.spacing(30),
    marginBottom: theme.spacing(-40)
  },
  blogWrap: {
    position: 'relative',
    zIndex: 10,
    margin: theme.spacing(10, 0)
  },
  listNews: {
    '& > div': {
      [theme.breakpoints.down('xs')]: {
        paddingTop: '0 !important',
        paddingBottom: '0 !important'
      }
    }
  }
}));

export default newsEventStyle;
