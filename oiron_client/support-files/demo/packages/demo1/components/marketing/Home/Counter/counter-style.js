import { makeStyles } from '@material-ui/core/styles';

const counterStyles = makeStyles(theme => ({
  counterWrap: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3)
    }
  },
  text: {},
  primaryLine: {},
  secondaryLine: {},
  accentLine: {},
  counterItem: {
    '& p': {
      fontSize: 22,
      textTransform: 'uppercase',
      fontWeight: theme.typography.fontWeightRegular,
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
        fontWeight: theme.typography.fontWeightMedium,
        paddingBottom: theme.spacing(2),
        marginBottom: theme.spacing(4),
        '&:after': {
          content: '""',
          width: 50,
          height: 8,
          background: theme.palette.primary.main,
          position: 'absolute',
          bottom: theme.spacing(-2),
          left: 'calc(50% - 25px)'
        },
        '&$primaryLine': {
          '&:after': {
            background: theme.palette.primary.main
          }
        },
        '&$secondaryLine': {
          '&:after': {
            background: theme.palette.secondary.main
          }
        },
        '&$accentLine': {
          '&:after': {
            background: theme.palette.accent.main
          }
        }
      }
    }
  }
}));

export default counterStyles;
