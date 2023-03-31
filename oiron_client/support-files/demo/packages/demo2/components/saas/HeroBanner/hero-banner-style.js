import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
const waveDecoLight = '/images/saas/deco-wave-light.png';
const waveDecoDark = '/images/saas/deco-wave-dark.png';

const heroBanner = makeStyles(theme => ({
  heroBannerWrap: {
    position: 'relative',
    paddingBottom: theme.spacing(10),
    backgroundColor: theme.palette.type === 'dark' ? fade(theme.palette.primary.dark, 0.4) : fade(theme.palette.primary.light, 0.4),
  },
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
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('xs')]: {
      backgroundSize: '600px 40px',
      bottom: -1
    },
    [theme.breakpoints.down('md')]: {
      backgroundPosition: 'center bottom'
    },
    '@media (min-width: 1400px)': {
      display: 'none'
    }
  }
}));

export default heroBanner;
