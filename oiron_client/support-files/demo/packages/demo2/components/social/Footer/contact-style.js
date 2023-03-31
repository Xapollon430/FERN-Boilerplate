import { makeStyles } from '@material-ui/core/styles';
const decoFooter = '/images/social/footer-deco.svg';

const contactStyles = makeStyles(theme => ({
  hasBg: {},
  footer: {
    textAlign: 'center',
    paddingBottom: theme.spacing(20),
    position: 'relative',
    '&:after': {
      content: '""',
      width: '100%',
      height: 240,
      background: `url(${decoFooter}) transparent no-repeat`,
      backgroundPosition: 'bottom center',
      backgroundSize: '100%',
      position: 'absolute',
      bottom: 0,
      left: 0,
      opacity: '0.15'
    },
    '&$hasBg': {
      paddingTop: 600,
      marginTop: -600,
    },
  },
  root: {
    position: 'relative',
    zIndex: 11
  },
  logo: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(5),
    fontSize: 18,
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(5)
    },
    '& img': {
      width: 54,
      display: 'block',
      margin: '0 auto 8px',
    },
    '& h4': {
      textTransform: 'uppercase',
    }
  },
  margin: {
    margin: theme.spacing(2)
  },
  socmed: {
    margin: theme.spacing(3, 0),
    '& button': {
      margin: theme.spacing(),
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      width: 36,
      height: 36,
      '& i': {
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
      }
    },
    '& i': {
      fontSize: 24
    }
  },
  contact: {
    color: theme.palette.text.secondary,
  },
  divider: {
    margin: theme.spacing(1.5),
    border: 'none',
    background: 'none'
  },
  formWrap: {
    position: 'relative'
  },
  formBox: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(7),
    },
  },
  title: {
    textAlign: 'left',
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    [theme.breakpoints.down('xs')]: {
      top: theme.spacing(3),
      position: 'relative'
    }
  },
  input: {
    width: '100%',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(3)
    }
  },
  form: {
    textAlign: 'left',
    position: 'relative',
  },
  btnArea: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(0, 0, 3),
    '& span': {
      '& a': {
        textDecoration: 'none !important',
        color: theme.palette.secondary.main
      }
    }
  },
}));

export default contactStyles;
