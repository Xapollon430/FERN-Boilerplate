import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const testiStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(8)
    },
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.type === 'dark' ? fade(theme.palette.primary.dark, 0.2) : fade(theme.palette.primary.light, 0.2),
      borderRadius: 60,
      overflow: 'hidden',
      marginBottom: theme.spacing(5)
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(5),
      marginBottom: theme.spacing(5)
    },
  },
  decoration: {
    position: 'absolute',
    top: 0,
    width: 830,
    height: 600,
    left: -160,
    opacity: 0.2,
    [theme.breakpoints.down('md')]: {
      left: -320
    },
    '& svg': {
      fill: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      transform: 'scale(1.2)',
      width: '100%',
      height: '100%'
    }
  },
  title: {
    position: 'relative',
    paddingTop: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(0, 3, 4),
    },
    '& strong': {
      fontWeight: theme.typography.fontWeightBold
    }
  },
  sliderWrap: {
    position: 'relative'
  },
  carouselWrap: {
    position: 'relative'
  },
  carousel: {
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 2),
    },
    '& div[class*="slick-active"]': {
      '& p': {
        opacity: 1,
        transition: 'all 0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95)',
        transform: 'translate3d(0, 0, 0)',
      }
    },
  },
  item: {
    position: 'relative',
  },
  inner: {
    direction: 'ltr',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
    '& p': {
      opacity: 0,
      transform: 'translate3d(-10%, 0, 0)',
      marginTop: theme.spacing(5),
      [theme.breakpoints.up('lg')]: {
        marginTop: theme.spacing(10),
      },
      [theme.breakpoints.up('sm')]: {
        width: '60%',
      },
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        height: 75,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }
  },
  profile: {
    textAlign: 'center',
    padding: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(4, 6)
    }
  },
  avatar: {
    width: 85,
    height: 85,
    margin: '0 auto',
    marginBottom: theme.spacing(3)
  },
  name: {
    fontSize: 18,
    fontWeight: theme.typography.fontWeightMedium,
    '& span': {
      marginTop: theme.spacing(0.5),
      fontSize: 14,
      display: 'block'
    },
  },
  logoWrap: {
    position: 'relative',
  },
  active: {},
  figureBtn: {
    display: 'inline-block',
    padding: theme.spacing(3),
    lineHeight: '150px',
    textAlign: 'center',
    verticalAlign: 'middle',
    width: '30%',
    height: 150,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2)
    },
    '& img': {
      transition: 'all 0.3s ease-out',
      display: 'block',
      width: '100%',
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
    },
    '& $active, &:hover': {
      '& img': {
        filter: 'none'
      }
    }
  }
}));

export default testiStyles;
