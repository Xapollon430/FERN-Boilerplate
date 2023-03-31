import { makeStyles } from '@material-ui/core/styles';

const paymentStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  decoBg: {
    position: 'absolute',
    left: 0,
    top: 275,
    maxWidth: 950,
    width: '100%',
    height: 642,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    '& svg': {
      width: '100%'
    }
  },
  primaryLight: {
    fill: theme.palette.primary.light
  },
  primaryMain: {
    fill: theme.palette.primary.main
  },
  primaryDark: {
    fill: theme.palette.primary.dark
  },
  secondaryMain: {
    fill: theme.palette.secondary.main
  },
  secondaryDark: {
    fill: theme.palette.secondary.dark
  },
  accentMain: {
    fill: theme.palette.accent.main
  },
  wrapper: {
    position: 'relative',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(10)
    }
  },
  carousel: {
    margin: `${theme.spacing(8)}px auto ${theme.spacing(-10)}px`,
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(10)
    },
    '& figure': {
      borderRadius: 10,
      margin: 0,
      overflow: 'hidden',
      '& img': {
        display: 'block',
        width: '100%',
      }
    },
    '& ul[class*="slick-dots"]': {
      position: 'relative',
      bottom: theme.spacing(3),
      '& li': {
        width: 15,
        height: 15,
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: 15,
        opacity: 0.7,
        transition: 'all 0.5s ease-out',
        margin: '0 4px',
        '&[class="slick-active"]': {
          background: theme.palette.primary.main,
          '& button:before': {
            opacity: 0,
          }
        },
        '& button:before': {
          opacity: 0,
        }
      }
    }
  },
  slider: {
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  slide: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2)
    }
  },
  paper: {
    boxShadow: theme.shade.light,
    borderRadius: theme.rounded.big,
    overflow: 'hidden',
    position: 'relative',
  },
  desc: {
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      '& button': {
        width: '100%'
      }
    }
  },
  img: {
    margin: theme.spacing(3, 0, 0, 0),
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      textAlign: 'right',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      height: '100%'
    },
    '& img': {
      maxWidth: '100%',
      display: 'block',
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    }
  }
}));

export default paymentStyles;
