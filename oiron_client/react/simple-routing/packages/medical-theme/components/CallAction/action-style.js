import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    zIndex: 10,
    '& p': {
      margin: 0
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  button: {
    color: theme.palette.primary.main,
    background: theme.palette.common.white,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      height: 64,
      fontSize: 18,
    },
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.8)'
    }
  },
  paper: {
    borderRadius: 24,
    color: theme.palette.common.white,
    backgroundImage: theme.palette.type === 'dark' ? `linear-gradient(95deg,  ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 110%)` : `linear-gradient(95deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.light} 110%)`,
    padding: theme.spacing(4),
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 4),
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginBottom: theme.spacing(5)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 2),
      textAlign: 'center'
    },
    '& h4': {
      marginBottom: theme.spacing(2)
    },
    '& p': {
      fontSize: 24,
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(5)
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 18,
        marginBottom: theme.spacing(3)
      },
    }
  },
}));

export default useStyles;
