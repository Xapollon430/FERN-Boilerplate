import { makeStyles } from '@material-ui/core/styles';

const discoverCardStyles = makeStyles(theme => ({
  discoverCard: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems: 'center'
    }
  },
  screen: {
    width: 220,
    height: 400,
    margin: 0,
    overflow: 'hidden',
    position: 'relative',
    borderRadius: 20,
    background: theme.palette.background.paper,
    boxShadow: theme.shade.light,
    zIndex: 2,
    [theme.breakpoints.down('xs')]: {
      margin: '0 auto',
    },
    '& img': {
      width: '100%'
    }
  },
  paper: {
    textAlign: 'center',
    borderRadius: 40,
    flex: 1,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3),
      marginBottom: theme.spacing(2),
      height: 290,
      paddingLeft: 240,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      marginLeft: -220
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(10),
      marginTop: theme.spacing(-5),
      background: 'none',
      boxShadow: 'none',
    },
    '& img': {
      maxWidth: '100%',
      maxHeight: 210,
      margin: `0 auto ${theme.spacing()}px`,
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    },
    '& strong': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 24,
      marginBottom: theme.spacing(2)
    }
  }
}));

export default discoverCardStyles;
