import { makeStyles } from '@material-ui/core/styles';

const featureStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  decoration: {
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
  btn: {
    width: 160
  },
  figure: {
    margin: 0
  },
  last: {},
  desc: {
    position: 'relative',
    zIndex: 60
  },
  item: {
    position: 'relative',
    minHeight: 320,
    marginBottom: theme.spacing(15),
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
    '& $figure': {
      '& img': {
        width: '100%',
      },
    }
  },
  graphic: {
    position: 'relative',
    '& img': {
      width: '90%',
      display: 'block'
    }
  },
  illustrationLeft: {
    position: 'relative',
    zIndex: 1,
    maxHeight: 600,
    height: '100%',
  },
  illustrationRight: {
    position: 'relative',
    zIndex: 1,
    maxHeight: 600,
    height: '100%',
  },
  illustrationCenter: {
    perspective: 1000,
    '& $graphic': {
      display: 'block',
      textAlign: 'center',
      maxWidth: 700,
      margin: '0 auto',
      '& img': {
        margin: '0 auto',
        width: '100%'
      }
    },
  },
}));

export default featureStyles;
