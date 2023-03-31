import { makeStyles } from '@material-ui/core/styles';
import greenBuble from '~/public/images/medical/green_buble.png';
import blueBuble from '~/public/images/medical/blue_buble.png';
import redBuble from '~/public/images/medical/red_buble.png';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(5),
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    '& h4': {
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(-2),
        marginBottom: theme.spacing(3)
      }
    }
  },
  desc: {
    lineHeight: '32px',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(3),
    }
  },
  illustrationWrap: {
    position: 'relative',
    marginTop: -360,
    right: 0,
    height: 300,
    transformOrigin: 'top',
    '& span': {
      backgroundSize: '100%',
      display: 'block',
      position: 'relative'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  iconGreen: {
    top: -179,
    left: 30,
    width: 320,
    height: 600,
    background: `url(${greenBuble}) no-repeat`,
  },
  iconRed: {
    width: 560,
    height: 560,
    left: -50,
    top: -620,
    background: `url(${redBuble}) no-repeat`,
  },
  iconBlue: {
    width: 560,
    height: 560,
    left: 0,
    top: -1170,
    background: `url(${blueBuble}) no-repeat`,
  },
  runningTag: {
    position: 'relative',
    height: 140,
    overflow: 'hidden',
    [theme.breakpoints.between('sm', 'md')]: {
      marginBottom: theme.spacing(10)
    },
    '& div[class*="slick-active"]': {
      '& $tagItem': {
        background: theme.palette.primary.main,
        color: theme.palette.common.white,
        borderColor: theme.palette.primary.main,
      }
    },
    '& div[class*="slick-current"]': {
      '& $tagItem': {
        background: 'none !important',
        color: `${theme.palette.text.primary} !important`,
        borderColor: `${theme.palette.divider} !important`,
      }
    },
  },
  tagItem: {
    display: 'inline-block',
    borderRadius: 40,
    textTransform: 'capitalize',
    transition: 'all 0.3s ease-in',
    border: `1px solid ${theme.palette.divider}`,
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1.5),
    padding: theme.spacing(1, 2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0.5, 2),
    },
  },
  tagGroup: {
    display: 'block',
    direction: 'ltr',
    '&:focus': {
      outline: 'none'
    }
  },
  circleWave: {
    width: 360,
    height: 360,
    margin: '0 auto',
    padding: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: `1px solid ${theme.palette.primary.main}`,
    position: 'relative',
    '&:before': {
      content: '""',
      width: 450,
      height: 450,
      borderRadius: '50%',
      position: 'absolute',
      top: -45,
      left: -45,
      border: `1px solid ${theme.palette.primary.main}`
    }
  },
  ball: {
    borderRadius: '50%',
    width: 256,
    height: 256,
    position: 'relative',
    backgroundImage: theme.palette.type === 'dark' ? `linear-gradient(95deg,  ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 110%)` : `linear-gradient(95deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 110%)`,
    '&:before': {
      content: '""',
      background: theme.palette.type === 'dark' ? '#000' : '#FFF',
      opacity: 0.7,
      borderRadius: '50%',
      position: 'absolute',
      left: 0,
      width: 256,
      height: 256,
      top: 0
    },
    '& img': {
      width: 416,
      position: 'relative',
      top: -40,
      left: -40,
      transform: theme.direction === 'rtl' ? 'scaleX(-1)' : 'scaleX(1)'
    }
  }
}));

export default useStyles;
