import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
const waveDecoLight = '/images/saas2/deco-wave-light.png';
const waveDecoDark = '/images/saas2/deco-wave-dark.png';

const sliderStyle = makeStyles(theme => ({
  carousel: {
    [theme.breakpoints.down('xs')]: {
      position: 'relative',
      zIndex: 5
    }
  },
  bannerWrap: {
    position: 'relative',
    display: 'block',
    backgroundImage: `linear-gradient(120deg, ${fade(theme.palette.primary.main, 0.15)}, ${fade(theme.palette.secondary.main, 0.15)})`,
    '& ul[class*="slick-dots"]': {
      zIndex: 1,
      paddingLeft: 0,
      [theme.breakpoints.between('sm', 'md')]: {
        bottom: 60
      }
    }
  },
  top: {},
  bottom: {},
  centerContent: {},
  slide1: {},
  slide2: {},
  slide3: {},
  slide: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      padding: theme.spacing(20, 0, 15)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(15, 0, 5)
    },
    '& img': {
      margin: '80px auto 0',
      maxWidth: '100%',
      maxHeight: 350,
      position: 'relative',
      zIndex: 5,
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(3)
      }
    },
    '&$centerContent': {
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(10)
      }
    }
  },
  imgSlide1: {
    [theme.breakpoints.up('sm')]: {
      float: theme.direction === 'rtl' ? 'right' : 'left'
    }
  },
  imgSlide2: {
    [theme.breakpoints.up('md')]: {
      float: theme.direction === 'rtl' ? 'left' : 'right'
    },
    [theme.breakpoints.between('sm', 'sm')]: {
      left: theme.direction === 'rtl' ? 100 : 'auto',
      right: theme.direction === 'rtl' ? 'auto' : 100,
    }
  },
  hBanner: {
    textAlign: 'center',
    marginTop: theme.spacing(5),
    '& img': {
      [theme.breakpoints.up('md')]: {
        marginTop: theme.spacing(1),
        width: '50%'
      },
      [theme.breakpoints.down('sm')]: {
        maxWidth: 'none',
        maxHeight: 300
      },
      [theme.breakpoints.down('xs')]: {
        right: theme.direction === 'rtl' ? -400 : 'auto',
        left: theme.direction === 'rtl' ? 'auto' : -400,
      }
    }
  },
  backgroundBanner: {
    position: 'absolute',
    zIndex: 3,
    left: theme.direction === 'rtl' ? -250 : 'auto',
    right: theme.direction === 'rtl' ? 'auto' : -250,
    [theme.breakpoints.up('xl')]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      left: theme.direction === 'rtl' ? -220 : 'auto',
      right: theme.direction === 'rtl' ? 'auto' : -220,
    },
    [theme.breakpoints.down('sm')]: {
      bottom: 0
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },
  slideNavGroup: {
    position: 'relative',
    content: '""',
    marginTop: -240,
    minHeight: 180,
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      marginTop: -160
    }
  },
  slider: {
    zIndex: 1,
    '& div[class*="slick-current"]': {
      [theme.breakpoints.down('sm')]: {
        zIndex: 1
      }
    },
    '& $slide': {
      [theme.breakpoints.up('md')]: {
        height: 820,
        paddingBottom: 160
      }
    },
  },
  waveCover: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    bottom: -20,
    left: 0,
    transform: 'scale(1.2, 1)',
    backgroundPosition: '50px 90px',
    backgroundSize: '1370px 80px',
    backgroundRepeat: 'repeat-x',
    backgroundImage: theme.palette.type === 'dark' ? `url(${waveDecoDark})` : `url(${waveDecoLight})`,
    [theme.breakpoints.down('md')]: {
      backgroundSize: '1170px 80px',
      backgroundPosition: '200px bottom',
    },
    '@media (min-width: 1400px)': {
      display: 'none'
    }
  },
  decoWrap: {
    width: '100%',
    height: '100%',
    '@media (min-width: 1400px)': {
      display: 'none'
    }
  },
  deco: {
    position: 'absolute',
    bottom: 0,
    '& svg': {
      width: 2000,
    },
    '&$top': {
      bottom: 0,
      left: 0,
      height: 240,
      width: '100%',
      opacity: 0.5,
      '& $waveCover': {
        backgroundPosition: '470px 120px',
        backgroundSize: '1900px 110px',
        backgroundRepeat: 'repeat-x'
      }
    },
    '&$bottom': {
      left: -370,
      bottom: -10,
      opacity: 0.4,
      '& svg': {
        fill: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      }
    }
  },
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
    paddingLeft: theme.spacing(),
    paddingRight: theme.spacing(),
    [theme.breakpoints.up('sm')]: {
      marginLeft: -8,
      marginRight: theme.spacing(2)
    },
  },
  slideNav: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: 1080,
    margin: '0 auto',
  },
  active: {},
  btnNav: {
    padding: theme.spacing(1, 3),
    textTransform: 'none',
    height: 'auto',
    fontWeight: theme.typography.fontWeightRegular,
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    '& strong': {
      textTransform: 'capitalize',
      fontSize: 28,
      display: 'block',
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: -2
    },
    '&:hover': {
      background: fade(theme.palette.text.primary, 0.05),
      transition: 'all 0.3s ease-out',
    },
    '&$active': {
      background: theme.palette.background.paper,
      boxShadow: theme.shade.light,
      '& strong': {
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
      },
    }
  },
  divider: {
    margin: theme.spacing(0, 2)
  }
}));

export default sliderStyle;
