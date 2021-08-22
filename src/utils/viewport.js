import { DEVICES } from '../constants/viewport';

const DEVICE_SIZES = {
  [DEVICES.TABLET]: 576,
  [DEVICES.DESKTOP]: 992
};

const getDeviceFromWidth = (width) => {
  if (!width) {
    return DEVICES.DESKTOP;
  }

  if (width > DEVICE_SIZES[DEVICES.DESKTOP]) {
    return DEVICES.DESKTOP;
  }

  if (width > DEVICE_SIZES[DEVICES.TABLET]) {
    return DEVICES.TABLET;
  }

  return DEVICES.MOBILE;
};

export {
  getDeviceFromWidth
};
