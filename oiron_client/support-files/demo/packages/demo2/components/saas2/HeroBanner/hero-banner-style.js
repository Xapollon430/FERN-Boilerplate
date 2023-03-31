import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
const waveDecoLight = '/images/saas2/deco-wave-light.png';
const waveDecoDark = '/images/saas2/deco-wave-dark.png';

const heroBanner = makeStyles(theme => ({
  heroBannerWrap: {
    position: 'relative',
    paddingBottom: theme.spacing(10),
    background: `linear-gradient(120deg, ${fade(theme.palette.primary.main, 0.15)}, ${fade(theme.palette.secondary.main, 0.15)})`
  },
  container: {
    position: 'relative',
    zIndex: 10
  },
  decoWrap: {
    width: '100%',
    height: '100%',
    '@media only screen and (min-width: 1400px)': {
      display: 'none'
    }
  },
  top: {},
  bottom: {},
  waveCover: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    bottom: -5,
    left: 0,
    transform: 'scale(1.2, 1)',
    backgroundPosition: '50px bottom',
    backgroundSize: '1370px 80px',
    backgroundImage: theme.palette.type === 'dark' ? `url(${waveDecoDark})` : `url(${waveDecoLight})`,
    backgroundRepeat: 'repeat-x',
    [theme.breakpoints.down('xs')]: {
      backgroundSize: '600px 40px',
      bottom: -1
    },
    [theme.breakpoints.down('md')]: {
      backgroundPosition: 'center bottom'
    },
  },
  deco: {
    position: 'absolute',
    bottom: 0,
    '& svg': {
      width: 2000,
    },
    '&$top': {
      bottom: 0,
      left: 0,
      height: 240,
      width: '100%',
      opacity: 0.5,
      [theme.breakpoints.down('sm')]: {
        bottom: -20,
      },
      '& $waveCover': {
        backgroundPosition: '470px 110px',
        backgroundSize: '1900px 110px',
        backgroundRepeat: 'repeat-x',
        [theme.breakpoints.down('xs')]: {
          backgroundSize: '1000px 110px'
        }
      }
    },
    '&$bottom': {
      left: -370,
      bottom: -10,
      opacity: 0.4,
      [theme.breakpoints.down('sm')]: {
        bottom: -20
      },
      '& svg': {
        fill: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light
      }
    }
  }
}));

export default heroBanner;
