import { makeStyles } from '@material-ui/core/styles';

const decorationStyles = makeStyles(theme => ({
  decoration: {
    position: 'fixed',
    width: '100%',
    height: '120%',
    top: 0,
    left: 0,
    overflow: 'hidden'
  },
  capsul: {
    backgroundImage: theme.palette.type === 'dark' ? `linear-gradient(144deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)` : `linear-gradient(144deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
    width: 500,
    height: 500,
    borderRadius: '50%',
    transform: 'rotate(-30deg)',
    position: 'absolute',
    opacity: 0.2,
    [theme.breakpoints.down('sm')]: {
      opacity: 0
    }
  },
  circle: {
    width: 700,
    height: 700,
    borderRadius: '50%',
    border: '1px solid',
    borderColor: theme.palette.type === 'dark' ? theme.palette.secondary.main : theme.palette.primary.light,
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      opacity: 0
    }
  },
  decoTop: {
    '& $capsul': {
      top: -195,
      right: '-22%'
    },
    '& $circle': {
      top: '-45%',
      right: '-32%'
    }
  },
  decoBottom: {
    '& $capsul': {
      left: '-5%',
      bottom: '-7%',
    },
    '& $circle': {
      left: '-15%',
      bottom: '-23%'
    }
  }
}));

export default decorationStyles;
