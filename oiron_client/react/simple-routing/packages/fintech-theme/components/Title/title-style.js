import { makeStyles } from '@material-ui/core/styles';

const titleStyles = makeStyles(theme => ({
  deco: {
    borderRadius: theme.pie[2],
    width: 21,
    height: 21,
    position: 'relative',
    background: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    '&:after': {
      content: '""',
      width: 30,
      height: 30,
      borderRadius: theme.pie[1],
      background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      position: 'absolute',
      bottom: 0,
      left: '100%'
    }
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
    '& $deco': {
      marginLeft: 'auto',
      marginRight: 30
    }
  },
  center: {
    textAlign: 'center',
    '& $deco': {
      marginLeft: 'calc(50% - 21px)',
    }
  },
  titleMain: {
    display: 'block',
    position: 'relative',
    marginBottom: theme.spacing(3),
    '& h4': {
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'capitalize',
      fontSize: 36,
      lineHeight: '56px',
      marginTop: theme.spacing(2),
      [theme.breakpoints.down('md')]: {
        fontSize: 32,
        lineHeight: '48px'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 28,
        lineHeight: '36px',
      }
    },
  },
}));

export default titleStyles;
