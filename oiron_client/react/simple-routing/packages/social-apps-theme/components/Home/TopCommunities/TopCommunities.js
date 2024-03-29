import React from 'react';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { useTranslation } from 'next-i18next';
import Title from '../../Title';
import BigIcon from './BigIcon';
import { useTextAlign } from '~/theme/common';
import useStyles from './top-communities-style';

const commData = [
  {
    icon: 'ion-ios-football',
    name: 'Sport & Soccer',
    count: 100,
    color1: '#CBE9C4',
    color2: '#1D9AEB',
    members: [
      'https://randomuser.me/api/portraits/women/0.jpg',
      'https://randomuser.me/api/portraits/women/8.jpg',
      'https://randomuser.me/api/portraits/men/40.jpg',
      'https://randomuser.me/api/portraits/men/83.jpg'
    ]
  },
  {
    icon: 'ion-navigate',
    name: 'Adventures',
    count: 100,
    color1: '#D6EC2F',
    color2: '#EB6F1D',
    members: [
      'https://randomuser.me/api/portraits/women/0.jpg',
      'https://randomuser.me/api/portraits/women/8.jpg',
      'https://randomuser.me/api/portraits/men/40.jpg',
      'https://randomuser.me/api/portraits/men/83.jpg'
    ]
  },
  {
    icon: 'ion-ios-speedometer',
    name: 'Moto Racing',
    count: 100,
    color1: '#1DEBE4',
    color2: '#2F84EC',
    members: [
      'https://randomuser.me/api/portraits/women/0.jpg',
      'https://randomuser.me/api/portraits/women/8.jpg',
      'https://randomuser.me/api/portraits/men/40.jpg',
      'https://randomuser.me/api/portraits/men/83.jpg'
    ]
  },
  {
    icon: 'ion-music-note',
    name: 'Music',
    count: 100,
    color1: '#FF0000',
    color2: '#002BFF',
    members: [
      'https://randomuser.me/api/portraits/women/0.jpg',
      'https://randomuser.me/api/portraits/women/8.jpg',
      'https://randomuser.me/api/portraits/men/40.jpg',
      'https://randomuser.me/api/portraits/men/83.jpg'
    ]
  },
  {
    icon: 'ion-ios-paw',
    name: 'Animal Lovers',
    count: 100,
    color1: '#EB9D1D',
    color2: '#FF81B6',
    members: [
      'https://randomuser.me/api/portraits/women/0.jpg',
      'https://randomuser.me/api/portraits/women/8.jpg',
      'https://randomuser.me/api/portraits/men/40.jpg',
      'https://randomuser.me/api/portraits/men/83.jpg'
    ]
  },
  {
    icon: 'ion-ios-game-controller-b',
    name: 'Games',
    count: 100,
    color1: '#EB1DBE',
    color2: '#2F84EC',
    members: [
      'https://randomuser.me/api/portraits/women/0.jpg',
      'https://randomuser.me/api/portraits/women/8.jpg',
      'https://randomuser.me/api/portraits/men/40.jpg',
      'https://randomuser.me/api/portraits/men/83.jpg'
    ]
  }
];

function TopCommunities() {
  const classes = useStyles();
  const align = useTextAlign();
  const { t } = useTranslation('common');

  // Media Query
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <Container>
        <Title align="center">
          {t('social-landing.community_title')}
        </Title>
        <Grid container className={classes.iconGroup}>
          <Grid item md={4} xs={12}>
            <ScrollAnimation
              animateOnce
              offset={-200}
              animateIn="fadeInUpShort"
              delay={0.3}
              duration={0.3}
            >
              <div>
                <Box pt={{ md: 5 }} mt={{ md: 5 }}>
                  <BigIcon
                    icon={commData[0].icon}
                    name={commData[0].name}
                    count={commData[0].count}
                    color1={commData[0].color1}
                    color2={commData[0].color2}
                    members={commData[0].members}
                  />
                </Box>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce
              offset={-200}
              animateIn="fadeInUpShort"
              delay={0.3}
              duration={0.3}
            >
              <div>
                <BigIcon
                  icon={commData[1].icon}
                  name={commData[1].name}
                  count={commData[1].count}
                  color1={commData[1].color1}
                  color2={commData[1].color2}
                  members={commData[1].members}
                />
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid item md={4} xs={12} className={align.textCenter}>
            <ScrollAnimation
              animateOnce
              offset={-200}
              animateIn="fadeInUpShort"
              delay={0.3}
              duration={0.3}
            >
              <div>
                <BigIcon
                  icon={commData[2].icon}
                  name={commData[2].name}
                  count={commData[2].count}
                  color1={commData[2].color1}
                  color2={commData[2].color2}
                  members={commData[2].members}
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce
              offset={-200}
              animateIn="fadeIn"
              delay={0.3}
              duration={0.3}
            >
              <div>
                {!isMobile && (
                  <Button variant="contained" color="primary" className={classes.btnExplore}>
                    Explore All Communities
                  </Button>
                )}
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce
              offset={-200}
              animateIn="fadeInUpShort"
              delay={0.3}
              duration={0.3}
            >
              <div>
                <BigIcon
                  icon={commData[3].icon}
                  name={commData[3].name}
                  count={commData[3].count}
                  color1={commData[3].color1}
                  color2={commData[3].color2}
                  members={commData[3].members}
                />
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid item md={4} xs={12}>
            <ScrollAnimation
              animateOnce
              offset={-200}
              animateIn="fadeInUpShort"
              delay={0.3}
              duration={0.3}
            >
              <div>
                <Box pt={{ md: 5 }} mt={{ md: 5 }}>
                  <BigIcon
                    icon={commData[4].icon}
                    name={commData[4].name}
                    count={commData[4].count}
                    color1={commData[4].color1}
                    color2={commData[4].color2}
                    members={commData[4].members}
                  />
                </Box>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce
              offset={-200}
              animateIn="fadeInUpShort"
              delay={0.3}
              duration={0.3}
            >
              <div>
                <BigIcon
                  icon={commData[5].icon}
                  name={commData[5].name}
                  count={commData[5].count}
                  color1={commData[5].color1}
                  color2={commData[5].color2}
                  members={commData[5].members}
                />
              </div>
            </ScrollAnimation>
          </Grid>
        </Grid>
        {isMobile && (
          <div className={align.textCenter}>
            <Button color="primary" variant="contained" className={classes.btnExplore}>
              Explore All Communities
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
}

TopCommunities.propTypes = {

};

export default TopCommunities;
