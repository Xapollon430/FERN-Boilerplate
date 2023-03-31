import React, { Fragment } from 'react';
import brand from '../public/text/brand';

const HeadComponent = () => (
  <Fragment>
    <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
    <link rel="manifest" href="/favicons/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
    {/* PWA primary color */}
    {/*  Facebook */}
    <meta property="author" content="oiron" />
    <meta property="og:site_name" content="oiron.indisains.com" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    {/*  Twitter */}
    <meta property="twitter:site" content="oiron.indisains.com" />
    <meta property="twitter:domain" content="oiron.indisains.com" />
    <meta property="twitter:creator" content="oiron" />
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:image:src" content="/favicons/favicon-96x96.png" />
    <meta property="og:url" content={brand.showcase.url} />
    <meta property="og:title" content={brand.showcase.desc} />
    <meta
      property="og:description"
      content={brand.showcase.desc}
    />
    <meta name="twitter:site" content={brand.showcase.url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={brand.showcase.img} />
    <meta property="og:image" content={brand.showcase.img} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </Fragment>
);

export default HeadComponent;
