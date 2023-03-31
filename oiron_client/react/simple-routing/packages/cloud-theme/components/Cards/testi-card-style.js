import { makeStyles } from '@material-ui/core/styles';

const testiStyles = makeStyles(theme => ({
  icon: {},
  testimonial: {
    height: 260,
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(),
    border: `3px solid ${theme.palette.divider}`,
    padding: theme.spacing(4, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8),
    },
    position: 'relative',
    '& $icon': {
      borderRadius: '50%',
      background: theme.palette.primary.main,
      width: 100,
      height: 100,
      top: -56,
      left: 32,
      position: 'absolute',
      textAlign: 'center',
      lineHeight: '100px',
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      },
      '& i': {
        fontSize: 60,
        verticalAlign: 'middle',
        '&:before': {
          color: theme.palette.common.white,
          background: `linear-gradient(${theme.palette.primary.light}, ${theme.palette.primary.main})`,
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent'
        }
      }
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  text: {
    marginBottom: theme.spacing(4),
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
    height: theme.spacing(9),
  },
  caption: {
    color: theme.palette.text.secondary
  }
}));

export default testiStyles;
