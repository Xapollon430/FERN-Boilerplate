import { makeStyles } from '@material-ui/core/styles';
import { darken, lighten } from '@material-ui/core/styles/colorManipulator';
const waveDecoLight = '/images/saas/deco-wave-light.png';
const waveDecoDark = '/images/saas/deco-wave-dark.png';

const useStyles = makeStyles(theme => ({
  bg: {
    background: theme.palette.type === 'dark' ? darken(theme.palette.primary.dark, 0.6) : lighten(theme.palette.primary.light, 0.8),
  },
  footerDeco: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
    left: 0,
  },
  waveCover: {
    zIndex: 10,
    position: 'absolute',
    height: '100%',
    width: '100%',
    bottom: -16,
    backgroundPosition: '0 bottom',
    backgroundSize: '1370px 90px',
    backgroundImage: theme.palette.type === 'dark' ? `url(${waveDecoDark})` : `url(${waveDecoLight})`,
    backgroundRepeat: 'no-repeat',
    '@media (min-width: 1400px)': {
      display: 'none'
    }
  },
  decoWrap: {
    zIndex: 10,
    width: '100%',
    height: '100%',
    '@media (min-width: 1400px)': {
      display: 'none'
    }
  },
  top: {},
  bottom: {},
  deco: {
    position: 'absolute',
    bottom: 0,
    '& svg': {
      width: 2000
    },
    '&$top': {
      bottom: -30,
      left: 0,
      '& svg': {
        fill: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
      }
    },
    '&$bottom': {
      left: -370,
      bottom: -30,
      '& svg': {
        fill: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      }
    }
  }
}));

export default useStyles;
