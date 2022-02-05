const debounce = <T>(callback: (...args: T[]) => void, delay = 300): ((...args: T[]) => void) => {
  let timerId: ReturnType<typeof setTimeout>;

  return (...args: T[]) => {
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
      callback(...args);
      clearTimeout(timerId);
    }, delay);
  };
};

export default debounce;
