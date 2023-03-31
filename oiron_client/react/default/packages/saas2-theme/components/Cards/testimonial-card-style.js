import { makeStyles } from '@material-ui/core/styles';

const cardsStyles = makeStyles(theme => ({
  testimonial: {
    position: 'relative'
  },
  caption: {
    marginTop: theme.spacing(3),
    display: 'block',
    fontSize: 16,
    [theme.breakpoints.down('xs')]: {
      fontSize: 14
    }
  },
  paper: {
    height: 250,
    margin: theme.spacing(3, 0),
    textAlign: 'center',
    transition: 'border 0.4s ease-out',
    padding: theme.spacing(1),
    borderRadius: 40,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 15),
    },
  },
  text: {
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    height: 80,
    fontSize: 18,
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      '-webkit-line-clamp': 4,
    }
  },
  avatar: {
    boxShadow: theme.shadows[8],
    width: 80,
    height: 80,
    margin: '-32px auto 32px',
    [theme.breakpoints.up('sm')]: {
      margin: '-96px auto 32px',
    },
    '&:before': {
      content: '""',
      width: 80,
      height: 80,
      position: 'absolute',
      top: 0,
      left: 0,
      borderRadius: '50%',
      boxShadow: '0 0px 30px -10px #000'
    }
  },
}));

export default cardsStyles;
