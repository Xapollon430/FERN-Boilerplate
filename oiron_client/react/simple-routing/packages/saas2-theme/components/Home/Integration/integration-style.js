import { makeStyles } from '@material-ui/core/styles';

const integrationStyle = makeStyles(theme => ({
  row: {
    position: 'relative'
  },
  decorationBg: {
    position: 'absolute',
    width: 1280,
    height: '100%',
    left: -10,
    top: 400,
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
  left: {},
  illustration: {
    margin: 0,
    '& img': {
      margin: `${theme.spacing(4)}px 0`,
      display: 'block',
      maxWidth: '100%',
      [theme.breakpoints.up('sm')]: {
        maxHeight: 240
      }
    },
    '&$left': {
      '& img': {
        marginLeft: 'auto'
      }
    }
  },
  icon: {
    width: 'auto',
    height: 'auto',
    position: 'relative',
    top: theme.spacing()
  },
  list: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10)
    },
    '& ul': {
      padding: 0,
      '& li': {
        marginBottom: 20,
        listStyle: 'none',
        fontSize: 24,
        [theme.breakpoints.down('sm')]: {
          fontSize: 16
        },
        '& $icon': {
          borderRadius: '50%',
          padding: 6,
          [theme.breakpoints.down('sm')]: {
            fontSize: 14
          }
        }
      }
    },
    '& h3': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(1)
    }
  },
  listPrimary: {
    '& $icon': {
      background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      color: theme.palette.primary.main,
      marginRight: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        marginRight: theme.spacing(2)
      }
    }
  },
  listSecondary: {
    '& li': {
      [theme.breakpoints.up('sm')]: {
        textAlign: 'right'
      }
    },
    '& $icon': {
      background: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
      color: theme.palette.secondary.main,
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
      },
      [theme.breakpoints.down('xs')]: {
        float: 'left',
        marginRight: theme.spacing(2)
      }
    }
  }
}));

export default integrationStyle;
