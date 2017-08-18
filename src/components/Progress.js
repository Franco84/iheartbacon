import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

const styleSheet = createStyleSheet(theme => ({
  progress: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
}));

function Progress(props) {
  const classes = props.classes;
  return (
    <div>
      <CircularProgress color="accent" className={classes.progress} size={50} />
    </div>
  );
}

Progress.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Progress);