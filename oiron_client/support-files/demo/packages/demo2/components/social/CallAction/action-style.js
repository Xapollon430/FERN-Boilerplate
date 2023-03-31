import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  action: {
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    '& h4': {
      marginBottom: theme.spacing(6)
    },
  },
  btnArea: {
    margin: theme.spacing(5, 0),
    justifyContent: 'center',
    position: 'relative',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-around'
    },
    '& a': {
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(2)
      },
      [theme.breakpoints.down('xs')]: {
        margin: 4
      },
      '& img': {
        width: 160,
        [theme.breakpoints.down('xs')]: {
          width: '100%'
        }
      }
    }
  }
}));

export default useStyles;
