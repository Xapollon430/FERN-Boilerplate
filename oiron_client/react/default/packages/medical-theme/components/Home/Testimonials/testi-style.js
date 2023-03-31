import { makeStyles } from '@material-ui/core/styles';

const testiStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'relative',
    padding: theme.spacing(5, 0),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(10, 0),
    },
     [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  carouselHeader: {
    position: 'relative',
    zIndex: 1
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
      marginLeft: theme.direction === 'rtl' ? 0 : theme.spacing(-20),
      marginRight: theme.direction === 'rtl' ? theme.spacing(-20) : 0,
    },
    '& ul[class*="slick-dots"]': {
      bottom: theme.spacing(-8),
      '& li': {
        width: 10,
        height: 10,
        transition: 'width 0.3s ease',
        background: theme.palette.primary.light,
        borderRadius: 15,
        margin: theme.spacing(0, 0.5),
        '&[class="slick-active"]': {
          width: 35
        },
        '& button': {
          opacity: 0
        }
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
  itemPropsLast: {
    width: 350,
  },
  floatingArtwork: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: theme.spacing(5),
    [theme.breakpoints.up('lg')]: {
      top: theme.spacing(15),
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
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(5)
    },
    [theme.breakpoints.up('lg')]: {
      float: theme.direction === 'rtl' ? 'left' : 'right'
    },
    '@media (min-width: 1400px)': {
      marginRight: theme.spacing(-5)
    },
    '& img': {
      position: 'relative',
      top: theme.spacing(-10)
    }
  },
}));

export default testiStyles;
