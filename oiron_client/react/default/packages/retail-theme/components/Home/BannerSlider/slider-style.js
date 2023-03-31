import { makeStyles, alpha } from '@material-ui/core/styles';

const decoBanner = '/images/retail/deco-banner.svg';

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
    '& ul[class*="slick-dots"]': {
      zIndex: 1,
      bottom: theme.spacing(5),
      [theme.breakpoints.down('xs')]: {
        bottom: 0
      }
    }
  },
  img: {
    display: 'block'
  },
  centerContent: {},
  slide1: {},
  slide2: {},
  slide3: {},
  slide: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      padding: theme.spacing(15, 0, 10)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(15, 0, 5)
    },
    '& img': {
      margin: '80px auto 0',
      maxWidth: '100%',
      maxHeight: 300,
      position: 'relative',
      zIndex: 5,
      [theme.breakpoints.up('lg')]: {
        maxHeight: 260
      },
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(3)
      },
    },
    '&$centerContent': {
      paddingTop: `${theme.spacing(15)}px !important`
    }
  },
  imgSlide1: {
    [theme.breakpoints.up('md')]: {
      float: theme.direction === 'rtl' ? 'right' : 'left'
    }
  },
  imgSlide2: {
    [theme.breakpoints.up('lg')]: {
      float: theme.direction === 'rtl' ? 'left' : 'right'
    },
  },
  hBanner: {
    textAlign: 'center',
    '& img': {
      marginTop: theme.spacing(1),
      zIndex: 4,
      [theme.breakpoints.up('md')]: {
        height: 164
      },
      [theme.breakpoints.down('sm')]: {
         maxWidth: 'none'
      },
      [theme.breakpoints.down('xs')]: {
        left: -400
      }
    }
  },
  backgroundBanner: {
    position: 'absolute',
    zIndex: 3,
    left: theme.direction === 'rtl' ? -320 : 'auto',
    right: theme.direction === 'rtl' ? 'auto' : -320,
    top: 20,
    '&:before': {
      content: '""',
      background: `url(${decoBanner}) no-repeat transparent`,
      width: 827,
      height: 246,
      transform: 'scale(0.8)',
      position: 'absolute',
      left: -150,
      bottom: 40,
    },
    '& img': {
      maxHeight: 350,
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
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
  slideNavGroup: {
    position: 'relative',
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
        marginBottom: theme.spacing(2)
      }
    }
  },
  textBtn: {
    paddingLeft: theme.spacing(),
    paddingRight: theme.spacing(),
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(4)
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
    padding: theme.spacing(1, 3, 0.5),
    textTransform: 'none',
    height: 'auto',
    border: '1px solid transparent',
    flex: 1,
    fontWeight: theme.typography.fontWeightRegular,
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    '& strong': {
      textTransform: 'capitalize',
      fontSize: 28,
      display: 'block',
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: -2,
      transition: 'all 0.5s ease-out',
      '&:before': {
        content: '""',
        width: 18,
        height: 18,
        opacity: 0,
        transform: 'scale(0)',
        transition: 'all 0.5s ease-out',
        background: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
        position: 'absolute',
        borderRadius: '50%',
        top: 20,
        left: 24,
      }
    },
    '&:hover': {
      transition: 'all 0.3s ease-out',
      background: alpha(theme.palette.text.primary, 0.05),
      '& strong': {
        color: theme.palette.secondary.main
      }
    },
    '&$active': {
      '& strong': {
        paddingLeft: theme.spacing(3),
        color: theme.palette.secondary.main,
        '&:before': {
          opacity: 1,
          transform: 'scale(1)'
        },
      },
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
        height: 540,
        paddingTop: theme.spacing(5)
      }
    }
  },
  divider: {
    margin: theme.spacing(0, 2)
  }
}));

export default sliderStyle;
