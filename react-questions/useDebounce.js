import { useState, useEffect } from "react";

const useDebounce = (value, timeInMS) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, timeInMS);

    return () => clearTimeout(handler);
  }, [value, timeInMS]);

  return debouncedValue;
};

export default useDebounce;
