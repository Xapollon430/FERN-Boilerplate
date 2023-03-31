import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import useStyles from './title-style';

function TitleSecondary(props) {
  const classes = useStyles();
  const { align, children } = props;
  return (
    <div className={clsx(classes.titleSecondary, classes[align])}>
      <h3>
        {children}
      </h3>
    </div>
  );
}

TitleSecondary.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
};

TitleSecondary.defaultProps = {
  align: 'left'
};

export default TitleSecondary;
