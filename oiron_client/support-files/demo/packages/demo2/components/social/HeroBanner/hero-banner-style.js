import { makeStyles } from '@material-ui/core/styles';
import { darken, lighten } from '@material-ui/core/styles/colorManipulator';
const waveDecoLight = '/images/social/deco-wave-light.png';
const waveDecoDark = '/images/social/deco-wave-dark.png';

const heroBanner = makeStyles(theme => ({
  container: {
    position: 'relative'
  },
  heroBannerWrap: {
    position: 'relative',
    paddingBottom: theme.spacing(10),
    backgroundImage: theme.palette.type === 'dark' ? `linear-gradient(120deg, ${darken(theme.palette.secondary.main, 0.7)}, ${darken(theme.palette.primary.main, 0.7)})` : `linear-gradient(120deg, ${lighten(theme.palette.secondary.light, 0.7)}, ${lighten(theme.palette.primary.light, 0.7)})`,
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
      backgroundSize: '500px 40px',
      bottom: -1
    },
    [theme.breakpoints.down('md')]: {
      backgroundPosition: 'center bottom'
    }
  }
}));

export default heroBanner;
