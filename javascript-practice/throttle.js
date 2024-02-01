const throttle = (cb, delay) => {
  let isThrottle = false;
  return () => {
    if (!isThrottle) {
      isThrottle = true;
      setTimeout(() => {
        cb();
        isThrottle = false;
      }, delay);
    }
  };
};
