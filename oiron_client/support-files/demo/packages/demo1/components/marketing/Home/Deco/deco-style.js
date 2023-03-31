import { makeStyles } from '@material-ui/core/styles';

const decoStyles = makeStyles(theme => ({
  primaryLight: {
    fill: theme.palette.primary.light
  },
  primaryLightStroke: {
    stroke: theme.palette.primary.light
  },
  primaryMain: {
    fill: theme.palette.primary.main
  },
  primaryMainStroke: {
    stroke: theme.palette.primary.main
  },
  primaryDark: {
    fill: theme.palette.primary.dark
  },
  secondaryLight: {
    fill: theme.palette.secondary.light
  },
  secondaryLightStroke: {
    stroke: theme.palette.secondary.light
  },
  secondaryMain: {
    fill: theme.palette.secondary.main
  },
  secondaryMainStroke: {
    stroke: theme.palette.secondary.main
  },
  secondaryDark: {
    fill: theme.palette.secondary.dark
  },
  accentLight: {
    fill: theme.palette.accent.light
  },
  accentMain: {
    fill: theme.palette.accent.main
  },
  accentDark: {
    fill: theme.palette.accent.dark
  },
  decoMountain: {
    position: 'absolute',
    left: theme.direction === 'rtl' ? 'auto' : 80,
    right: theme.direction === 'rtl' ? 80 : 'auto',
    top: 50
  },
  decoBuilding: {
    position: 'absolute',
    left: theme.direction === 'rtl' ? 'auto' : 20,
    right: theme.direction === 'rtl' ? 20 : 'auto',
    top: -30
  },
  decoLight: {
    position: 'absolute',
    left: theme.direction === 'rtl' ? 'auto' : 60,
    right: theme.direction === 'rtl' ? 60 : 'auto',
    top: 70
  },
  decoRoom: {
    position: 'absolute',
    right: theme.direction === 'rtl' ? 'auto' : -20,
    left: theme.direction === 'rtl' ? -20 : 'auto',
    top: 150
  }
}));

export default decoStyles;
