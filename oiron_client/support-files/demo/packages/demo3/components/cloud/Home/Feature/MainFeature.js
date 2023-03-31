import React from 'react';
import PropTypes from 'prop-types';
import ReactWOW from 'react-wow';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import Title from '../../Title';
import useStyles from './feature-style';

const featureList = [
  {
    img: '/images/cloud/gear.svg#main',
    title: 'titleitem1',
    desc: 'descitem1'
  },
  {
    img: '/images/cloud/connection.svg#main',
    title: 'titleitem2',
    desc: 'descitem2'
  },
  {
    img: '/images/cloud/support.svg#main',
    title: 'titleitem3',
    desc: 'descitem3'
  }
];

function MainFeature(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;
  return (
    <div className={classes.mainFeature}>
      <Container>
        <Title caption={t('common:cloud-landing.mainfeature_headtitle')} text={t('common:cloud-landing.mainfeature_title')} align="center" />
        <Grid container spacing={6} className={classes.grid}>
          {featureList.map((item, index) => (
            <Grid item sm={4} key={index.toString()}>
              <ReactWOW
                animation="fadeInUpShort"
                offset={-260}
                delay={(0.2 + (0.1 * index)) + 's'}
                duration="0.3s"
              >
                <div className={classes.item}>
                  <figure>
                    <svg className={classes.wave}>
                      <use xlinkHref={item.img} />
                    </svg>
                  </figure>
                  <Typography variant="h6" className={text.subtitle2}>
                    {t('common:cloud-landing.mainfeature_' + item.title)}
                  </Typography>
                  <Typography component="p" className={text.paragraph}>
                    {t('common:cloud-landing.mainfeature_' + item.desc)}
                  </Typography>
                </div>
              </ReactWOW>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

MainFeature.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['cloud-landing'])(MainFeature);
