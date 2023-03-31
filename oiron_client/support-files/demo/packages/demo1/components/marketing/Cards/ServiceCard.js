import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withTranslation } from '~/i18n';
import useStyles from './service-card-style';

function ServiceCard(props) {
  const classes = useStyles();
  const {
    img,
    title,
    desc,
    href,
    t
  } = props;

  return (
    <Card className={classes.cardService}>
      <CardMedia
        className={classes.mediaProduct}
        image={img}
        title={title}
        component="figure"
      />
      <div className={classes.content}>
        <CardContent className={classes.text}>
          <h6 className={classes.title}>
            {title}
          </h6>
          <Typography component="p">
            {desc}
          </Typography>
        </CardContent>
        <div>
          <Button
            fullWidth
            href={href}
            className={classes.button}
            variant="outlined"
            color="primary"
          >
            {t('common:btn_detail')}
          </Button>
        </div>
      </div>
    </Card>
  );
}

ServiceCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  href: PropTypes.string,
  t: PropTypes.func.isRequired
};

ServiceCard.defaultProps = {
  href: '#',
};

export default withTranslation(['common'])(ServiceCard);
