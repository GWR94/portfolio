let debounceTimer;

export const debounce = (callback: Function, timer) => {
  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(callback, timer);
};

export function throttle(callback, limit) {
  let wait = false; // Initially, we're not waiting
  return function() {
    // We return a throttled function
    if (!wait) {
      // If we're not waiting
      callback.call(); // Execute users function
      wait = true; // Prevent future invocations
      setTimeout(() => {
        // After a period of time
        wait = false; // And allow future invocations
      }, limit);
    }
  };
}
