import IParams from "@/types/iParams";

const buildParams = (params: IParams): string => {
  const keys = Object.keys(params);
  let result = "";

  if (keys.length) {
    const transformedParams = keys.map((key: string) => `${key}=${params[key]}`).join("&");
    result = `?${transformedParams}`;
  }

  return result;
};

export default buildParams;
