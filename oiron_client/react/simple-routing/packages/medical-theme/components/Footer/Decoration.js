import React from 'react';
import useStyles from './deco-style';
import imgAPI from '~/public/images/imgAPI';

function Decoration() {
  const classes = useStyles();
  return (
    <div className={classes.footerDeco}>
      <div className={classes.leftDeco} />
      <div className={classes.rightDeco}>
        <img
          src={imgAPI.medical[17]}
          data-3d={imgAPI.medical[16]}
          data-2d={imgAPI.medical[17]}
          className="img-2d3d"
          alt="speciality 3d"
        />
      </div>
    </div>
  );
}

export default Decoration;
