import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from '~/i18n';
import imgAPI from '~/public/images/imgAPI';
import link from '~/public/text/link';
import useStyles from './error-style';
// Theme Wrapper
import Cloud from '../../wrapper/Cloud';

function Error(props) {
  const classes = useStyles();
  const { errCode, text, t } = props;
  return (
    <div className={classes.errorWrap}>
      <Container maxWidth="md">
        <Grid container>
          <Grid item md={5} xs={12}>
            <div className={classes.flex}>
              <div className={classes.illustration}>
                <img
                  src={imgAPI.cloudInner[9]}
                  data-2d={imgAPI.cloudInner[8]}
                  data-3d={imgAPI.cloudInner[9]}
                  className="img-2d3d"
                  alt="error"
                />
              </div>
            </div>
          </Grid>
          <Grid item md={7} xs={12}>
            <div className={classes.text}>
              <Typography variant="h1">
                <strong>
                  {errCode}
                </strong>
              </Typography>
              <Typography variant="h4">{text}</Typography>
              <Typography>
                {t('common:404_subtitle')}
              </Typography>
              <Button color="primary" variant="contained" href={link.cloud.home} size="large" className={classes.button}>
                {t('common:back')}
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Error.propTypes = {
  errCode: PropTypes.string,
  text: PropTypes.string,
  t: PropTypes.func.isRequired
};

Error.defaultProps = {
  errCode: '404',
  text: '',
};

function ErrorStyled(props) {
  return(
    <div>
      <Cloud pageName="Not Found">
        <Error {...props} />
      </Cloud>
    </div>
  )
};

export default withTranslation(['common'])(ErrorStyled);
