import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const sliderStyle = makeStyles(theme => ({
  bannerWrap: {
    '& ul[class*="slick-dots"]': {
      zIndex: 1,
      bottom: 25
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
    direction: 'ltr',
    '& *': {
      direction: 'ltr'
    },
    [theme.breakpoints.up('md')]: {
      height: 600,
      paddingTop: theme.spacing(5)
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      padding: theme.spacing(15, 0, 10, 0)
    },
    '& img': {
      margin: '0 auto',
      maxHeight: 350,
      position: 'relative',
      [theme.breakpoints.up('md')]: {
        maxWidth: '100%'
      },
      [theme.breakpoints.down('md')]: {
        margin: `${theme.spacing(4)}px auto 0`
      }
    },
    '&$centerContent': {
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(10)
      }
    }
  },
  imgSlide1: {
    [theme.breakpoints.between('md', 'md')]: {
      float: 'left',
      right: theme.spacing(-5)
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
      float: 'right'
    }
  },
  carousel: {
    [theme.breakpoints.down('xs')]: {
      position: 'relative',
      zIndex: 5
    },
    '& > div': {
      marginBottom: 0
    }
  },
  hBanner: {
    textAlign: 'center',
    '& img': {
      marginTop: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        width: '50%'
      },
      [theme.breakpoints.down('xs')]: {
        marginLeft: -100
      }
    }
  },
  backgroundBanner: {
    position: 'absolute',
    right: -260,
    paddingTop: 20,
    '& img': {
      maxHeight: 320,
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  deco: {
    position: 'absolute',
    top: 0,
    left: -180,
    display: 'flex',
    width: 828,
    height: 324,
    opacity: theme.palette.type === 'dark' ? 0.2 : 0.5,
    '& > div': {
      position: 'relative',
      flex: 1
    },
  },
  round: {
    width: 176,
    height: 176,
    position: 'absolute',
    top: -10,
    left: 130,
    borderRadius: '50%'
  },
  leaf: {
    width: 192,
    height: 192,
    position: 'absolute',
    top: 80
  },
  land: {
    width: 350,
    height: 350,
    position: 'absolute',
    bottom: 0
  },
  decoLeft: {
    '& $leaf': {
      left: -60,
      borderRadius: theme.pie[4],
      background: theme.palette.type === 'dark' ? theme.palette.accent.dark : theme.palette.accent.light,
    },
    '& $round': {
      background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    },
    '& $land': {
      right: 0,
      borderRadius: theme.pie[1],
      background: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    }
  },
  decoRight: {
    '& $leaf': {
      right: -60,
      borderRadius: theme.pie[3],
      background: theme.palette.type === 'dark' ? theme.palette.accent.dark : theme.palette.accent.light,
    },
    '& $round': {
      background: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    },
    '& $land': {
      left: 0,
      borderRadius: theme.pie[2],
      background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    }
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
  button: {
    marginRight: theme.spacing(3)
  },
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
    padding: theme.spacing(1, 0),
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(3)
    },
  },
  containedBtn: {
    [theme.breakpoints.up('sm')]: {
      width: 200
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
    padding: theme.spacing(2),
    textTransform: 'none',
    height: 'auto',
    flex: 1,
    fontWeight: theme.typography.fontWeightRegular,
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    transition: 'all 0.3s ease',
    border: '1px solid transparent',
    borderRadius: theme.rounded.small,
    '& strong': {
      transition: 'all 0.3s ease',
      textTransform: 'capitalize',
      fontSize: 28,
      display: 'block',
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: -2
    },
    '&:hover': {
      borderColor: theme.palette.primary.main,
      background: fade(theme.palette.text.primary, 0.08)
    },
    '&$active': {
      borderColor: theme.palette.primary.main,
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      '& strong': {
        color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark
      },
    }
  },
  divider: {
    margin: theme.spacing(0, 2)
  }
}));

export default sliderStyle;
