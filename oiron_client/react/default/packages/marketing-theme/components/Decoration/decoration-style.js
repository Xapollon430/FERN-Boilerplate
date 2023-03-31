import { makeStyles } from '@material-ui/core/styles';

const deco = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  bottom: 0,
  left: 0,
};

const decorationStyles = makeStyles(theme => ({
  leftDeco: {
    position: 'absolute'
  },
  rightDeco: {
    position: 'absolute'
  },
  formDeco: {
    ...deco,
    opacity: 0.2,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& $leftDeco': {
      left: 0,
      top: '20%',
    },
    '& $rightDeco': {
      right: 0,
      top: '20%',
    }
  },
  pageDeco: {
    ...deco,
    opacity: 0.5,
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    '& $leftDeco': {
      left: 0,
      bottom: 0,
    },
    '& $rightDeco': {
      right: 0,
      top: 0,
    }
  }
}));

export default decorationStyles;
