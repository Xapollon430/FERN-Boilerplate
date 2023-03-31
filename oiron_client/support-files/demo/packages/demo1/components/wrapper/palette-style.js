import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const paletteStyles = makeStyles(theme => ({
  active: {},
  btn: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    right: 10,
    top: '32%',
    zIndex: 9999,
    borderRadius: 8,
    boxShadow: theme.shadows[4],
    padding: theme.spacing(0.5),
    border: `1px solid ${theme.palette.primary.main}`,
    background: fade(theme.palette.background.paper, 0.85),
    [theme.breakpoints.down('xs')]: {
      top: '45%',
    },
    '&$active': {
      right: 624,
      border: 'none'
    },
    '& svg': {
      width: 32,
      height: 32,
      fill: theme.palette.text.secondary,
      [theme.breakpoints.down('xs')]: {
        width: 22,
        height: 22
      }
    },
    '& button': {
      [theme.breakpoints.down('xs')]: {
        padding: 8
      }
    }
  },
  draweBg: {
    background: fade(theme.palette.background.paper, 0.85),
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: 10
  },
  optWrap: {
    width: 600,
    overflow: 'hidden',
    '& > div': {
      overflow: 'auto',
      height: '100%',
      paddingTop: theme.spacing(10)
    },
    '& header': {
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'row'
      }
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  tabBtn: {
    minWidth: 90,
    fontWeight: theme.typography.fontWeightBold,
  },
  wrapper: {
    justifyContent: 'space-evenly'
  },
  themeSwitched: {
    marginBottom: theme.spacing(3),
    '& h6': {
      marginBottom: theme.spacing(),
    },
    '& label': {
      lineHeight: '40px'
    }
  },
  thumbSwitch: {
    backgroundColor: theme.palette.secondary.main
  },
  trackSwitch: {
    backgroundColor: theme.palette.secondary.main
  },
  swatch: {
    position: 'relative',
    textAlign: 'center',
    padding: 4,
    overflow: 'hidden',
    marginBottom: theme.spacing(2),
    '&$active': {
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}`
    }
  },
  primary: {
    borderRadius: 10,
    width: '100%',
    height: 100,
    display: 'block',
  },
  secondary: {
    width: 60,
    height: 60,
    display: 'block',
    position: 'absolute',
    borderRadius: '50%',
    right: 0,
    top: '40%'
  },
  accent: {
    width: 20,
    height: 20,
    display: 'block',
    position: 'absolute',
    borderRadius: 4,
    right: 0,
    top: '80%'
  },
  themeColor: {
    '& h6': {
      marginBottom: theme.spacing(),
    },
  },
  explore: {
    margin: theme.spacing(4, 0),
    '& ul': {
      padding: 0,
      margin: 0,
      '& li': {
        listStyle: 'none',
        display: 'inline-block',
        textAlign: 'center',
        marginBottom: theme.spacing(4),
        width: '33.33%',
        [theme.breakpoints.down('xs')]: {
          width: '100%'
        },
        '& a': {
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: 16,
          fontWeight: theme.typography.fontWeightMedium,
          color: theme.palette.text.primary,
          transition: 'all 0.3s ease',
          top: 0,
          position: 'relative',
          '&:hover': {
            color: theme.palette.text.primary,
            top: -5
          },
          '& figure': {
            margin: theme.spacing(0, 0, 1, 0),
            overflow: 'hidden',
            borderRadius: 6,
            boxShadow: theme.shadows[4],
            height: 200,
            width: 170,
            [theme.breakpoints.down('xs')]: {
              width: 190,
              height: 242
            }
          },
          '& img': {
            width: '100%'
          }
        }
      }
    }
  },
  marginBottom: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(3)
    }
  },
  lyBtn: {
    display: 'block',
    textAlign: 'center',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 4,
    paddingBottom: 2,
    margin: theme.spacing(),
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 12,
    '&$active': {
      border: `2px solid ${theme.palette.primary.main}`
    },
    '& img': {
      width: '100%',
      display: 'block',
      margin: `0 auto ${theme.spacing()}px`,
      borderRadius: 4,
      boxShadow: theme.shade.light
    }
  }
}));

export default paletteStyles;
