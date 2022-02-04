import IRoute from "@/types/iRoute";

const routes: IRoute[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Products",
    url: "/products",
    sub: [
      {
        url: "/products/pc",
        id: "products-pc",
        name: "PC",
      },
      {
        url: "/products/xbox",
        id: "products-xbox",
        name: "XBox One",
      },
      {
        url: "/products/playstation",
        id: "products-playstation",
        name: "PlayStation 5",
      },
    ],
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Sign In",
    url: "/sign-in",
  },
  {
    name: "Sign Up",
    url: "/sign-up",
  },
];

export default routes;
