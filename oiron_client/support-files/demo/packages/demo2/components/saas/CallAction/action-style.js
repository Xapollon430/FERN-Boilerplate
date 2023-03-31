import { makeStyles } from '@material-ui/core/styles';

const waveDecoLight = '/images/saas/deco-wave-light.png';

const decoCTA = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  bottom: -30,
  left: 0,
  opacity: 0.3,
  backgroundSize: '1000px 150px',
  backgroundImage: `url(${waveDecoLight})`,
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
    transform: 'scale(1.2, 0.7)',
    [theme.breakpoints.down('xs')]: {
      bottom: -60
    },
    '&:before': {
      ...decoCTA,
      content: '""',
      transform: 'scale(1.2, 1)',
      backgroundPosition: '250px 10px'
    }
  },
  button: {
    [theme.breakpoints.up('md')]: {
      width: 240,
      fontSize: 18
    },
  },
  paper: {
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: `linear-gradient(120deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
    padding: theme.spacing(4),
    color: theme.palette.common.white,
    textAlign: 'center',
    borderRadius: 60,
    [theme.breakpoints.down('sm')]: {
      textAlignlign: 'center'
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(4, 10),
      margin: theme.spacing(0, 4)
    },
    [theme.breakpoints.up('sm')]: {
      borderRadius: '200px !important',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(5)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 2),
      textAlign: 'center',
      borderRadius: 40
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
  rightIcon: {
    marginLeft: theme.spacing(),
    transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'none'
  }
}));

export default useStyles;
