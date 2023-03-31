import { makeStyles } from '@material-ui/core/styles';

const arrow = {
  position: 'absolute',
  zIndex: 5,
  top: 280,
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  textAlign: 'center',
  height: 60
};

const benefitStyles = makeStyles(theme => ({
  root: {
    color: '#FFF',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.dark
  },
  illustrationBg: {
    position: 'absolute',
    left: 0,
    top: theme.spacing(5),
    width: '100%',
    height: '100%',
    '& img': {
      width: '100%'
    }
  },
  wrapper: {
    position: 'relative',
    paddingTop: theme.spacing(10),
    margin: '0 auto'
  },
  carousel: {
    marginTop: theme.spacing(5),
    marginBottom: -200,
    '& figure': {
      borderRadius: 10,
      overflow: 'hidden',
      margin: 0,
      '& img': {
        display: 'block',
        width: '100%',
      }
    },
    '& ul[class*="slick-dots"]': {
      position: 'relative',
      zIndex: 1,
      '& li': {
        width: '25px !important',
        height: '25px !important',
        '& button:before': {
          borderRadius: 4,
          width: '12px !important',
          height: '12px !important',
          background: theme.palette.secondary.light,
          opacity: 1,
          border: 'none'
        },
        '&[class="slick-active"]': {
          left: theme.direction === 'rtl' ? 6 : 'auto',
          right: theme.direction === 'rtl' ? 'auto' : 6,
          width: '22px !important',
          height: '22px !important',
          borderRadius: 4,
          border: `4px solid ${theme.palette.secondary.light}`,
          background: theme.palette.primary.main,
          '& button:before': {
            opacity: 0,
          }
        }
      }
    }
  },
  nav: {
    direction: 'ltr',
    position: 'relative',
    maxWidth: 1200,
    margin: '0 auto',
    top: '50%',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& svg': {
      color: '#FFF',
      width: 60,
      height: 60,
    }
  },
  next: {
    ...arrow,
    right: -50,
    transform: theme.direction === 'rtl' ? 'translateY(-50%) scaleX(-1)' : 'translateY(-50%) scaleX(1)',
    '&:hover': {
      right: -55
    }
  },
  prev: {
    ...arrow,
    transform: theme.direction === 'rtl' ? 'translateY(-50%) scaleX(1)' : 'translateY(-50%) scaleX(-1)',
    left: -55,
    '&:hover': {
      left: -55
    }
  },
  slide: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2)
    }
  },
  border: {
    boxShadow: theme.shadows[8],
    borderRadius: 10,
    padding: theme.spacing(1),
    background: `linear-gradient(180deg, ${theme.palette.primary.light} 20%, ${theme.palette.primary.main} 70%), linear-gradient(180deg, ${theme.palette.primary.main} 20%, ${theme.palette.primary.dark} 70%)`
  },
  desc: {
    padding: theme.spacing(0, 0, 8, 0),
    [theme.breakpoints.down('xs')]: {
      '& button': {
        width: '100%'
      }
    }
  },
  img: {
    margin: theme.spacing(3, 0, 0, 0),
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      textAlign: 'right',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      height: '100%'
    },
    '& img': {
      maxWidth: '100%',
      display: 'block',
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    }
  }
}));

export default benefitStyles;
