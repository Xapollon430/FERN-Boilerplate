import { makeStyles } from '@material-ui/core/styles';
import buildingDecoLight from '~/public/images/cloud/building_deco_light.png';
import buildingDecoDark from '~/public/images/cloud/building_deco_dark.png';

const cloud = {
  width: '100%',
  height: 240,
  position: 'absolute',
  top: -240,
  transform: 'scale(1.1)',
  left: 0,
};

const nav = {
  position: 'absolute',
  zIndex: 5,
  top: 200,
  transform: 'translateY(-50%)',
  width: 32,
  height: 32,
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  textAlign: 'center'
};

const promotionStyles = makeStyles(theme => ({
  cloudTop: {
    ...cloud,
    '& svg': {
      height: '100%',
      width: '100%',
      fill: theme.palette.type === 'dark' ? theme.palette.common.black : theme.palette.common.white,
    }
  },
  cloudTopCover: {
    ...cloud,
    '& svg': {
      height: '100%',
      width: '100%',
      fill: theme.palette.type === 'dark' ? '#303030' : '#FFFFFF'
    }
  },
  root: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      height: 300,
      padding: theme.spacing(3, 0),
    },
    '&:before': {
      background: theme.palette.type === 'dark' ? theme.palette.common.black : theme.palette.common.white,
    },
    '&:after': {
      background: `url(${theme.palette.type === 'dark' ? buildingDecoDark : buildingDecoLight}) repeat-x bottom center`,
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: -20,
      width: '100%',
      height: 150,
    }
  },
  sliderWrap: {
    position: 'relative',
    zIndex: 1,
    '& > div': {
      overflow: 'hidden',
      '& > a': {
        zIndex: 11,
        background: 'none !important',
        position: 'absolute',
        transition: 'all 0.3s ease',
        top: '40%',
        '& svg': {
          width: 40,
          height: 40,
          position: 'absolute',
          left: 0,
          top: 0,
          fill: theme.palette.text.secondary
        }
      }
    },
    '& ul[class*="slick-dots"]': {
      [theme.breakpoints.down('sm')]: {
        bottom: 0
      }
    }
  },
  text: {
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(3)
    }
  },
  time: {},
  image: {},
  item: {
    zIndex: 10,
    direction: 'ltr',
    [theme.breakpoints.up('sm')]: {
      height: 300,
      marginTop: theme.spacing(6)
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(8)
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      paddingBottom: theme.spacing(5)
    },
    '& $image': {
      background: theme.palette.secondary.light,
      border: `4px solid ${theme.palette.primary.light}`,
      borderRadius: '50%',
      width: 190,
      height: 190,
      lineHeight: '200px',
      textAlign: 'center',
      position: 'relative',
      marginLeft: 'auto',
      marginRight: 'auto',
      [theme.breakpoints.up('md')]: {
        marginTop: 20,
        marginBottom: 20
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: theme.spacing(3)
      },
      '&:before': {
        content: '""',
        background: theme.palette.secondary.light,
        border: `4px solid ${theme.palette.primary.light}`,
        borderRadius: '50%',
        width: 240,
        height: 240,
        lineHeight: '300px',
        textAlign: 'center',
        opacity: 0.5,
        position: 'absolute',
        top: -30,
        left: -30
      },
      '&:after': {
        [theme.breakpoints.up('md')]: {
          content: '""',
          background: theme.palette.secondary.light,
          border: `4px solid ${theme.palette.primary.light}`,
          borderRadius: '50%',
          width: 320,
          height: 320,
          lineHeight: '380px',
          textAlign: 'center',
          opacity: 0.2,
          position: 'absolute',
          top: -70,
          left: -70
        }
      },
      '& img': {
        verticalAlign: 'middle',
        maxWidth: 200,
        maxHeight: 200
      }
    },
    '& $text': {
      padding: theme.spacing(2, 3),
      overflow: 'hidden',
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(1)
      }
    },
    '& h1': {
      marginBottom: theme.spacing(3),
      display: 'flex',
      '& button': {
        display: 'block',
        padding: 0,
        textTransform: 'none',
        color: theme.palette.secondary.main,
        fontSize: 28,
        lineHeight: '36px',
        fontWeight: theme.typography.fontWeightBold,
        textAlign: 'left',
        whiteSpace: 'nowrap',
        width: '100%',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        [theme.breakpoints.down('xs')]: {
          textAlign: 'center',
          fontSize: 20,
          lineHeight: '28px',
          width: '100%'
        }
      },
      [theme.breakpoints.down('xs')]: {
        whiteSpace: 'normal',
        lineHeight: '32px'
      },
    },
    '& p': {
      marginBottom: theme.spacing(2)
    },
    '& $time': {
      '& span': {
        color: theme.palette.text.secondary
      }
    },
    '&:before': {
      display: 'none'
    }
  },
  icon: {
    fontSize: 140,
    position: 'relative',
    zIndex: 1,
    '&:before': {
      color: theme.palette.primary.main,
      background: `linear-gradient(${theme.palette.primary.light}, ${theme.palette.primary.main})`,
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 120
    }
  },
  nav: {
    maxWidth: 1200,
    margin: '0 auto',
    position: 'relative',
    '& > *': {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
      '& i': {
        fontSize: 40
      }
    }
  },
  next: {
    ...nav,
    color: theme.palette.text.secondary,
    right: 10,
    '&:hover': {
      [theme.breakpoints.up('lg')]: {
        right: -10
      }
    }
  },
  prev: {
    ...nav,
    color: theme.palette.text.secondary,
    left: 10,
    '&:hover': {
      [theme.breakpoints.up('lg')]: {
        left: -10
      }
    }
  }
}));

export default promotionStyles;
