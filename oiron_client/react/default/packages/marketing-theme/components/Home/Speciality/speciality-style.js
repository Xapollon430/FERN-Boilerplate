import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    '& h4': {
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(-2),
        marginBottom: theme.spacing(3)
      }
    }
  },
  desc: {
    lineHeight: '32px',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3, 0),
    }
  },
  runningTag: {
    position: 'relative',
    height: 130,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(4)
    },
    '& div[class*="slick-active"]': {
      '& $tagItem': {
        '&:first-child': {
          color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
          borderColor: theme.palette.primary.main
        },
        '&:nth-child(2)': {
          color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
          borderColor: theme.palette.secondary.main
        },
        '&:last-child': {
          color: theme.palette.type === 'dark' ? theme.palette.accent.light : theme.palette.accent.dark,
          borderColor: theme.palette.accent.main
        }
      }
    },
    '& div[class*="slick-current"]': {
      '& $tagItem': {
        background: 'none !important',
        color: `${theme.palette.text.primary} !important`,
        borderColor: `${theme.palette.divider} !important`,
      }
    },
  },
  tagItem: {
    display: 'inline-block',
    textTransform: 'capitalize',
    transition: 'all 0.3s ease-in',
    border: `1px solid ${theme.palette.divider}`,
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1.5),
    padding: theme.spacing(0.5),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0.5, 4),
    },
  },
  tagGroup: {
    display: 'block',
    direction: 'ltr',
    '&:focus': {
      outline: 'none'
    }
  },
  illustrationWrap: {
    position: 'relative',
    '& figure': {
      maxWidth: 370,
      position: 'relative',
      '& img': {
        width: '100%',
      }
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
}));

export default useStyles;
