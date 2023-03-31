import { makeStyles } from '@material-ui/core/styles';

const decorationStyles = makeStyles(theme => ({
  decoration: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden',
    clip: 'rect(0, auto, auto, 0)',
    '& svg': {
      fill: theme.palette.type === 'dark' ? theme.palette.common.black : theme.palette.common.white,
      opacity: 0.15,
      position: 'fixed',
      top: 0
    }
  },
  leftDeco: {
    left: -400,
    right: 'auto',
    width: 1200,
    height: 1500,
    transformOrigin: 'top left',
    [theme.breakpoints.up('md')]: {
      transform: 'scale(0.8)'
    }
  },
  rightDeco: {
    left: 'auto',
    right: 0,
    height: 1500,
    transformOrigin: 'top right',
    [theme.breakpoints.up('md')]: {
      transform: 'scale(0.8)'
    }
  }
}));

export default decorationStyles;
