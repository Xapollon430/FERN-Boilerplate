import { makeStyles } from '@material-ui/core/styles';

const testiStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'relative',
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(5),
    }
  },
  carouselHeader: {
    position: 'relative',
    zIndex: 3,
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
    [theme.breakpoints.up('lg')]: {
      marginRight: 160
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 24
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 32
    },
  },
  icon: {
    marginLeft: theme.spacing(),
    transform: theme.direction === 'rtl' ? 'scale(-1)' : 'inherit',
    '& svg': {
      width: 36
    }
  },
  carouselHandle: {
    height: 380,
    position: 'relative',
    zIndex: 10
  },
  carouselWrap: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    overflow: 'hidden',
  },
  carousel: {
    position: 'relative',
    zIndex: 3,
    [theme.breakpoints.up('md')]: {
      marginRight: theme.direction === 'rtl' ? theme.spacing(-20) : 0,
      marginLeft: theme.direction === 'rtl' ? 0 : theme.spacing(-20),
    },
    '& ul[class*="slick-dots"]': {
      [theme.breakpoints.up('sm')]: {
        bottom: theme.spacing(-8),
      }
    }
  },
  item: {
    padding: theme.spacing(2),
    '&:focus': {
      outline: 'none'
    }
  },
  title: {},
  floatingTitle: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: theme.spacing(5),
    [theme.breakpoints.up('lg')]: {
      left: theme.spacing(3),
      top: theme.spacing(-10),
    },
    [theme.breakpoints.up(1400)]: {
      left: theme.spacing(10),
    },
    '& $title': {
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(5),
      },
      [theme.breakpoints.up('lg')]: {
        float: 'right',
      },
      [theme.breakpoints.up(1400)]: {
        marginRight: theme.spacing(-5)
      },
    }
  },
  itemPropsLast: {
    width: theme.direction === 'rtl' ? 160 : 400,
  },
  floatingArtwork: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: theme.spacing(5),
    [theme.breakpoints.up('lg')]: {
      left: theme.spacing(3)
    },
    '@media (min-width: 1400px)': {
      left: theme.spacing(10)
    },
  },
  artwork: {
    display: 'flex',
    alignItems: 'flex-end',
    height: 540,
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(5)
    },
    [theme.breakpoints.up('lg')]: {
      float: theme.direction === 'rtl' ? 'left' : 'right'
    },
    '@media (min-width: 1400px)': {
      marginRight: theme.spacing(-5)
    }
  },
}));

export default testiStyles;
