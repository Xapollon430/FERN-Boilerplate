import { makeStyles } from '@material-ui/core/styles';

const sliderStyle = makeStyles(theme => ({
  bannerWrap: {
    position: 'relative',
    display: 'block',
    '& ul[class*="slick-dots"]': {
      bottom: -20,
      left: 10
    }
  },
  cur: {},
  decoWrap: {
    width: '100%',
    height: '100%',
    transition: 'all 1s cubic-bezier(0, -0.01, 0, 0.96)',
    transform: 'translateX(-50px) scale(0.8)',
    opacity: 0,
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      top: -120
    }
  },
  top: {},
  bottom: {},
  s1: {},
  s2: {},
  deco: {
    borderRadius: '50%',
    position: 'absolute',
    '&$top': {
      backgroundImage: theme.palette.type === 'dark' ? `linear-gradient(95deg,  ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 110%))` : `linear-gradient(95deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 110%)`,
      width: 1300,
      height: 1300,
      opacity: 0.3,
      '&$s1': {
        top: -900,
        right: -800,
      },
      '&$s2': {
        top: -900,
        left: -800,
      },
    },
    '&$bottom': {
      border: `1px solid ${theme.palette.primary.main}`,
      opacity: 0.3,
      width: 800,
      height: 800,
      '&$s1': {
        top: -200,
        right: -340
      },
      '&$s2': {
        top: -280,
        left: -310
      },
    }
  },
  img: {
    position: 'relative'
  },
  centerContent: {
    paddingTop: theme.spacing(10)
  },
  slider: {
    zIndex: 1,
    '& div[class*="slick-current"]': {
      [theme.breakpoints.down('sm')]: {
        zIndex: 1
      }
    }
  },
  slide: {
    position: 'relative',
    '& img': {
      margin: '80px auto 0',
      maxWidth: 560,
      maxHeight: 320
    },
    '&$cur': {
      '& $decoWrap': {
        transform: 'translateX(0px) scale(1)',
        opacity: 1,
      }
    },
    [theme.breakpoints.up('md')]: {
      height: 600,
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      height: 'auto',
      padding: theme.spacing(15, 0, 5),
      '& img': {
        height: 220,
        width: 'auto',
        marginTop: `${theme.spacing(2)}px !important`
      }
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 0
    }
  },
  backgroundBanner: {
    position: 'absolute',
    zIndex: 0,
    right: theme.direction === 'rtl' ? 'auto' : -250,
    left: theme.direction === 'rtl' ? -250 : 'auto',
    bottom: 100,
    '& img': {
      maxHeight: 300,
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    }
  },
  hBanner: {
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-end',
      display: 'flex',
      marginRight: -120
    },
    '& img': {
      marginTop: theme.spacing(4),
      [theme.breakpoints.up('md')]: {
        width: '60%'
      },
      [theme.breakpoints.down('md')]: {
        maxWidth: 'none',
        maxHeight: 'none',
      },
      [theme.breakpoints.down('xs')]: {
        marginLeft: '-50%'
      },
    }
  },
  sliderDeco: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    '& div[class*="slick-list"]': {
      [theme.breakpoints.down('sm')]: {
        height: '100%'
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
  btnText: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark
  },
  btnArea: {
    '& > *': {
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(3)
      }
    },
    '& $button': {
      width: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        marginBottom: theme.spacing(2)
      }
    }
  },
  slideNav: {
    display: 'flex',
  },
  active: {},
  btnNav: {
    textTransform: 'none',
    height: 'auto',
    padding: theme.spacing(1),
    flex: 1,
    fontWeight: theme.typography.fontWeightRegular,
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    borderRadius: 36,
    '& strong': {
      textTransform: 'capitalize',
      fontSize: 28,
      display: 'block',
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: -2
    },
    '&:after': {
      content: '""',
      borderBottom: '6px solid #fff',
      borderRadius: 6,
      width: '0%',
      position: 'absolute',
      bottom: -12,
      left: -2,
      transition: 'all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93)',
      transformOrigin: 'left center',
    },
    '&:hover': {
      transition: 'all 0.3s ease-out',
      '&:after': {
        width: '50%',
        left: 5,
        borderBottomColor: theme.palette.primary.main
      }
    },
    '&$active': {
      '& strong': {
        color: theme.palette.primary.main
      },
      '&:after': {
        width: '50%',
        left: 5,
        borderBottomColor: theme.palette.primary.main
      }
    }
  },
  divider: {
    margin: theme.spacing(0, 2)
  }
}));

export default sliderStyle;
