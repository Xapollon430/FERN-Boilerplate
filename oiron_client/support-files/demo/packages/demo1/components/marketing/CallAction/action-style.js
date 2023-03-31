import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    '& p': {
      margin: 0,
      position: 'relative',
      zIndex: 1,
    }
  },
  button: {
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      height: 60,
      fontSize: 20,
    },
    [theme.breakpoints.down('sm')]: {
      color: theme.palette.primary.main,
      background: theme.palette.common.white,
      '&:focus, &:hover': {
        background: fade(theme.palette.common.white, 0.8),
      }
    },
  },
  paper: {
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
    padding: theme.spacing(4),
    borderRadius: 0,
    overflow: 'hidden',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(5, 5),
      margin: theme.spacing(0, 4),
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(5),
      textAlign: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 2),
      textAlign: 'center'
    },
    '& h4': {
      fontWeight: 700,
      [theme.breakpoints.down('xs')]: {
        fontSize: 28,
        marginBottom: theme.spacing(2)
      },
    },
    '& p': {
      fontSize: 22,
      position: 'relative',
      zIndex: 1,
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(5)
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 18,
        marginBottom: theme.spacing(3)
      },
    }
  },
  decoButton: {
    background: theme.palette.primary.light,
    position: 'absolute',
    top: 0,
    right: -80,
    transform: 'skewX(-45deg)',
    width: 500,
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: -205,
      borderRight: `205px solid ${theme.palette.primary.dark}`,
      borderBottom: '65px solid transparent'
    }
  },
  deco: {
    position: 'absolute',
    width: '97%',
    top: 0,
    left: 0,
    height: '100%',
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      width: '70%',
    }
  },
  decoTop: {
    '&:before': {
      content: '""',
      position: 'absolute',
      top: -16,
      left: 23,
      width: 22,
      height: 22,
      border: `4px solid ${theme.palette.secondary.main}`
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      top: -9,
      left: 36,
      width: 32,
      height: 32,
      background: theme.palette.accent.light
    }
  },
  decoBottom: {
    width: 48,
    height: 48,
    border: `5px solid ${theme.palette.primary.light}`,
    borderRadius: '50%',
    position: 'absolute',
    bottom: -30,
    left: 70
  },
  decoRight: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    background: theme.palette.secondary.main,
    position: 'absolute',
    right: 0,
    top: -30,
    [theme.breakpoints.up('sm')]: {
      width: 70,
      height: 70
    }
  }
}));

export default useStyles;
