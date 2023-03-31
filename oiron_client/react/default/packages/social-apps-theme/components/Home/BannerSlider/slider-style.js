import { makeStyles, alpha } from '@material-ui/core/styles';

const liquidDeco = '/images/social/liquid-deco.svg';

const sliderStyle = makeStyles(theme => ({
  bannerWrap: {
    position: 'relative',
    display: 'block',
    '& ul[class*="slick-dots"]': {
      bottom: 0,
      left: 10,
      [theme.breakpoints.down('xs')]: {
        bottom: 0
      }
    },
  },
  carousel: {
    [theme.breakpoints.down('xs')]: {
      position: 'relative',
      zIndex: 5
    }
  },
  cur: {},
  decoWrap: {
    width: '100%',
    height: '100%',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      top: -120
    }
  },
  s1: {},
  s2: {},
  deco: {
    borderRadius: 80,
    position: 'absolute',
    background: `url(${liquidDeco}) no-repeat transparent`,
    backgroundSize: '100%',
    width: 1122,
    height: 950,
    opacity: 0,
    transition: 'all 1s cubic-bezier(0, -0.01, 0, 0.96)',
    '&$s1': {
      transform: 'translateX(100px) scale(0.8)',
      top: -190,
      left: theme.direction === 'rtl' ? -680 : 'auto',
      right: theme.direction === 'rtl' ? 'auto' : -680,
    },
    '&$s2': {
      transform: 'translateX(-100px) scale(0.8)',
      top: -360,
      left: -580,
    },
  },
  centerContent: {},
  img: {},
   btnArea: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      '&:not($download)': {
        flexDirection: 'column'
      }
    },
    '& $button': {
      fontSize: 18,
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(4)
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        maxWidth: 200,
        marginBottom: theme.spacing(2)
      }
    },
    '& a': {
      display: 'inline-flex',
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(2)
      },
      [theme.breakpoints.down('xs')]: {
        margin: 4
      },
      '& img': {
        width: 160,
        [theme.breakpoints.down('xs')]: {
          width: '100%'
        }
      }
    }
  },
  slider: {
    zIndex: 1,
    '& div[class*="slick-current"]': {
      [theme.breakpoints.down('sm')]: {
        zIndex: 1
      }
    },
  },
  slide: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      height: 600,
      paddingTop: theme.spacing(8)
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      padding: theme.spacing(15, 0, 5)
    },
    '& h4': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    },
    '& $img': {
      '& img': {
        margin: '80px auto 0',
        position: 'relative',
        zIndex: 5,
        maxHeight: 260,
        [theme.breakpoints.down('sm')]: {
          marginTop: theme.spacing(3)
        },
        [theme.breakpoints.down('xs')]: {
          marginTop: 0
        }
      }
    },
    '&$cur': {
      '& $deco': {
        transform: 'translateX(0px) scale(1)',
        opacity: 0.15,
      }
    },
    '&$centerContent': {
      paddingTop: '120px !important',
      '& $btnArea': {
        justifyContent: 'center'
      }
    },
  },
  sliderDeco: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    '& $slide': {
      height: 950,
    },
    '& div[class*="slick-list"]': {
      [theme.breakpoints.down('sm')]: {
        height: '100%'
      }
    }
  },
  imgSlide1: {
    [theme.breakpoints.up('md')]: {
      float: theme.direction === 'rtl' ? 'right' : 'left'
    }
  },
  imgSlide2: {
    [theme.breakpoints.up('md')]: {
      float: theme.direction === 'rtl' ? 'left' : 'right'
    }
  },
  hBanner: {
    textAlign: 'center',
    '&$hBanner': {
      '& img': {
        marginTop: theme.spacing(4),
        [theme.breakpoints.down('xs')]: {
          maxWidth: 'none'
        }
      }
    }
  },
  backgroundBanner: {
    position: 'absolute',
    zIndex: 6,
    left: theme.direction === 'rtl' ? -320 : 'auto',
    right: theme.direction === 'rtl' ? 'auto' : -320,
    top: 20,
    '&$img': {
      '& img': {
        maxHeight: 350,
      }
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
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
  download: {},
  slideNav: {
    display: 'flex',
    maxWidth: 1080,
    margin: '0 auto',
    justifyContent: 'center'
  },
  active: {},
  btnNav: {
    padding: theme.spacing(1, 3, 0.5),
    textTransform: 'none',
    height: 'auto',
    border: '1px solid transparent',
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
        background: theme.palette.secondary.main,
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
  divider: {
    margin: theme.spacing(0, 2)
  }
}));

export default sliderStyle;
