import { makeStyles } from '@material-ui/core/styles';
import { lighten, darken } from '@material-ui/core/styles/colorManipulator';
const cloudBottomLight = '/images/cloud/cloud_bottom_light.svg';
const cloudBottomDark = '/images/cloud/cloud_bottom_dark.svg';

const sliderStyle = makeStyles(theme => ({
  bannerWrap: {
    '& ul[class*="slick-dots"]': {
      zIndex: 1,
      bottom: 25
    }
  },
  root: {
    position: 'relative',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? darken(theme.palette.primary.dark, 0.5) : lighten(theme.palette.primary.light, 0.5),
  },
  cloudDeco: {
    backgroundImage: theme.palette.type === 'dark' ? `url(${cloudBottomDark})` : `url(${cloudBottomLight})`,
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'center 80px',
    width: '100%',
    height: 360,
    position: 'absolute',
    opacity: 0.5,
    bottom: -320,
  },
  innerDeco: {
    height: 800,
    width: '100%',
    position: 'absolute',
    display: 'block'
  },
  decoWrap: {
    height: 500,
    margin: 0,
    width: '100%',
    display: 'block',
    position: 'absolute',
    '& > div': {
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      '& svg': {
        position: 'absolute'
      }
    }
  },
  slider: {
    zIndex: 1,
    '& div[class*="slick-current"]': {
      [theme.breakpoints.down('sm')]: {
        zIndex: 1
      }
    }
  },
  centerContent: {},
  slide1: {},
  slide2: {},
  slide3: {},
  slide: {
    [theme.breakpoints.up('md')]: {
      height: 600,
      paddingTop: theme.spacing(5)
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      padding: theme.spacing(15, 0, 10, 0)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(15, 0, 5)
    },
    '& img': {
      margin: '0 auto',
      maxHeight: 350,
      position: 'relative',
      [theme.breakpoints.up('md')]: {
        maxWidth: '100%'
      },
      [theme.breakpoints.down('xs')]: {
        maxHeight: 310
      }
    },
    '&$centerContent': {
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(10)
      }
    }
  },
  imgSlide1: {
    [theme.breakpoints.down('lg')]: {
      float: theme.direction === 'rtl' ? 'left' : 'right',
    },
    [theme.breakpoints.down('sm')]: {
      right: 0
    },
    [theme.breakpoints.down('xs')]: {
      right: 'auto',
      left: -80
    }
  },
  imgSlide2: {
    [theme.breakpoints.between('md', 'xl')]: {
      float: theme.direction === 'rtl' ? 'left' : 'right',
    }
  },
  carousel: {
    [theme.breakpoints.down('xs')]: {
      position: 'relative',
      zIndex: 5
    },
  },
  hBanner: {
    textAlign: 'center',
    '& img': {
      marginTop: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        width: '50%'
      },
    }
  },
  backgroundBanner: {
    position: 'absolute',
    zIndex: 3,
    left: theme.direction === 'rtl' ? -280 : 'auto',
    right: theme.direction === 'rtl' ? 'auto' : -280,
    '& img': {
      maxHeight: 320,
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      left: theme.direction === 'rtl' ? -160 : 'auto',
      right: theme.direction === 'rtl' ? 'auto' : -160,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  slideNavGroup: {
    position: 'relative',
    zIndex: 20,
  },
  cur: {},
  inner: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  text: {
    direction: 'ltr',
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(2)
    },
    '& h5': {
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(4)
    }
  },
  button: {},
  btnArea: {
    '& $button': {
      fontSize: 18,
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        maxWidth: 250,
        marginBottom: theme.spacing(2)
      }
    }
  },
  textBtn: {
    padding: theme.spacing(1, 0),
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(3)
    },
  },
  containedBtn: {
    [theme.breakpoints.up('sm')]: {
      width: 180
    }
  },
  slideNav: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: 1080,
    margin: '0 auto',
  },
  active: {},
  btnNav: {
    padding: '8px 8px 4px',
    textTransform: 'none',
    height: 'auto',
    border: '1px solid transparent',
    flex: 1,
    fontWeight: theme.typography.fontWeightRegular,
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    transition: 'all 0.3s ease',
    '& strong': {
      textTransform: 'capitalize',
      fontSize: 28,
      display: 'block',
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: -2
    },
    '&$active': {
      color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
      '& strong': {
        color: theme.palette.primary.main
      },
    }
  },
  divider: {
    margin: theme.spacing(0, 2)
  }
}));

export default sliderStyle;
