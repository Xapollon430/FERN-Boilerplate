import { makeStyles } from '@material-ui/core/styles';

const newsEventStyle = makeStyles(theme => ({
  root: {
    position: 'relative',
    margin: '0 auto',
  },
  blogWrap: {
    position: 'relative',
    zIndex: 10,
    marginTop: theme.spacing(10),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(10),
    }
  },
}));

export default newsEventStyle;
