import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    '& h4': {
      marginBottom: theme.spacing(2)
    }
  },
  img: {
    position: 'absolute',
    overflow: 'hidden',
    '& img': {
      display: 'block',
    }
  },
  puzzle: {
    position: 'relative',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      left: -120
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  big: {
    width: 290,
    top: 110,
    left: 120
  },
  medium: {
    borderRadius: '50%',
    width: 130,
    height: 130,
    left: 280,
    top: -40
  },
  small: {
    borderRadius: '50%',
    width: 98,
    height: 98,
    top: -20,
    left: 40
  },
  deco: {
    position: 'absolute',
  },
  deco1: {
    left: 0,
    top: -46,
    opacity: 0.3,
    borderBottom: '156px solid',
    borderRight: '160px solid transparent',
    borderLeftColor: theme.palette.type === 'dark' ? theme.palette.accent.dark : theme.palette.accent.light,
    borderBottomColor: theme.palette.type === 'dark' ? theme.palette.accent.dark : theme.palette.accent.light,
  },
  deco2: {
    height: 250,
    width: 300,
    left: 200,
    top: 30,
    borderTopRightRadius: 100,
    border: `10px solid ${theme.palette.primary.main}`
  },
  deco3: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    right: 160,
    top: 50,
    border: `8px solid ${theme.palette.secondary.main}`
  },
  deco4: {
    right: 130,
    top: 230,
    borderBottom: `130px solid ${theme.palette.accent.main}`,
    borderLeft: '130px solid transparent'
  },
  deco5: {
    width: 48,
    height: 48,
    left: 80,
    bottom: -30,
    opacity: 0.1,
    background: theme.palette.primary.main
  }
}));

export default useStyles;
