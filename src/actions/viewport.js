import Actions from '../constants/Actions';

const updateViewport = (size = {}) => {
  return {
    type: Actions.UPDATE_VIEWPORT,
    payload: { width: size.width }
  };
};

export {
  updateViewport
};
