import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';

const contactStyles = makeStyles(theme => ({
  pageWrap: {
    minHeight: '100%',
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
    '& a': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
      textTransform: 'none',
      fontSize: 16,
      textDecoration: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      [theme.breakpoints.down('xs')]: {
        fontSize: 14
      }
    }
  },
  innerWrap: {
    margin: theme.spacing(0, 2)
  },
  fullFormWrap: {
    paddingTop: 0,
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(4)
    }
  },
  formBox: {
    overflow: 'hidden',
    background: theme.palette.background.paper,
    borderRadius: 0,
    [theme.breakpoints.up('md')]: {
      border: `1px solid ${theme.palette.primary.main}`,
    },
    [theme.breakpoints.down('sm')]: {
      boxShadow: 'none',
      background: 'none'
    }
  },
  mapForm: {
    [theme.breakpoints.up('md')]: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderRight: 'none',
    }
  },
  desc: {
    textAlign: 'center',
    padding: theme.spacing(0, 5),
    [theme.breakpoints.down('xs')]: {
      padding: 0
    }
  },
  checkArea: {
    position: 'relative'
  },
  form: {
    position: 'relative',
    padding: theme.spacing(0, 4, 8),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(5),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 2),
      margin: 0
    }
  },
  formHelper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    fontSize: 14,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: theme.spacing(3)
    }
  },
  link: {},
  flex: {},
  btnArea: {
    position: 'relative',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(6),
      display: 'flex'
    },
    [theme.breakpoints.between('md', 'md')]: {
      marginTop: theme.spacing(4),
      '& button': {
        margin: theme.spacing(2, 0, 4),
        width: '100%'
      }
    },
    [theme.breakpoints.between('sm', 'sm')]: {
      marginTop: theme.spacing(3),
      display: 'flex'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
      '& button': {
        margin: theme.spacing(2, 0, 4),
        width: '100%'
      }
    },
    '& span': {
      '& $link': {
        textDecoration: 'none !important',
        color: theme.palette.secondary.main
      }
    },
    '&$flex': {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('xs')]: {
        display: 'block'
      },
      [theme.breakpoints.between('md', 'md')]: {
        '& button': {
          width: 'auto'
        }
      },
    }
  },
  buttonLarge: {
    minHeight: 48,
    minWidth: 180
  },
  rightIcon: {
    marginRight: theme.spacing(1),
    transform: theme.direction === 'rtl' ? 'scale(-1)' : 'inherit'
  },
  check: {
    '& svg': {
      fill: theme.palette.secondary.main
    }
  },
  authFrame: {
    display: 'block',
    width: '100%',
    position: 'relative',
  },
  greeting: {
    display: 'flex',
    paddingTop: theme.spacing(5),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    textAlign: 'center',
    '& h4': {
      marginBottom: theme.spacing(2),
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightRegular
    }
  },
  img: {
    position: 'relative',
    margin: theme.spacing(10, 0),
    '& img': {
      position: 'relative',
       width: 320
    }
  },
  head: {
    textAlign: 'center',
    marginBottom: theme.spacing(5),
    textTransform: 'capitalize',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      justifyContent: 'center',
    }
  },
  wrapDeco: {
    marginTop: theme.spacing(2)
  },
  formWrap: {
    position: 'relative',
    padding: theme.spacing(0, 1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5)
    }
  },
  socmedSideLogin: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    },
    '& > *': {
      color: theme.palette.common.white,
      width: 150,
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(0, 0.5),
        width: 120
      },
      [theme.breakpoints.down('xs')]: {
        margin: theme.spacing(0, 0, 2),
        width: '100%'
      }
    },
    '& i': {
      color: theme.palette.common.white,
      marginRight: theme.spacing(1)
    }
  },
  blueBtn: {
    background: '#28aae1',
    '&:hover': {
      background: darken('#28aae1', 0.2),
    }
  },
  naviBtn: {
    background: '#3b579d',
    '&:hover': {
      background: darken('#3b579d', 0.2),
    }
  },
  redBtn: {
    background: '#dd493c',
    '&:hover': {
      background: darken('#dd493c', 0.2),
    }
  },
  separator: {
    margin: '40px auto',
    maxWidth: 300,
    minWidth: 200,
    textAlign: 'center',
    position: 'relative',
    color: theme.palette.text.secondary,
    '& p': {
      [theme.breakpoints.down('xs')]: {
        fontSize: 12
      }
    },
    '&:before, &:after': {
      content: '""',
      borderTop: '1px solid',
      borderTopColor: theme.palette.text.hint,
      top: '50%',
      position: 'absolute',
      width: '20%'
    },
    '&:before': {
      left: 0
    },
    '&:after': {
      right: 0
    }
  },
  formControlLabel: {
    '& a': {
      position: 'relative',
      top: -20,
    },
    '& > div': {
      marginTop: 0
    }
  },
  full: {},
  map: {
    position: 'relative',
    zIndex: 20,
    overflow: 'hidden',
    height: 745,
    [theme.breakpoints.down('sm')]: {
      height: '300px !important',
      marginTop: theme.spacing(5)
    },
    [theme.breakpoints.up('md')]: {
      borderRadius: '0 12px 12px 0 !important',
    },
    '&$full': {
      height: 915,
    }
  },
  buble: {
    borderRadius: 10,
    padding: theme.spacing(2),
    width: 'auto',
    left: -250,
    top: -300,
    color: theme.palette.common.black,
    '& p': {
      fontSize: 13,
    },
  },
  icon: {
    color: '#607D8B',
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    top: 4,
    position: 'relative',
    fontSize: 16,
  },
  notif: {
    top: 90
  },
}));

export default contactStyles;
