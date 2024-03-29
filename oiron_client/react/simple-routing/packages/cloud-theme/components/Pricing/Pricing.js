import React from 'react';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useTranslation } from 'next-i18next';
import { useText, useTextAlign } from '~/theme/common';
import PricingCard from '../Cards/PricingCard';
import useStyles from './pricing-style';

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    buttonText: 'pricing_free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Personal',
    price: '5',
    description: [
      '15 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support'
    ],
    info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    buttonText: 'pricing_buy',
    buttonVariant: 'outlined'
  },
  {
    title: 'Pro',
    price: '15',
    info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'pricing_buy',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'btn_contact',
    buttonVariant: 'outlined',
  }
];

function Pricing() {
  const classes = useStyles();
  const align = useTextAlign();
  const text = useText();
  const { t } = useTranslation('common');

   // Theme breakpoints
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'md'));

  return (
    <Container className={classes.root}>
      <h3 className={clsx(text.capitalize, text.title, text.textPrimary, align.textCenter)}>
        {t('pricing_title')}
      </h3>
      <p className={clsx(text.subtitle2, align.textCenter)}>
        {t('pricing_desc')}
      </p>
      <div className={classes.pricingWrap}>
        <Grid container spacing={isTablet ? 0 : 3} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={6} md={3}>
              <PricingCard
                title={tier.title}
                subheader={tier.subheader}
                price={tier.price}
                description={tier.description}
                info={tier.info}
                buttonText={t('' + tier.buttonText)}
                buttonVariant={tier.buttonVariant}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}

export default Pricing;
