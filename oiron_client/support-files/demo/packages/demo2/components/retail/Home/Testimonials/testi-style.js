import { makeStyles } from '@material-ui/core/styles';

const testiStyles = makeStyles(theme => ({
  root: {
    minHeight: 400,
  },
  carouselWrap: {
    position: 'relative',
    zIndex: 1,
    paddingBottom: theme.spacing(3),
    textAlign: 'center'
  },
  item: {
    '&:focus': {
      outline: 'none'
    }
  },
  content: {
    fontStyle: 'italic',
    fontSize: 18,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16
    }
  },
  name: {
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    margin: theme.spacing(2, 0, 4),
    '& strong': {
      fontWeight: theme.typography.fontWeightBold
    }
  },
  carouselText: {
    '& $item': {
      position: 'relative'
    },
    '& > div': {
      marginBottom: 0
    }
  },
  carouselAvatar: {
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: 768,
    },
    '& $item': {
      cursor: 'pointer',
      height: 140,
      paddingTop: theme.spacing(2)
    },
    '& div[class*="slick-center"]': {
      '& $avatar': {
        padding: theme.spacing(0.5),
        background: theme.palette.type === 'dark' ? `linear-gradient(120deg, ${theme.palette.secondary.light}, ${theme.palette.primary.light})` : `linear-gradient(120deg, ${theme.palette.secondary.light}, ${theme.palette.primary.light})`,
        opacity: 1,
        transform: 'scale(1.4)'
      }
    }
  },
  avatar: {
    width: 80,
    height: 80,
    margin: '0 auto',
    opacity: 0.7,
    transition: 'all 0.3s ease',
    '& img': {
      borderRadius: '50%'
    }
  },
}));

export default testiStyles;
