import { useState, useEffect } from 'react';

import { DEVICES } from '../constants/viewport';
import { getDeviceFromWidth } from '../utils/viewport';

const useDevice = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [device, setDevice] = useState(DEVICES.DESKTOP);

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width/height to state
      setDevice(getDeviceFromWidth(window.innerWidth));
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return device;
};

export default useDevice;
