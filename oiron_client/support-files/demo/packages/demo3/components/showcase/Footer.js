import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import logo from '~/public/images/showcase/logo.png';

const useStyles = makeStyles(theme => ({
  footer: {
    textAlign: 'center',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      marginTop: -90,
    },
    '&:before': {
      content: '""',
      width: '100%',
      height: 600,
      position: 'absolute',
      top: 0,
      left: 0,
      background: 'url(/images/showcase/deco-footer-top.jpg) no-repeat top center',
      [theme.breakpoints.up('md')]: {
        backgroundSize: '100% auto'
      }
    },
    '&:after': {
      content: '""',
      width: '100%',
      height: 500,
      position: 'absolute',
      bottom: 0,
      left: 0,
      background: 'url(/images/showcase/deco-footer-bottom.jpg) no-repeat bottom center',
      [theme.breakpoints.up('md')]: {
        backgroundSize: '100% auto'
      }
    }
  },
  title: {
    position: 'relative',
    zIndex: 1,
    margin: theme.spacing(5, 0),
    '& h3': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '5rem',
      background: '-webkit-linear-gradient(90deg,#9851DF,#3333C8 47%,#231F94 98%)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      '&:first-letter': {
        fontSize: '7rem'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '3rem',
        '&:first-letter': {
          fontSize: '4rem'
        },
      }
    },
  },
  starArea: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(5, 0),
    '& svg': {
      width: 30,
      height: 30,
      fill: '#ffe23f',
      margin: theme.spacing()
    }
  },
  inner: {
    backgroundSize: '100% auto',
    padding: theme.spacing(2, 0, 20),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(20, 5, 20),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(5, 5, 20),
    },
  }
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <div>
          <div className={classes.title}>
            <img src={logo} alt="logo" />
            <Typography variant="h3" gutterBottom>OIRON</Typography>
          </div>
          <Typography variant="h6" gutterBottom>
            Thank you for your time
            <br />
            and if you like please rate it!
          </Typography>
          <div className={classes.starArea}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
        <Typography>&copy;Oiron Theme 2021</Typography>
      </div>
    </div>
  );
}


export default Footer;
