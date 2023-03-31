import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useText } from '~/theme/common';
import { withTranslation } from '~/i18n';
import imgAPI from '~/public/images/imgAPI';
import Title from '../../Title';
import NewsCard from '../../Cards/NewsCard';
import useStyle from './news-event-style';

function NewsEvent(props) {
  const classes = useStyle();
  const text = useText();
  const { t } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div className={classes.root}>
      <Title align="center">
        {t('common:retail-landing.news_title')}
      </Title>
      <Typography align="center" className={text.subtitle2}>
        {t('common:retail-landing.news_desc')}
      </Typography>
      <div className={classes.blogWrap}>
        <Container fixed>
          <Grid container spacing={6} className={classes.listNews}>
            <Grid item md={5} xs={12}>
              <Box p={{ md: 3 }}>
                <NewsCard
                  img={imgAPI.photo[21]}
                  title="Sed imperdiet enim ligula, vitae viverra justo."
                  headline="headline"
                  orientation="portrait"
                  type="over"
                  href="#"
                />
              </Box>
            </Grid>
            <Grid item md={7} xs={12}>
              <Box mb={6}>
                <NewsCard
                  img={imgAPI.photo[22]}
                  orientation={isMobile ? 'portrait' : 'landscape'}
                  title="Vestibulum dignissim orci vitae eros rutrum euismod."
                  headline="news"
                  type="over"
                  href="#"
                />
                <NewsCard
                  img={imgAPI.photo[37]}
                  orientation={isMobile ? 'portrait' : 'landscape'}
                  title="Vestibulum dignissim orci vitae eros rutrum euismod."
                  headline="news"
                  type="over"
                  href="#"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

NewsEvent.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['retail-landing'])(NewsEvent);
