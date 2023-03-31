import { makeStyles } from '@material-ui/core/styles';

const heroBanner = makeStyles(theme => ({
  container: {
    position: 'relative'
  },
  heroBannerWrap: {
    position: 'relative',
  },
  deco: {
    position: 'absolute',
    top: -100,
    right: 0,
    display: 'flex',
    width: 480,
    height: '100%',
    opacity: theme.palette.type === 'dark' ? 0.2 : 0.5,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& > div': {
      position: 'relative',
      flex: 1
    },
  },
  round: {
    width: 176,
    height: 176,
    position: 'absolute',
    top: 180,
    left: '30%',
    borderRadius: '50%'
  },
  leaf: {
    width: 192,
    height: 192,
    position: 'absolute',
    top: 260
  },
  land: {
    width: 350,
    height: 350,
    position: 'absolute',
    bottom: 0
  },
  decoLeft: {
    '& $leaf': {
      left: -60,
      borderRadius: theme.pie[4],
      background: theme.palette.type === 'dark' ? theme.palette.accent.dark : theme.palette.accent.light,
    },
    '& $round': {
      background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    },
    '& $land': {
      right: 0,
      borderRadius: theme.pie[1],
      background: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    }
  }
}));

export default heroBanner;
