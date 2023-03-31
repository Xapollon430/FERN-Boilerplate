import React from 'react';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Parallax } from 'react-parallax';
import { makeStyles } from '@material-ui/core/styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import imgAPI from '~/public/images/imgAPI';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} />; // eslint-disable-line
});

const useStyles = makeStyles(theme => ({
  bannerWrap: {
    top: 0,
    left: 0,
    width: '100%',
    color: '#FFF',
    [theme.breakpoints.up('lg')]: {
      height: 1200,
      position: 'absolute',
    },
    [theme.breakpoints.down('md')]: {
      background: `url(${imgAPI.showcase[0]}) no-repeat top left`,
      backgroundSize: 1280,
      backgroundPosition: '30% -200px',
      paddingBottom: 60
    },
    [theme.breakpoints.down('xs')]: {
      backgroundSize: 960,
      backgroundPosition: '30% top',
      paddingBottom: 120
    }
  },
  parallax: {
    top: 700,
    left: 0,
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '& > div': {
      height: '100%'
    },
    '& img': {
      marginTop: -150
    }
  },
  properties: {
    top: 0,
    zIndex: 10,
    width: '100%',
    textAlign: 'center',
    padding: theme.spacing(15, 8),
    [theme.breakpoints.up('lg')]: {
      position: 'absolute',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      textAlign: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(10, 2),
      '& h4': {
        fontSize: 22,
        lineHeight: '34px'
      }
    }
  },
  title: {
    alignItems: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    '& h1': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '6rem',
      '&:first-letter': {
        fontSize: '8rem'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '3rem',
        '&:first-letter': {
          fontSize: '4rem'
        },
      }
    },
    '& img': {
      width: 60,
      top: -28,
      position: 'relative'
    },
  },
  tech: {
    height: 80,
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: 'auto'
    }
  },
  white: {
    color: '#FFFFFF',
    border: '1px solid #FFFFFF',
    boxShadow: theme.shadows[2]
  },
  primary: {
    background: '#ff1d8d',
    color: '#ffffff',
    boxShadow: theme.shadows[2],
    '&:hover': {
      background: lighten('#ff1d8d', 0.2),
    }
  },
  btnArea: {
    textAlign: 'center',
    marginTop: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(5),
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    '& button, & a': {
      fontSize: 20,
      width: 250,
      padding: theme.spacing(1, 2),
      borderRadius: 50,
      marginBottom: theme.spacing(4),
      margin: theme.spacing(0, 1),
    }
  }
}));

function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.bannerWrap}>
      <div className={classes.parallax}>
        <Parallax
          bgImage={imgAPI.showcase[0]}
          bgImageAlt="banner"
          strength={300}
        >
          <div className={classes.parallaxProps} />
        </Parallax>
      </div>
      <div className={classes.properties}>
        <div className={classes.title}>
          <Typography variant="h1">OIRON</Typography>
        </div>
        <Typography variant="h4">React.js Landing Page Collection</Typography>
        <div className={classes.btnArea}>
          <Button
            variant="contained"
            size="large"
            className={classes.primary}
            color="primary"
            href="https://themeforest.net/user/ilhammeidi/portfolio"
          >
            Buy Now
          </Button>
          <Button
            variant="outlined"
            component={LinkBtn}
            offset={100}
            href="#explore"
            className={classes.white}
            size="large"
            color="default"
          >
            Explore Demo
          </Button>
        </div>
        <img src="/images/showcase/tech.png" alt="text" className={classes.tech} />
      </div>
    </div>
  );
}

export default Banner;
