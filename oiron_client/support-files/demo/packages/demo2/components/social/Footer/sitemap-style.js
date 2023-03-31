import { makeStyles } from '@material-ui/core/styles';
const decoFooter = '/images/social/footer-deco.svg';

const footerStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    zIndex: 10,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  hasBg: {},
  footer: {
    position: 'relative',
    zIndex: 11,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(15),
    },
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
    '& ul': {
      margin: 0,
      padding: 0,
    },
    '& li': {
      listStyle: 'none',
      marginBottom: theme.spacing(),
      '& a': {
        fontSize: 16,
        textDecoration: 'none !important',
        '&:hover': {
          color: theme.palette.primary.main
        }
      }
    },
    '& p': {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center'
      }
    }
  },
  title: {
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    fontSize: 18,
    textTransform: 'capitalize',
    marginBottom: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold,
  },
  logo: {
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    '& img': {
      width: 48,
      marginRight: theme.spacing(),
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      padding: theme.spacing(0, 3)
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold
    }
  },
  footerDesc: {
    display: 'block',
    fontSize: 14,
    marginBottom: theme.spacing(2)
  },
  socmed: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    '& button': {
      margin: theme.spacing(),
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      background: theme.palette.type === 'dark' ? theme.palette.background.paper : theme.palette.primary.light,
      width: 36,
      height: 36,
      lineHeight: '36px',
      '& i': {
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      }
    },
    '& svg': {
      width: 24,
      height: 24
    }
  },
  icon: {
    '& + div': {
      background: 'none !important',
      padding: theme.spacing(1.5, 1.5, 1.5, 4),
      width: 'calc(100% - 32px)',
    }
  },
  selectLang: {
    margin: '0 auto',
    width: 200,
    display: 'inherit',
    marginTop: theme.spacing(2),
    background: theme.palette.background.paper,
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    '& $icon': {
      top: 21,
      position: 'relative',
    },
    '& fieldset': {
      boxShadow: '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
      border: `1px solid ${theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main} !important`,
      '& legend': {
        top: 6,
        position: 'relative',
        borderTop: `1px solid ${theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main}`
      }
    }
  },
  siteMapItem: {
    [theme.breakpoints.down('md')]: {
      paddingBottom: '0 !important',
      paddingTop: '0 !important',
    }
  },
  accordionRoot: {
    background: 'none',
    boxShadow: 'none',
    maxWidth: 480,
    margin: '0 auto',
    marginTop: theme.spacing(2),
  },
  accordionContent: {
    margin: 0,
    '& strong': {
      color: theme.palette.primary.main
    }
  },
  accordionIcon: {
    padding: 0
  }
}));

export default footerStyles;
