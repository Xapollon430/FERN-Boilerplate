import { makeStyles } from '@material-ui/core/styles';

const featureStyles = makeStyles(theme => ({
  moreFeature: {
    position: 'relative',
    zIndex: 3,
    '& figure': {
      margin: 0
    },
  },
  last: {},
  item: {
    position: 'relative',
    padding: theme.spacing(0, 1, 10),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 3, 10),
    },
    '& p': {
      marginBottom: theme.spacing(3),
    },
    '&$last': {
      paddingBottom: 0
    }
  },
  text: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      margin: 0
    },
    '& > span': {
      position: 'absolute',
      color: theme.palette.text.disabled,
      top: -10,
      left: 7,
      fontSize: 38,
      zIndex: 2
    }
  },
  textCenter: {
    '& span': {
      left: 'calc(50% - 7px)'
    }
  },
  horizontal: {},
  illustration: {
    '& img': {
      display: 'block',
      margin: '0 auto',
      maxHeight: 240,
      [theme.breakpoints.up('lg')]: {
        maxHeight: 340
      },
      [theme.breakpoints.only('xs')]: {
        width: '100%'
      }
    },
    '&$horizontal': {
      '& img': {
        maxHeight: 335,
      }
    }
  },
}));

export default featureStyles;
