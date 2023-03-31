import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useStyles from './paper-style';

function PapperBlock(props) {
  const {
    title,
    desc,
    children,
    whiteBg,
    noMargin,
    colorMode,
    overflowX,
    icon
  } = props;

  const classes = useStyles();

  return (
    <div>
      <Paper className={clsx(classes.root, noMargin && classes.noMargin, colorMode && classes.colorMode)} elevation={0}>
        <div className={classes.descBlock}>
          <span className={classes.iconTitle}>
            <i className={icon} />
          </span>
          <div className={classes.titleText}>
            <Typography variant="h6" component="h2" className={classes.title}>
              {title}
            </Typography>
            <Typography component="p" className={classes.description}>
              {desc}
            </Typography>
          </div>
        </div>
        <section className={clsx(classes.content, whiteBg && classes.whiteBg, overflowX && classes.overflowX)}>
          {children}
        </section>
      </Paper>
    </div>
  );
}

PapperBlock.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
  whiteBg: PropTypes.bool,
  colorMode: PropTypes.bool,
  noMargin: PropTypes.bool,
  overflowX: PropTypes.bool,
};

PapperBlock.defaultProps = {
  whiteBg: false,
  noMargin: false,
  colorMode: false,
  overflowX: false,
  icon: 'ion-ios-bookmark-outline'
};

export default PapperBlock;
