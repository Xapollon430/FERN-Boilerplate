import { makeStyles } from '@material-ui/core/styles';
const waveDecoLight = '/images/saas2/deco-wave-light.png';
const waveDecoDark = '/images/saas2/deco-wave-dark.png';

const useStyles = makeStyles(theme => ({
  footerDeco: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
    left: 0,
    '&:before': {
      content: '""',
      position: 'absolute',
      backgroundImage: `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      opacity: 0.15,
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 140,
      left: 0,
      transform: 'scaleY(-1)',
      transformOrigin: 'top center',
      backgroundRepeat: 'repeat-x',
      backgroundPosition: '-210px 0px',
      backgroundSize: '1790px 140px',
      backgroundImage: theme.palette.type === 'dark' ? `url(${waveDecoDark})` : `url(${waveDecoLight})`
    }
  },
  waveCover: {
    zIndex: 10,
    position: 'absolute',
    height: '100%',
    width: '100%',
    bottom: -16,
    backgroundPosition: '-200px bottom',
    backgroundSize: '1670px 100px',
    backgroundImage: theme.palette.type === 'dark' ? `url(${waveDecoDark})` : `url(${waveDecoLight})`,
    backgroundRepeat: 'repeat-x',
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
      height: 240,
      width: '100%',
      opacity: 0.5,
      '& $waveCover': {
        backgroundPosition: '430px 110px',
        backgroundSize: '1900px 110px'
      }
    },
    '&$bottom': {
      left: -370,
      bottom: -30,
      opacity: 0.4,
      '& svg': {
        fill: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      }
    }
  }
}));

export default useStyles;
