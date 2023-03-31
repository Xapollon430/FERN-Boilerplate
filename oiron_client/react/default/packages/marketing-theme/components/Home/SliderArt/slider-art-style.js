import { makeStyles } from '@material-ui/core/styles';

const sliderArtStyles = makeStyles(theme => ({
  figure: {
    width: 310,
    maxHeight: 400,
    marginTop: theme.spacing(5),
    display: 'flex',
    alignItems: 'flex-end',
    transition: 'all 0.3s ease',
    '& img': {
      position: 'relative',
      width: '100%',
      marginLeft: theme.spacing(3),
      marginTop: theme.spacing(10)
    }
  },
  fade: {
    opacity: '0.15',
  }
}));

export default sliderArtStyles;
