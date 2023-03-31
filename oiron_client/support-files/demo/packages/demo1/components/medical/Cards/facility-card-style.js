import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {},
  defaultCard: {
    direction: 'ltr',
    borderRadius: 12,
    position: 'relative',
    width: 260,
    height: 380,
    overflow: 'hidden',
    margin: theme.spacing(3, 2),
    '& figure': {
      borderRadius: '0 0 50px 0',
      overflow: 'hidden',
      height: 170,
      margin: 0,
      marginBottom: theme.spacing(3),
      '& img': {
        height: '100%',
        minWidth: '100%'
      }
    },
    '& $button': {
      padding: 0,
      width: '50%',
      marginLeft: '50%',
      height: 43,
      lineHeight: '44px',
      position: 'absolute',
      right: 0,
      bottom: 0,
      boxShadow: theme.shadows[10],
      borderRadius: '20px 0 0 0'
    },
    '& h6': {
      marginBottom: theme.spacing(2),
    },
    '& p': {
      height: 70,
      overflow: 'hidden',
      marginBottom: theme.spacing(3)
    }
  },
  text: {
    padding: theme.spacing(0, 2.5)
  },
}));

export default useStyles;
