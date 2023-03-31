import { makeStyles } from '@material-ui/core/styles';

const integrationStyle = makeStyles(theme => ({
  decoWrap: {
    position: 'relative'
  },
  decorationBg: {
    position: 'absolute',
    width: 1280,
    height: '100%',
    left: -10,
    top: 240,
    '& svg': {
      width: '100%',
      height: 1300,
      fill: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
      opacity: 0.2,
      transform: 'scale(1.2)',
      '@media (min-width: 1400px)': {
        transform: 'scale(2.5, 1)'
      },
      [theme.breakpoints.up('xl')]: {
        display: 'none'
      },
      [theme.breakpoints.down('xs')]: {
        transform: 'scale(0.5)',
        transformOrigin: 'center left'
      }
    }
  },
  illustration: {
    margin: 0,
    '& img': {
      display: 'block',
      maxWidth: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: theme.spacing(4),
      [theme.breakpoints.up('lg')]: {
        marginTop: theme.spacing(4)
      },
      [theme.breakpoints.up('sm')]: {
        height: 240
      }
    }
  },
  timeline: {
    position: 'relative',
    direction: 'ltr',
    marginTop: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(5)
    },
    '& ul': {
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(3),
      }
    },
    '& li': {
      listStyle: 'none',
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2, 0)
      }
    }
  },
  icon: {
    boxShadow: theme.shade.light,
    background: theme.palette.background.paper,
    borderRadius: '50%',
    transform: 'rotate(45deg)',
    fontSize: 60,
    width: 100,
    height: 100,
    textAlign: 'center',
    lineHeight: '100px',
    '& i': {
      display: 'block',
      transform: 'rotate(-45deg)'
    },
    [theme.breakpoints.down('sm')]: {
      width: 50,
      height: 50,
      lineHeight: '50px',
      fontSize: 32,
      margin: `0 auto ${theme.spacing(4)}px`
    }
  },
  text: {
    position: 'relative',
    display: 'block',
    margin: theme.spacing(0, 3),
    fontSize: 16,
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
      color: theme.palette.primary.main
    },
    '& $text': {
      '&:after': {
        background: theme.palette.primary.main
      }
    }
  },
  typeSecondary: {
    '& strong': {
      color: theme.palette.secondary.main
    },
    '& $icon': {
      color: theme.palette.secondary.main
    },
    '& $text': {
      '&:after': {
        background: theme.palette.secondary.main
      }
    }
  },
  typeAccent: {
    '& strong': {
      color: theme.palette.accent.main
    },
    '& $icon': {
      color: theme.palette.accent.main
    },
    '& $text': {
      '&:after': {
        background: theme.palette.accent.main
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
    padding: 0,
    '& li': {
      [theme.breakpoints.up('md')]: {
        marginBottom: theme.spacing(10),
        textAlign: 'right'
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
        right: -190
      }
    },
    '& $icon': {
      [theme.breakpoints.up('md')]: {
        borderTopRightRadius: 0
      }
    }
  },
  rightSide: {
    [theme.breakpoints.down('sm')]: {
      padding: 0
    },
    '& li': {
      [theme.breakpoints.up('md')]: {
        marginTop: theme.spacing(10)
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
        left: -185
      }
    },
    '& $icon': {
      [theme.breakpoints.up('md')]: {
        borderBottomLeftRadius: 0
      }
    }
  },
  solidDivider: {
    position: 'absolute',
    left: 'calc(50% + 10px)',
    top: 0,
    width: 8,
    height: '100%',
    borderRadius: 8,
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  dashedDivider: {
    position: 'absolute',
    left: 'calc(50% + 12px)',
    top: '10%',
    width: 4,
    height: '63%',
    borderRadius: 2,
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
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
      backgroundColor: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      left: 'calc(50% + -3px)',
      top: '103%',
      width: 6,
      height: '60%',
      borderRadius: 6,
      backgroundColor: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    }
  }
}));

export default integrationStyle;
