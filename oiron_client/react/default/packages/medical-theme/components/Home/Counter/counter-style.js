import { makeStyles } from '@material-ui/core/styles';

const counterStyles = makeStyles(theme => ({
  counterWrap: {
    margin: theme.spacing(3, 0)
  },
  text: {},
  icon: {
    fontSize: 80,
    lineHeight: '80px',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(1),
      width: 80,
      height: 80
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(1),
    }
  },
  counterItem: {
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      textAlign: 'left',
      marginBottom: theme.spacing(2)
    },
    '& $text': {
      '& h4': {
        color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
        fontWeight: theme.typography.fontWeightBold,
        fontSize: 36,
        lineHeight: '36px'
      },
      '& h6': {
        textTransform: 'capitalize'
      }
    }
  }
}));

export default counterStyles;
