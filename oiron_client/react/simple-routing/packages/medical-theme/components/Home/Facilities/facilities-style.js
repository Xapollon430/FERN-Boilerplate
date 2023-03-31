import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(10),
    }
  },
  carouselHeader: {
    position: 'relative',
    zIndex: 3,
    marginBottom: theme.spacing(2),
    '& h4': {
      marginBottom: theme.spacing()
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  },
  viewAll: {
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    padding: theme.spacing(1, 3),
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(10)
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 24
    },
  },
  icon: {
    marginLeft: theme.spacing(),
    transform: theme.direction === 'rtl' ? 'scale(-1)' : 'inherit',
    '& svg': {
      width: 36
    }
  },
  title: {},
  carouselHandle: {
    height: 420,
    position: 'relative',
    zIndex: 10
  },
  carouselWrap: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    overflow: 'hidden',
  },
  item: {
    '&:focus': {
      outline: 'none'
    }
  },
  carouselProp: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '& div': {
      width: theme.direction === 'rtl' ? 500 : 350
    }
  },
  floatingArtwork: {
    position: 'absolute',
    width: '100%',
    left: theme.direction === 'rtl' ? 'auto' : theme.spacing(-4),
    right: theme.direction === 'rtl' ? theme.spacing(-4) : 'auto',
    top: 140,
    '@media (min-width: 1400px)': {
      left: theme.spacing(-12)
    },
  },
  artwork: {
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(5)
    },
    [theme.breakpoints.up('lg')]: {
      float: theme.direction === 'rtl' ? 'right' : 'left'
    },
    '@media (min-width: 1400px)': {
      marginRight: theme.spacing(-5)
    }
  },
  arrow: {
    direction: theme.direction === 'rtl' ? 'rtl' : 'ltr',
    marginTop: theme.spacing(8),
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    '& button': {
      background: theme.palette.background.paper,
      margin: theme.spacing(0.5),
      boxShadow: theme.shade.light,
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    },
    [theme.breakpoints.down(1280)]: {
      display: 'none'
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
      marginTop: 560
    },
  },
}));

export default useStyles;
