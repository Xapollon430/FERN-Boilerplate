import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  logo: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
    display: 'flex',
    '& img': {
      transition: 'transform ease-out 0.3s',
      width: 54,
      height: 54,
    }
  },
  landscape: {
    alignItems: 'center',
    position: 'relative',
    top: -2,
    '& img': {
      marginRight: theme.spacing(1)
    }
  },
  portrait: {
    display: 'block',
    margin: '0 auto 8px',
    '& img': {
      margin: '0 auto',
      display: 'block'
    }
  },
  small: {
    fontSize: 16,
    '& img': {
      maxWidth: 34,
      height: 34
    }
  },
  medium: {
    fontSize: 18,
    '& img': {
      maxWidth: 54,
      height: 54,
      [theme.breakpoints.down('xs')]: {
        maxWidth: 34,
        height: 34
      }
    }
  },
  large: {
    fontSize: 28,
    '& img': {
      maxWidth: 54,
      height: 54
    }
  }
}));

export default useStyles;
