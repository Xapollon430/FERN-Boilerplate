import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import ReactWOW from 'react-wow';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { withTranslation } from '~/i18n';
import imgAPI from '~/public/images/imgAPI';
import link from '~/public/text/link';
import { useText } from '~/theme/common';
import AddressCard from '../../Cards/AddressCard';
import useStyles from './clinics-style';

const clinicData = [
  {
    img: imgAPI.medical[37],
    name: 'Central Clinic',
    phone: '+123 456 78 91',
    email: 'hello@awrora.com',
    address: 'Lorem ipsum street no.14 Block A'
  },
  {
    img: imgAPI.medical[38],
    name: 'Dental Clinic',
    phone: '+123 456 78 91',
    email: 'hello@awrora.com',
    address: 'Lorem ipsum street Block C - Vestibullum Building'
  },
  {
    img: imgAPI.medical[39],
    name: 'Mother and Baby Care',
    phone: '+123 456 78 91',
    email: 'hello@awrora.com',
    address: 'Lorem ipsum street no.14 Block A'
  },
  {
    img: imgAPI.medical[40],
    name: 'Orthopedic Clinic',
    phone: '+123 456 78 91',
    email: 'hello@awrora.com',
    address: 'Lorem ipsum street Block C - Vestibullum Building'
  },
  {
    img: imgAPI.medical[41],
    name: 'Mother and Baby Care',
    phone: '+123 456 78 91',
    email: 'hello@awrora.com',
    address: 'Lorem ipsum street no.14 Block A'
  },
  {
    img: imgAPI.medical[42],
    name: 'Orthopedic Clinic',
    phone: '+123 456 78 91',
    email: 'hello@awrora.com',
    address: 'Lorem ipsum street Block C - Vestibullum Building'
  }
];

function Clinics(props) {
  // Theme breakpoints
  const theme = useTheme();
  const text = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  // Translation Function
  const { t } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Box py={3} px={{ sm: 3 }}>
          <h4 className={clsx(text.title, text.capitalize)}>
            {t('common:medical-landing.clinic_title')}
          </h4>
          <p className={text.subtitle2}>Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed.</p>
        </Box>
        <Grid container spacing={3}>
          {clinicData.map((item, index) => (
            <Grid key={index.toString()} item md={6} xs={12}>
              <ReactWOW animation="fadeInUpShort" offset={-50} delay={(index * 0.2) + 's'} duration="0.4s">
                <div>
                  <AddressCard
                    img={item.img}
                    name={item.name}
                    phone={item.phone}
                    email={item.email}
                    address={item.address}
                    link={link.medical.contactMap}
                  />
                </div>
              </ReactWOW>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

Clinics.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['medical-landing'])(Clinics);
