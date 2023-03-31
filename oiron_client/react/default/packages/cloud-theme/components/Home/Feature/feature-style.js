import { makeStyles } from '@material-ui/core/styles';

const featureStyles = makeStyles(theme => ({
  last: {},
  mainFeature: {
    textAlign: 'center',
    marginBottom: theme.spacing(5),
    position: 'relative',
    zIndex: 3,
    '& figure': {
      width: 150,
      height: 150,
      borderRadius: 15,
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      margin: `0 auto ${theme.spacing(5)}px`,
      position: 'relative',
      background: theme.palette.type === 'dark' ? `linear-gradient(180deg, ${theme.palette.secondary.main} 20%, ${theme.palette.secondary.dark} 70%)` : `linear-gradient(180deg, ${theme.palette.secondary.light} 20%, ${theme.palette.secondary.main} 70%)`,
      '&:before': {
        borderRadius: 15,
        content: '""',
        position: 'absolute',
        width: 142,
        height: 142,
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
        top: 4,
        left: 4
      }
    },
    '& svg': {
      position: 'relative',
      height: 104,
      width: 104,
      margin: '0 auto',
      fill: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    },
    '& h6': {
      marginBottom: theme.spacing(2),
      fontWeight: theme.typography.fontWeightBold,
    },
    '& $item': {
      opacity: 1
    }
  },
  grid: {
    marginTop: theme.spacing(5)
  },
  divider: {},
  moreFeature: {
    position: 'relative',
    zIndex: 3,
    '& figure': {
      margin: 0
    },
    '& $divider': {
      border: 'none',
      display: 'block',
      background: 'none',
      margin: theme.spacing(5, 0),
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(10, 0),
      },
      '&:before': {
        content: '""',
        background: theme.palette.divider,
        width: 80,
        height: 8,
        borderRadius: 8,
        left: '50%',
        marginLeft: -40,
        position: 'absolute',
        [theme.breakpoints.up('md')]: {
          marginLeft: -60,
        }
      },
      '&:after': {
        content: '""',
        background: theme.palette.divider,
        width: 20,
        height: 8,
        left: '50%',
        marginLeft: 25,
        borderRadius: 8,
        position: 'absolute',
        [theme.breakpoints.down('xs')]: {
          display: 'none'
        }
      }
    }
  },
  item: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 3),
    },
    '&$last': {
      '& figure': {
        marginTop: theme.spacing(10)
      }
    },
    '& p': {
      marginBottom: theme.spacing(3),
    }
  },
  text: {
    margin: theme.spacing(8, 0),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0)
    }
  },
  illustration: {
    '& img': {
      display: 'block',
      margin: '0 auto',
      maxWidth: 400,
      maxHeight: 400,
      [theme.breakpoints.only('xs')]: {
        width: '100%'
      }
    }
  }
}));

export default featureStyles;
