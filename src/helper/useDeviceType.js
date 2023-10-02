import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState({
    isDesktop: false,
    isMobile: false,
    isTablet: false,
    isMobileTablet: false,
  });

  function getDeviceType() {
    const width = window.innerWidth;
    return {
      isDesktop: width >= 1024,
      isTablet: width >= 768 && width < 1024,
      isMobileTablet: width < 1024,
      isMobile: width < 768,
    };
  }

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    // Initial check on component mount
    handleResize();

    // Add a listener for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceType;
};

export default useDeviceType;
