import IParams from "@/types/iParams";

interface IBuildQueryParams {
  (params: IParams): string;
}

const buildQueryParams: IBuildQueryParams = (params) => {
  const query = new URLSearchParams(params);
  return `?${query}`;
};

export default buildQueryParams;

/* interface IBuildQueryParams {
  (params: IParams): string;
}

const buildQueryParams: IBuildQueryParams = (params) => {
  const paramsEntries = Object.entries(params);
  return paramsEntries.keys.length ? `?${paramsEntries.map(([key, value]) => `${key}=${value}`).join("&")}` : "";
};

export default buildQueryParams;*/
