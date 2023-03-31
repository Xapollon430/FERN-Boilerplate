import { makeStyles } from '@material-ui/core/styles';

const counterStyles = makeStyles(theme => ({
  counterWrap: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(20)
    },
  },
  text: {},
  counterItem: {
    '& p': {
      display: 'flex',
      color: theme.palette.text.secondary,
      alignItems: 'center',
      justifyContent: 'center',
      textTransform: 'capitalize',
      '& i': {
        fontSize: 40,
        marginRight: theme.spacing(2)
      }
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    alignItems: 'center',
    justifyContent: 'center',
    '& $text': {
      textAlign: 'center',
      '& h3': {
        position: 'relative',
        color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
        paddingBottom: theme.spacing(2),
      }
    }
  },
  counterInner: {
    '& > div': {
      position: 'relative',
      '&:after': {
        content: '""',
        borderLeft: `2px solid ${theme.palette.primary.dark}`,
        opacity: 0.2,
        height: 90,
        position: 'absolute',
        right: 0,
        top: 30,
        [theme.breakpoints.down('xs')]: {
          display: 'none'
        },
      }
    },
    '& > div:last-child': {
      '&:after': {
        display: 'none'
      }
    }
  }
}));

export default counterStyles;
