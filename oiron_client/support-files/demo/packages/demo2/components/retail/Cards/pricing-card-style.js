import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(theme => ({
  primaryColor: {},
  secondaryColor: {},
  priceCard: {
    borderRadius: 36
  },
  cardHeader: {
    padding: 0,
    position: 'relative',
    zIndex: 1,
    textTransform: 'uppercase',
    '& span': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 16,
    },
    '& svg': {
      fill: theme.palette.common.white
    },
  },
  bordered: {
    border: `2px solid ${theme.palette.primary.main}`,
  },
  hasBg: {
    position: 'relative',
    color: theme.palette.common.white,
    '& $cardHeader span': {
      color: theme.palette.common.white,
    },
    '& $cardPricing h2, & $cardPricing h6': {
      color: theme.palette.common.white,
    },
    '&:before': {
      content: '""',
      width: '160%',
      position: 'absolute',
      borderRadius: '50%',
      bottom: 10,
      height: 320,
      left: '-30%',
      background: `linear-gradient(120deg, ${theme.palette.primary.main} 40%, ${theme.palette.secondary.main} 100%)`
    }
  },
  priceHeader: {
    padding: theme.spacing(5, 2),
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    position: 'relative',
    zIndex: 1,
    '& h6': {
      color: theme.palette.text.secondary
    }
  },
  cardContent: {
    padding: theme.spacing(1, 2),
    '& ul': {
      margin: 0,
      padding: 0
    },
    '& li': {
      listStyle: 'none',
      padding: theme.spacing(1, 0),
      color: theme.palette.text.secondary
    }
  },
  btnArea: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    position: 'relative',
    padding: theme.spacing(1.5, 3),
    display: 'block',
    '& button, a': {
      margin: '0 !important'
    },
    '& p': {
      position: 'relative',
      fontSize: 14
    },
    '&$primaryColor': {
      background: theme.palette.type === 'dark' ? fade(theme.palette.primary.dark, 0.3) : fade(theme.palette.primary.light, 0.3)
    },
    '&$secondaryColor': {
      background: theme.palette.type === 'dark' ? fade(theme.palette.secondary.dark, 0.3) : fade(theme.palette.secondary.light, 0.3)
    }
  }
}));

export default useStyles;
