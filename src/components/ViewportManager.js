import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { updateViewport as updateViewportAction } from '../actions/viewport';
import useWindowSize from '../hooks/useWindowSize';

const ViewportManager = (props) => {
  const { children, updateViewport } = props;
  const { height, width } = useWindowSize();

  useEffect(() => {
    updateViewport({ height, width });
  }, [height, updateViewport, width]);

  return (
    <>
      { children }
    </>
  );
};

ViewportManager.propTypes = {
  children: PropTypes.node.isRequired,
  updateViewport: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateViewport: updateViewportAction
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(ViewportManager);
