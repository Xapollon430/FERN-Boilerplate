import { makeStyles } from '@material-ui/core/styles';

const waveDecoLight = '/images/saas2/deco-wave-light.png';
const waveDecoDark = '/images/saas2/deco-wave-dark.png';

const decoCTA = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  bottom: -30,
  left: 0,
  opacity: 0.3,
  backgroundSize: '1000px 150px',
  backgroundRepeat: 'repeat-x'
};

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  deco: {
    ...decoCTA,
    backgroundPosition: '-160px 50px',
    backgroundImage: theme.palette.type === 'dark' ? `url(${waveDecoDark})` : `url(${waveDecoLight})`,
    transform: 'scale(1.2, 0.7)',
    [theme.breakpoints.down('xs')]: {
      bottom: -60
    },
    '&:before': {
      ...decoCTA,
      content: '""',
      backgroundImage: theme.palette.type === 'dark' ? `url(${waveDecoDark})` : `url(${waveDecoLight})`,
      transform: 'scale(1.2, 1)',
      backgroundPosition: '250px 10px'
    }
  },
  button: {
    fontSize: 18,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 360,
    },
  },
  paper: {
    position: 'relative',
    overflow: 'hidden',
    padding: theme.spacing(4),
    textAlign: 'center',
    background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    boxShadow: theme.palette.type === 'dark' ? '0px 1px 3px 0px rgba(64, 64, 64, 1), 0px 1px 1px 0px rgba(42, 42, 42, 1), 0px 2px 1px -1px rgba(20, 20, 20, 1)' : '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(4, 10),
      margin: theme.spacing(0, 4)
    },
    [theme.breakpoints.up('sm')]: {
      borderRadius: theme.rounded.big
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(5)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 2),
      textAlign: 'center'
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('xs')]: {
        fontSize: '28px !important',
        marginBottom: theme.spacing(2)
      }
    },
    '& p': {
      fontSize: 24,
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(5)
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 18,
        marginBottom: theme.spacing(3)
      }
    }
  },
}));

export default useStyles;
