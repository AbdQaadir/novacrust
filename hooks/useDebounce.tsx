import { useState, useEffect } from "react";

export const useDebounce = <T extends string | number | object>(
  value: T,
  delay: number
): T => {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timeout to update the debounced value after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function: this runs if the value or delay changes before the timeout fires
    // It prevents the old timeout from updating the state with a stale value
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only re-run the effect if value or delay changes

  return debouncedValue;
};
