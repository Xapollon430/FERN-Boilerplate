import { makeStyles } from '@material-ui/core/styles';

const testiStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    zIndex: 10
  },
  locationWrap: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  locationItem: {
    position: 'absolute'
  },
  text: {
    paddingTop: theme.spacing(5),
    '& h3': {
      fontWeight: theme.typography.fontWeightBold,
      '& span': {
        width: 20,
        height: 20,
        display: 'inline-block',
        marginRight: theme.spacing(),
        borderRadius: 3
      }
    },
    '& p': {
      marginBottom: theme.spacing(3),
      fontSize: 18,
      lineHeight: '32px',
      [theme.breakpoints.down('xs')]: {
        marginBottom: theme.spacing(6)
      }
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  titlePrimary: {
    color: theme.palette.primary.main,
    '& span': {
      background: `linear-gradient(${theme.palette.primary.light}, ${theme.palette.primary.main})`
    }
  },
  titleSecondary: {
    color: theme.palette.secondary.main,
    '& span': {
      background: `linear-gradient(${theme.palette.secondary.light}, ${theme.palette.secondary.main})`
    }
  },
  mapWrap: {
    [theme.breakpoints.down('xs')]: {
      overflow: 'auto'
    }
  },
  worldMap: {
    background: 'url(/images/cloud/worldMap.svg) no-repeat center center',
    backgroundSize: '100%',
    position: 'relative',
    margin: '0 auto',
    height: 360,
    width: 580,
  },
  location: {
    position: 'absolute'
  },
  primaryColor: {},
  secondaryColor: {},
  dot: {
    borderRadius: 3,
    display: 'block',
    width: 12,
    height: 12,
    transition: 'all 0.3s ease-out',
    '&$primaryColor': {
      background: `linear-gradient(${theme.palette.primary.light}, ${theme.palette.primary.main})`,
    },
    '&$secondaryColor': {
      background: `linear-gradient(${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
    }
  }
}));

export default testiStyles;
