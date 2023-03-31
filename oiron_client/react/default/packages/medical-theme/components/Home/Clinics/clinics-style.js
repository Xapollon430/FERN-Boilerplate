import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    zIndex: 10,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
}));

export default useStyles;
