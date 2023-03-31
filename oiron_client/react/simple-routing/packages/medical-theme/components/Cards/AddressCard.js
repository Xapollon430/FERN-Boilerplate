import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/LocalPhone';
import LocationIcon from '@material-ui/icons/LocationOn';
import { pink } from '@material-ui/core/colors';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './address-card-style';

function AddressCard(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = useTranslation('common');
  const {
    img, name, phone,
    email, address, link,
  } = props;

  return (
    <Card className={classes.addressCard}>
      <div className={classes.paper}>
        <figure>
          <img src={img} alt="clinic" />
        </figure>
        <div className={classes.detailInfo}>
          <Box mb={3}>
            <h6 className={text.subtitle2}>
              {name}
            </h6>
          </Box>
          <Grid container spacing={1}>
            <Grid item md={6} xs={12}>
              <Box display="flex">
                <PhoneIcon className={classes.icon} color="primary" />
                {phone}
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Hidden xsDown>
                <Box display="flex">
                  <EmailIcon className={classes.icon} color="secondary" />
                  {email}
                </Box>
              </Hidden>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex">
                <LocationIcon className={classes.icon} style={{ color: pink[500] }} />
                <Typography noWrap>{address}</Typography>
              </Box>
            </Grid>
          </Grid>
          <Hidden xsDown>
            <Button
              href={link}
              variant="outlined"
              color="secondary"
              fullWidth
              size="small"
              className={classes.btn}
            >
              {t('header_contact')}
            </Button>
          </Hidden>
        </div>
        <ButtonBase href={link} className={classes.mobileLink} />
      </div>
    </Card>
  );
}

AddressCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  link: PropTypes.string,

};

AddressCard.defaultProps = {
  link: '#'
};

export default AddressCard;
