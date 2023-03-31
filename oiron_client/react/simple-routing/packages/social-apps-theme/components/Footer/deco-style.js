import { makeStyles } from '@material-ui/core/styles';
import { darken, lighten } from '@material-ui/core/styles/colorManipulator';

const decoLightTop = '/images/social/deco-light-top.svg';
const decoDarkBottom = '/images/social/deco-dark-top.svg';

const useStyles = makeStyles(theme => ({
  bg: {},
  footerDeco: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
    left: 0,
    '&$bg': {
      background: theme.palette.type === 'dark' ? darken(theme.palette.primary.dark, 0.8) : lighten(theme.palette.primary.light, 0.8)
    },
  },
  decoBgTop: {
    backgroundImage: theme.palette.type === 'dark' ? `url(${decoDarkBottom})` : `url(${decoLightTop})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    backgroundSize: '100% auto',
    transform: 'scale(1, 0.4)',
    position: 'absolute',
    width: '100%',
    height: 600,
    left: 0,
    top: -180
  },
}));

export default useStyles;
