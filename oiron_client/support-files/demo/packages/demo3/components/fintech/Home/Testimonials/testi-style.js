import { makeStyles } from '@material-ui/core/styles';

const testiStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  sliderWrap: {
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(0, -2)
    }
  },
  carousel: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    }
  },
  item: {
    padding: theme.spacing(1),
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
    background: theme.palette.primary.dark,
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
    borderRadius: '30px 5px 30px 5px',
  },
  next: {
    right: -8,
    borderRadius: '5px 30px 5px 30px',
  }
}));

export default testiStyles;
