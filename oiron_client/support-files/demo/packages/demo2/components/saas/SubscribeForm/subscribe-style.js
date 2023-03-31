import { makeStyles } from '@material-ui/core/styles';
import { darken, lighten } from '@material-ui/core/styles/colorManipulator';
const waveDecoLight = '/images/saas/deco-wave-light.png';
const waveDecoDark = '/images/saas/deco-wave-dark.png';

const subscribeStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    textAlign: 'center',
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(10),
    background: theme.palette.type === 'dark' ? darken(theme.palette.primary.dark, 0.6) : lighten(theme.palette.primary.light, 0.8),
    '& > div': {
      position: 'relative'
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 140,
      left: 0,
      transform: 'scaleY(-1)',
      transformOrigin: 'top center',
      backgroundRepeat: 'repeat-x',
      backgroundPosition: '-210px 0px',
      backgroundImage: theme.palette.type === 'dark' ? `url(${waveDecoDark})` : `url(${waveDecoLight})`
    }
  },
  form: {
    position: 'relative',
    marginTop: theme.spacing(2)
  },
  field: {
    '& input': {
      paddingRight: 150,
      paddingLeft: theme.spacing(3),
      width: '100%',
      borderRadius: 56,
      height: 40,
      background: theme.palette.background.paper,
      border: `1px solid ${theme.palette.primary.main}`,
    },
    '& > div': {
      marginTop: 0,
      '&:after, &:before': {
        display: 'none'
      }
    }
  },
  button: {
    position: 'absolute',
    right: theme.spacing(),
    top: theme.spacing(),
    width: 140,
  }
}));

export default subscribeStyles;
