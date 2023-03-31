import React from 'react';
import clsx from 'clsx';
import useStyles from './decoration-style';
import imgAPI from '~/public/images/imgAPI';

export default function FormDeco() {
  const classes = useStyles();
  return (
    <div className={classes.buildingDeco}>
      <img
        className={clsx(classes.imgLeft, 'img-2d3d')}
        src={imgAPI.cloud[29]}
        data-2d={imgAPI.cloud[28]}
        data-3d={imgAPI.cloud[29]}
        alt="building"
      />
      <img
        className={clsx(classes.imgCenter, 'img-2d3d')}
        src={imgAPI.cloud[31]}
        data-2d={imgAPI.cloud[30]}
        data-3d={imgAPI.cloud[31]}
        alt="building"
      />
      <img
        className={clsx(classes.imgLeft, 'img-2d3d')}
        src={imgAPI.cloud[29]}
        data-2d={imgAPI.cloud[28]}
        data-3d={imgAPI.cloud[29]}
        alt="building"
      />
    </div>
  );
}
