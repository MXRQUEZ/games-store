interface IPages {
  [page: string]: string;
}

const pages: IPages = {
  home: "/",
  products: "/products",
  about: "/about",
  signIn: "/sign-in",
  signUp: "/sign-up",
};

export default pages;
