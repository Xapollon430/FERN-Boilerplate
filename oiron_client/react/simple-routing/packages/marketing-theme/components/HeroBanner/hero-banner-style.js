import { makeStyles } from '@material-ui/core/styles';

const heroBanner = makeStyles(theme => ({
  container: {
    position: 'relative'
  },
  heroBannerWrap: {
    position: 'relative',
  },
  deco: {
    position: 'absolute',
    right: 0,
    top: 130,
    opacity: 0.3,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));

export default heroBanner;
