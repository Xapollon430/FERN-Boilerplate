import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      overflowX: 'auto'
    },
    '& img': {
      height: 64,
      margin: theme.spacing(4),
      transition: 'all 0.3s ease-out',
    }
  }
}));

export default useStyles;
