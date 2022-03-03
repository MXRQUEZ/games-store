type debounceFunc = <T>(func: (...args: T[]) => void, delay: number) => (...args: T[]) => void;

const debounce: debounceFunc = (func, delay = 500) => {
  let timerId: ReturnType<typeof setTimeout>;

  return (...args) => {
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
      func(...args);
      clearTimeout(timerId);
    }, delay);
  };
};

export default debounce;
