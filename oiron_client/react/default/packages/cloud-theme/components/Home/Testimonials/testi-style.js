import { makeStyles } from '@material-ui/core/styles';

const testiStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  carousel: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    }
  },
  item: {
    direction: 'ltr',
    padding: theme.spacing(0, 1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(7, 1, 0),
    },
    '&:focus': {
      outline: 'none'
    }
  },
  nav: {
    position: 'absolute',
    top: '48%',
    width: 60,
    height: 60,
    borderRadius: 16,
    padding: 0,
    minWidth: 0,
    background: 'rgba(0, 0, 0, 0.38)',
    transform: theme.direction === 'rtl' ? 'scale(-1)' : 'scale(1)',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    '& i': {
      fontSize: 48,
      color: theme.palette.common.white,
    }
  },
  prev: {
    left: -8,
  },
  next: {
    right: -8,
  }
}));

export default testiStyles;
