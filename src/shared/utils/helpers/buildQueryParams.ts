import IParams from "@/types/iParams";

interface IBuildQueryParams {
  (params: IParams): string;
}

const buildQueryParams: IBuildQueryParams = (params) => {
  const query = new URLSearchParams(params);
  return `?${query}`;
};

export default buildQueryParams;
