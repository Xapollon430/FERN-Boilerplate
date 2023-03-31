import { makeStyles } from '@material-ui/core/styles';

const deco = '/images/retail/deco-cta.svg';

const useStyles = makeStyles(theme => ({
  action: {
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      paddingTop: 0,
      paddingBottom: theme.spacing(3)
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    '& h4': {
      marginBottom: theme.spacing(3)
    },
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      background: `url(${deco}) no-repeat transparent`,
      width: 555,
      height: 520,
      opacity: 0.15
    },
    '&:before': {
      top: -100,
      left: -270,
      transform: theme.direction === 'rtl' ? 'rotate(-90deg)' : 'rotate(90deg)',
      [theme.breakpoints.down('xs')]: {
        left: -480
      }
    },
    '&:after': {
      top: -300,
      right: -300,
      [theme.breakpoints.down('xs')]: {
        right: -480
      }
    }
  },
  btnArea: {
    justifyContent: 'center',
    position: 'relative',
    display: 'flex',
    margin: theme.spacing(3, 0, 10),
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-around'
    },
    '& a': {
      fontSize: 18,
      width: 250,
      height: '50px !important'
    }
  }
}));

export default useStyles;
