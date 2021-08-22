import Actions from '../constants/Actions';
import { getDeviceFromWidth } from '../utils/viewport';

const initialState = { device: '' };

const viewport = (state = initialState, { payload, type }) => {
  switch (type) {
    case Actions.UPDATE_VIEWPORT: {
      const { width } = payload;
      return {
        ...state,
        device: getDeviceFromWidth(width)
      };
    }

    default:
      return state;
  }
};

export default viewport;
