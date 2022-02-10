type debounceFunc = <T>(func: (...args: T[]) => void, delay: number) => (...args: T[]) => void;

const debounce: debounceFunc = (func, delay) => {
  let isCooldown = false;

  return (...args) => {
    if (isCooldown) return;
    isCooldown = true;
    setTimeout(() => {
      func.apply(this, args);
      isCooldown = false;
    }, delay);
  };
};

export default debounce;
