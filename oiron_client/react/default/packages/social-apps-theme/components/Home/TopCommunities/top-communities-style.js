import { makeStyles } from '@material-ui/core/styles';

const topCommunitiesStyles = makeStyles(theme => ({
  iconGroup: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(-10)
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      maxWidth: 500,
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: 400,
      marginBottom: theme.spacing(3)
    },
    '& > *': {
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        justifyContent: 'space-around'
      }
    }
  },
  bigIcon: {
    position: 'relative',
    textAlign: 'center',
    margin: theme.spacing(10, 0),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(5, 0)
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(2, 0)
    },
    '& h4': {
      fontSize: 16,
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.up('sm')]: {
        fontSize: 24
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 32
      }
    }
  },
  icon: {
    lineHeight: '300px',
    margin: '0 auto',
    padding: 3,
    borderRadius: '50%',
    overflow: 'hidden',
    marginBottom: theme.spacing(2),
    width: 200,
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: 120,
      height: 120,
      lineHeight: '165px'
    },
    '& i': {
      width: 200,
      height: 200,
      display: 'block',
      '-webkit-background-clip': 'text !important',
      color: 'transparent',
      [theme.breakpoints.up('sm')]: {
        '-webkit-text-fill-color': 'transparent'
      },
      [theme.breakpoints.down('xs')]: {
        width: 125,
        height: 125
      },
      '&:before': {
        fontSize: 140,
        [theme.breakpoints.down('xs')]: {
          fontSize: 84
        }
      }
    }
  },
  bg: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    textAlign: 'center',
    verticalAlign: 'middle',
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
  },
  avatar: {},
  chip: {},
  members: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
    '& $avatar': {
      width: 30,
      height: 30,
      marginLeft: -10,
      border: '1px solid',
      borderColor: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
    },
    '& $chip': {
      position: 'relative',
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightMedium,
      marginLeft: -10,
      border: '3px solid !important',
      borderColor: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    }
  },
  btnExplore: {
    fontSize: 22,
    height: '52px !important',
    [theme.breakpoints.up('md')]: {
      width: 350
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    }
  }
}));

export default topCommunitiesStyles;
