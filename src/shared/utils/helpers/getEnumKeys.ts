const getEnumKeys = <T>(arg: T): string[] => Object.keys(arg).filter((item) => Number.isNaN(Number(item)));

export default getEnumKeys;
