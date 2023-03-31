import { makeStyles } from '@material-ui/core/styles';

const integrationStyle = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(15),
    direction: 'ltr',
  },
  decoWrap: {
    position: 'relative'
  },
  illustration: {
    textAlign: 'center',
    '& img': {
      maxHeight: 240,
      margin: `${theme.spacing(4)}px auto`,
      display: 'block',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        maxWidth: 320
      }
    }
  },
  primaryColor: {},
  secondaryColor: {},
  droplet: {
    margin: '0 auto',
    width: 6,
    height: 128,
    '&$primaryColor': {
      fill: theme.palette.primary.main
    },
    '&$secondaryColor': {
      fill: theme.palette.secondary.main
    }
  },
  timeline: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(5)
    },
    '& ul': {
      listStyle: 'none',
      padding: 0,
      paddingLeft: theme.spacing(3),
      margin: 0,
      [theme.breakpoints.down('xs')]: {
        padding: 0
      },
      '& li': {
        '& strong': {
          fontWeight: theme.typography.fontWeightMedium
        }
      }
    },
  },
  icon: {
    fontSize: 80,
    width: 100,
    height: 100,
    textAlign: 'center',
    lineHeight: '100px',
    [theme.breakpoints.down('sm')]: {
      lineHeight: '50px',
      margin: '0 auto'
    }
  },
  text: {
    position: 'relative',
    display: 'block',
    '& p': {
      [theme.breakpoints.down('sm')]: {
        marginBottom: 0
      }
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0
    },
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 3)
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      '&:after': {
        display: 'none'
      }
    },
    [theme.breakpoints.down('xs')]: {
      margin: 0
    }
  },
  typePrimary: {
    '& strong': {
      color: theme.palette.primary.main
    },
    '& $icon': {
      '& i': {
        color: theme.palette.primary.main,
        background: `linear-gradient(${theme.palette.primary.light}, ${theme.palette.primary.main})`,
        '-webkit-background-clip': 'text',
        [theme.breakpoints.up('sm')]: {
          '-webkit-text-fill-color': 'transparent',
        }
      }
    },
    '& $text': {
      '&:after': {
        background: `linear-gradient(${theme.palette.primary.light}, ${theme.palette.primary.main})`
      }
    }
  },
  typeSecondary: {
    '& strong': {
      color: theme.palette.secondary.main
    },
    '& $icon': {
      '& i': {
        color: theme.palette.secondary.main,
        background: `linear-gradient(${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
        '-webkit-background-clip': 'text',
        [theme.breakpoints.up('sm')]: {
          '-webkit-text-fill-color': 'transparent',
        }
      }
    },
    '& $text': {
      '&:after': {
        background: `linear-gradient(${theme.palette.secondary.light}, ${theme.palette.secondary.main})`
      }
    }
  },
  item: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center'
    }
  },
  leftSide: {
    '& li': {
      textAlign: 'right',
      marginBottom: theme.spacing(11),
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(10)
      },
      [theme.breakpoints.down('xs')]: {
        marginBottom: theme.spacing(5)
      },
      '& $item': {
        justifyContent: 'flex-end',
        [theme.breakpoints.down('sm')]: {
          display: 'flex',
          flexDirection: 'column-reverse'
        }
      }
    },
    '& $text': {
      '&:after': {
        content: '""',
        width: 24,
        height: 24,
        borderRadius: '50%',
        position: 'absolute',
        top: 14,
        right: -190,
        [theme.breakpoints.down('md')]: {
          right: -150
        }
      }
    },
  },
  rightSide: {
    '& li': {
      [theme.breakpoints.up('md')]: {
        marginTop: theme.spacing(11)
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(10)
      },
      [theme.breakpoints.down('xs')]: {
        marginBottom: theme.spacing(5)
      }
    },
    '& $text': {
      '&:after': {
        content: '""',
        width: 24,
        height: 24,
        borderRadius: '50%',
        position: 'absolute',
        top: 14,
        left: -185,
        [theme.breakpoints.down('md')]: {
          left: -145
        }
      }
    },
  },
  solidDivider: {
    position: 'absolute',
    left: 'calc(50% + 12px)',
    top: 0,
    width: 6,
    height: '100%',
    borderRadius: 6,
    opacity: 0.05,
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.common.black,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  dashedDivider: {
    position: 'absolute',
    opacity: 0.05,
    left: 'calc(50% + 12px)',
    top: '10%',
    width: 4,
    height: '63%',
    borderRadius: 2,
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.common.black,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 'calc(50% + -1px)',
      top: '-23%',
      width: 2,
      height: '20%',
      borderRadius: 2,
      backgroundColor: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.common.black,
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      left: 'calc(50% + -3px)',
      top: '103%',
      width: 6,
      height: '60%',
      borderRadius: 6,
      backgroundColor: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.common.black,
    }
  }
}));

export default integrationStyle;
