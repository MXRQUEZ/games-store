interface ISubRoute {
  id: string;
  url: string;
  name: string;
}

interface IRoute {
  name: string;
  url: string;
  sub?: ISubRoute[];
}

export default IRoute;
