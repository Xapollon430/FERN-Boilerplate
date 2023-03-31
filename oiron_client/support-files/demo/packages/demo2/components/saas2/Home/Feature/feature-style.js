import { makeStyles } from '@material-ui/core/styles';

const featureStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(10)
    }
  },
  btn: {
    width: 160
  },
  decorationBg: {
    position: 'absolute',
    width: 1280,
    height: '100%',
    left: -10,
    top: 180,
    '& svg': {
      width: '100%',
      height: 1700,
      fill: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      opacity: 0.2,
      transform: 'scale(1.3)',
      [theme.breakpoints.up(1400)]: {
        transform: 'scale(2.5, 1)',
      },
      [theme.breakpoints.up('xl')]: {
        display: 'none'
      },
      [theme.breakpoints.down('xs')]: {
        transform: 'scale(0.5)',
        transformOrigin: 'center left'
      }
    }
  },
  last: {},
  desc: {
    position: 'relative',
    zIndex: 60
  },
  item: {
    position: 'relative',
    minHeight: 320,
    marginBottom: theme.spacing(20),
    '&$last': {
      marginBottom: theme.spacing(10)
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(10)
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    '& h6': {
      marginBottom: theme.spacing(4),
    },
  },
  screenWrap: {
    padding: theme.spacing(4),
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 0
    },
    '& > img': {
      position: 'absolute'
    }
  },
  plant1: {
    width: '120%',
    top: -50,
    left: -50,
    [theme.breakpoints.down('xs')]: {
      top: -20,
      left: -20
    }
  },
  plant2: {
    width: '120%',
    bottom: -20,
    left: -40,
    [theme.breakpoints.down('xs')]: {
      bottom: 0,
      left: -20,
    }
  },
  plant3: {
    width: '110%',
    top: -20,
    left: -20,
    [theme.breakpoints.down('xs')]: {
      top: 10,
      left: -10
    }
  },
  illustration: {
    position: 'relative',
    '& figure': {
      margin: 0,
      borderRadius: theme.rounded.big,
      overflow: 'hidden',
      position: 'relative',
      boxShadow: theme.shadows[8],
      '& img': {
        width: '100%',
        display: 'block'
      }
    },
    '&:before': {
      content: '""',
      borderRadius: theme.rounded.big,
      width: 'calc(100% + 32px)',
      height: 'calc(100% + 32px)',
      opacity: 0.5,
      background: theme.palette.type === 'dark' ? `linear-gradient(120deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})` : `linear-gradient(120deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
      position: 'absolute',
      top: -16,
      left: -16
    }
  },
  screenCenter: {
    maxWidth: 700,
    margin: '0 auto',
    '& figure': {
      display: 'block',
      textAlign: 'center',
      '& img': {
        margin: '0 auto'
      }
    }
  }
}));

export default featureStyles;
