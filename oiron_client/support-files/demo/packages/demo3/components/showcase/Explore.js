import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ReactWOW from 'react-wow';
import imgAPI from '~/public/images/imgAPI';
import Title from './Title';

const useStyles = makeStyles(theme => ({
  exploreWrap: {
    paddingBottom: theme.spacing(3),
    marginTop: -100,
    [theme.breakpoints.up('lg')]: {
      marginTop: 1100,
    },
  },
  explore: {
    position: 'relative',
    zIndex: 2,
    backgroundSize: '100% auto',
    [theme.breakpoints.up('lg')]: {
      marginTop: -80,
    },
    '& ul': {
      margin: 0,
      padding: 0,
      '& li': {
        listStyle: 'none',
        display: 'inline-block',
        textAlign: 'center',
        marginBottom: theme.spacing(12),
        width: '33.33%',
        height: 380,
        [theme.breakpoints.down('md')]: {
          width: '50%',
        },
        [theme.breakpoints.down('xs')]: {
          width: '100%',
          marginBottom: theme.spacing(3),
        },
        '&:last-child': {
          marginBottom: 0
        },
        '& a': {
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: 16,
          fontWeight: theme.typography.fontWeightMedium,
          color: theme.palette.text.primary,
          transition: 'all 0.3s ease',
          top: 0,
          position: 'relative',
          '& span': {
            color: '#ff0078'
          },
          '&:hover': {
            top: -5,
            '& figure': {
              boxShadow: 'rgba(34, 48, 102, 0.3) -3px 6px 21.1px -4px',
            }
          },
          '& figure': {
            margin: theme.spacing(0, 0, 3, 0),
            overflow: 'hidden',
            borderRadius: 6,
            border: '0px solid #6300cc',
            transition: 'all 0.3s ease',
            boxShadow: 'rgba(34, 48, 102, 0.1) -3px 6px 21.1px -4px',
            height: 380,
            maxWidth: 300,
            [theme.breakpoints.down('xs')]: {
              width: 240,
              height: 300
            }
          },
          '& img': {
            width: '100%'
          }
        }
      }
    }
  }
}));

function Explore() {
  const classes = useStyles();
  const opensans = 'http://oiron2.indisains.com';
  const roboto = 'http://oiron1.indisains.com';
  const montserrat = 'http://oiron.indisains.com';

  return (
    <div className={classes.exploreWrap}>
      <div className={classes.explore}>
        <Title subtitle="explore" title="11 Landing Pages Demo" align="center" />
        <Container maxWidth="lg">
          <ul>
            <li>
              <ReactWOW
                animation="fadeInUp"
                duration="0.5s"
                delay="0.2s"
              >
                <a href={opensans + '/saas'} target="_blank">
                  <figure>
                    <img src={imgAPI.showcase[8]} alt="medical" />
                  </figure>
                  SaaS
                </a>
              </ReactWOW>
            </li>
            <li>
              <ReactWOW
                animation="fadeInUp"
                duration="0.5s"
                delay="0.3s"
              >
                <a href={roboto + '/agency'} target="_blank">
                  <figure>
                    <img src={imgAPI.showcase[2]} alt="movie" />
                  </figure>
                  Agency
                </a>
              </ReactWOW>
            </li>
            <li>
              <ReactWOW
                animation="fadeInUp"
                duration="0.5s"
                delay="0.4s"
              >
                <a href="/crypto" target="_blank">
                  <figure>
                    <img src={imgAPI.showcase[1]} alt="education" />
                  </figure>
                  Cryptocurrency &amp; Blockchain
                </a>
              </ReactWOW>
            </li>
            <li>
              <ReactWOW
                animation="fadeInUp"
                duration="0.5s"
                delay="0.5s"
              >
                <a href="/cloud" target="_blank">
                  <figure>
                    <img src={imgAPI.showcase[6]} alt="saas" />
                  </figure>
                  Cloud Hosting
                </a>
              </ReactWOW>
            </li>
            <li>
              <ReactWOW
                animation="fadeInUp"
                duration="0.5s"
                delay="0.6s"
              >
                <a href={roboto + '/education'} target="_blank">
                  <figure>
                    <img src={imgAPI.showcase[4]} alt="agency" />
                  </figure>
                  Education
                </a>
              </ReactWOW>
            </li>
            <li>
              <ReactWOW
                animation="fadeInUp"
                duration="0.5s"
                delay="0.7s"
              >
                <a href="/fintech" target="_blank">
                  <figure>
                    <img src={imgAPI.showcase[7]} alt="mobile apps" />
                  </figure>
                  Fintech
                </a>
              </ReactWOW>
            </li>
            <li>
              <ReactWOW
                animation="fadeInUp"
                duration="0.5s"
                delay="0.8s"
              >
                <a href={opensans + '/social-apps'} target="_blank">
                  <figure>
                    <img src={imgAPI.showcase[11]} alt="agency" />
                  </figure>
                  Social Media Apps
                </a>
              </ReactWOW>
            </li>
            <li>
              <ReactWOW
                animation="fadeInUp"
                duration="0.5s"
                delay="0.9s"
              >
                <a href={roboto + '/marketing'} target="_blank">
                  <figure>
                    <img src={imgAPI.showcase[3]} alt="crypto" />
                  </figure>
                  Marketing
                </a>
              </ReactWOW>
            </li>
            <li>
              <ReactWOW
                animation="fadeInUp"
                duration="0.5s"
                delay="1s"
              >
                <a href={roboto + '/medical'} target="_blank">
                  <figure>
                    <img src={imgAPI.showcase[5]} alt="fashion" />
                  </figure>
                  Medical
                </a>
              </ReactWOW>
            </li>
            <li>
              <ReactWOW
                animation="fadeInUp"
                duration="0.5s"
                delay="1.2s"
              >
                <a href={opensans + '/retail'} target="_blank">
                  <figure>
                    <img src={imgAPI.showcase[9]} alt="hosting" />
                  </figure>
                  Retail
                </a>
              </ReactWOW>
            </li>
            <li>
              <ReactWOW
                animation="fadeInUp"
                duration="0.5s"
                delay="1.3s"
              >
                <a href={opensans + '/saas2'} target="_blank">
                  <figure>
                    <img src={imgAPI.showcase[10]} alt="architect" />
                  </figure>
                  Saas v2
                </a>
              </ReactWOW>
            </li>
            <li>
              <ReactWOW
                animation="fadeInUp"
                duration="0.5s"
                delay="1.4s"
              >
                <a href="https://github.com/ilhammeidi/oiron-starter" target="_blank">
                  <figure>
                    <img src="/images/showcase/starter.jpg" alt="starter" />
                  </figure>
                  <span>
                    TRY
                  </span>
                  &nbsp;Starter Project
                </a>
              </ReactWOW>
            </li>
          </ul>
        </Container>
      </div>
    </div>
  );
}

export default Explore;
