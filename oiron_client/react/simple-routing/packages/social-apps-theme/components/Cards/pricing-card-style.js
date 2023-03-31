import { makeStyles, alpha } from '@material-ui/core/styles';

const cardsStyles = makeStyles(theme => ({
  pricing: {
    position: 'relative',
    borderRadius: 40,
    overflow: 'hidden',
    textAlign: 'center',
    zIndex: 2,
    border: '1px solid transparent',
    marginBottom: theme.spacing(3),
    '& ul': {
      padding: theme.spacing(0, 2),
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      '& li': {
        listStyle: 'none',
        fontSize: 16,
        textAlign: 'center',
        padding: theme.spacing(),
        borderBottom: `2px dashed ${theme.palette.divider}`,
        '&:last-child': {
          borderBottom: 'none'
        }
      }
    },
    '&:hover': {
      boxShadow: `0 0 20px 5px ${theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.primary.light}`,
      border: `1px solid ${theme.palette.primary.main}`
    }
  },
  title: {
    padding: theme.spacing(5, 0, 2),
    textTransform: 'uppercase',
    fontSize: 24,
    position: 'relative',
    color: theme.palette.primary.main,
    '& p': {
      fontWeight: theme.typography.fontWeightMedium,
    },
    '& h4': {
      color: theme.palette.text.secondary,
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'none',
      marginTop: theme.spacing(2)
    }
  },
  button: {},
  desc: {},
  btnArea: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
    background: alpha(theme.palette.primary.main, 0.1),
    '& $button': {
      marginTop: theme.spacing(2)
    },
    '& $desc': {
      fontSize: 14,
    }
  },
  basic: {
    '& $title': {
      color: theme.palette.secondary.main
    },
    '& $btnArea': {
      background: alpha(theme.palette.secondary.main, 0.3),
    },
    '&:hover': {
      borderColor: theme.palette.secondary.main
    }
  },
  value: {
    zIndex: 20,
    border: `1px solid ${theme.palette.primary.main}`,
    '& $title': {
      paddingBottom: 0,
      marginBottom: theme.spacing(8),
      color: theme.palette.common.white,
      height: 90,
      paddingTop: 40,
      '& h4': {
        position: 'relative',
        color: theme.palette.common.white,
      },
      '& p': {
        position: 'relative',
      },
      '&:before': {
        content: '""',
        width: '160%',
        position: 'absolute',
        borderRadius: '50%',
        bottom: -60,
        height: 400,
        left: '-30%',
        background: `linear-gradient(120deg, ${theme.palette.primary.main} 40%, ${theme.palette.secondary.main} 100%)`
      }
    },
    '& ul': {
      paddingTop: theme.spacing(2)
    },
    '&:hover': {
      boxShadow: `0 0 20px 5px ${theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.primary.light}`,
    }
  }
}));

export default cardsStyles;
