import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'relative',
    padding: theme.spacing(0.5),
    display: 'flex',
    textAlign: 'left',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2)
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold
    },
    '& figure': {
      borderRadius: theme.rounded.small,
      overflow: 'hidden',
      width: 150,
      height: 150,
      margin: 0,
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        width: 100,
        height: 100
      },
      '& img': {
        height: '100%'
      }
    }
  },
  detailInfo: {
    flex: 1,
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      fontSize: 14
    }
  },
  btn: {
    marginTop: theme.spacing(2),
    height: 35
  },
  icon: {
    marginRight: theme.spacing()
  },
  mobileLink: {
    display: 'none',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    }
  }
}));

export default useStyles;
