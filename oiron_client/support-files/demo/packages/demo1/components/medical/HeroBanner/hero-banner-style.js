import { makeStyles } from '@material-ui/core/styles';

const heroBanner = makeStyles(theme => ({
  container: {
    position: 'relative'
  },
  heroBannerWrap: {
    position: 'relative',
  },
  decoWrap: {
    width: '100%',
    height: '100%',
    transform: 'translateX(-50px) scale(0.8)',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      top: -120
    }
  },
  top: {},
  bottom: {},
  s1: {},
  deco: {
    borderRadius: '50%',
    position: 'absolute',
    '&$top': {
      backgroundImage: theme.palette.type === 'dark' ? `linear-gradient(95deg,  ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 110%)` : `linear-gradient(95deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 110%)`,
      width: 1300,
      height: 1300,
      opacity: 0.3,
      '&$s1': {
        top: -900,
        right: -800
      },
    },
    '&$bottom': {
      border: `1px solid ${theme.palette.primary.main}`,
      width: 800,
      height: 800,
      opacity: 0.3,
      '&$s1': {
        top: -200,
        right: -340
      },
    }
  }
}));

export default heroBanner;
