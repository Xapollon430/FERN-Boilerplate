import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import useStyles from './title-style';

function Title(props) {
  const classes = useStyles();
  const { children, align } = props;
  return (
    <div className={clsx(classes.title, classes[align])}>
      <h4>
        {children}
      </h4>
    </div>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
};

Title.defaultProps = {
  align: 'left'
};

export default Title;
