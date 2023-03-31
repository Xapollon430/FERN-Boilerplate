import { makeStyles } from '@material-ui/core/styles';

const testiStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(10)
    }
  },
  carousel: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 4),
    },
    '& > div': {
      zIndex: 10
    },
    '&:after, &:before': {
      [theme.breakpoints.up('sm')]: {
        content: '""',
        background: theme.palette.background.paper,
        boxShadow: theme.shade.light,
        height: 150,
        position: 'absolute',
        borderRadius: 40,
      }
    },
    '&:after': {
      width: '85%',
      bottom: -10,
      left: '50%',
      transform: 'translate(-50%, 0)'
    },
    '&:before': {
      width: '80%',
      bottom: -35,
      left: '50%',
      transform: 'translate(-50%, 0)'
    },
    '& ul[class="slick-dots"]': {
      bottom: -40,
      [theme.breakpoints.up('sm')]: {
        bottom: -95,
      },
      '& li': {
        margin: 4,
        '& button:before': {
          borderRadius: 15,
          width: 15,
          height: 10,
          opacity: 1,
          borderWidth: 1,
        },
        '&[class="slick-active"]': {
          '& button:before': {
            top: 0,
            left: -7,
            width: 30,
            height: 10,
            background: theme.palette.primary.main
          }
        }
      }
    },
    '& > button': {
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    }
  },
  item: {
    padding: theme.spacing(1),
    '&:focus': {
      outline: 'none'
    }
  },
  testiContent: {
    position: 'relative',
    padding: theme.spacing(0, 3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 1)
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: 'calc(100% + 40px)',
      top: -20,
      left: 0,
      background: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
      opacity: 0.3,
      borderRadius: 40
    }
  },
  slide: {
    background: 'none'
  },
  nav: {
    position: 'absolute',
    border: 'none',
    zIndex: 12,
    top: '48%',
    width: 60,
    height: 60,
    padding: 0,
    minWidth: 0,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shade.light,
    borderRadius: '50%',
    cursor: 'pointer',
    transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'rotate(0deg)',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& i': {
      color: theme.palette.primary.main,
      position: 'relative',
      fontSize: 48,
    },
    '&:focus': {
      outline: 'none'
    },
    '&:hover': {
      opacity: 0.6
    }
  },
  prev: {
    left: -56,
    '& i': {
      right: 2,
      marginTop: 3
    }
  },
  next: {
    right: -56,
    '& i': {
      left: 2,
      marginTop: 3
    }
  },
}));

export default testiStyles;
