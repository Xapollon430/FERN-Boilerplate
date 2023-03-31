import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footerDeco: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
    left: 0,
    background: 'url("/images/marketing/footer-deco.svg") repeat-x bottom',
    opacity: theme.palette.type === 'dark' ? 0.2 : 1
  }
}));

export default useStyles;
