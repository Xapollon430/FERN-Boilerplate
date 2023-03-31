import { makeStyles } from '@material-ui/core/styles';
import { lighten, darken } from '@material-ui/core/styles/colorManipulator';
import buildingDeco from '~/public/images/cloud/building_deco_footer.png';

const footerStyles = makeStyles(theme => ({
  extend: {},
  footerCounter: {
    position: 'relative',
    background: theme.palette.type === 'dark' ? darken(theme.palette.primary.dark, 0.4) : lighten(theme.palette.primary.light, 0.8),
    '&$extend': {
      marginTop: theme.spacing(20),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(10),
      [theme.breakpoints.up('sm')]: {
        paddingBottom: theme.spacing(8)
      },
      '&:after': {
        background: `url(${buildingDeco}) repeat-x bottom center`,
        backgroundSize: '50%',
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: 150,
        opacity: theme.palette.type === 'dark' ? 0.3 : 1
      }
    }
  },
  round: {
    content: '""',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? darken(theme.palette.primary.dark, 0.4) : lighten(theme.palette.primary.light, 0.8),
    position: 'absolute',
    left: '-10%',
    borderRadius: '50%',
    top: -80,
    width: '120%',
    height: 350,
    [theme.breakpoints.down('xs')]: {
      height: 120
    }
  },
  action: {
    textAlign: 'center',
    padding: theme.spacing(0, 2),
    position: 'relative',
    '& h4': {
      fontWeight: theme.typography.fontWeightMedium,
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        fontSize: 28,
        lineHeight: '44px'
      }
    }
  },
  buildingDeco: {
    position: 'absolute',
    bottom: -40,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: 10,
    filter: theme.palette.type === 'dark' ? 'brightness(0.5)' : 'brightness(1)',
    '& img': {
      height: 120
    }
  }
}));

export default footerStyles;
