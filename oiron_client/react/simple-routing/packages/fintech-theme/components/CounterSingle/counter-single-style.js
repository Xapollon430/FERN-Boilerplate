import { makeStyles } from '@material-ui/core/styles';

const counterStyles = makeStyles(theme => ({
  counterWrap: {
    position: 'relative',
    margin: theme.spacing(10, 0),
    textAlign: 'center',
    '& h3': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        fontSize: 36
      }
    },
  },
}));

export default counterStyles;
