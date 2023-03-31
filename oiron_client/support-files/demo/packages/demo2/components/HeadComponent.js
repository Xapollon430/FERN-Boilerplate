import React from 'react';
import { Head } from 'next/document';
import brand from '../public/text/brand';

const HeadComponent = () => (
  <Head>
    <meta name="description" content={brand.showcase.desc} />
    <link rel="shortcut icon" href="/favicons/favicon.ico" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap" />
    <link href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" />
    <title>Oiron - React.js Landing Page Collection</title>
  </Head>
);

export default HeadComponent;
