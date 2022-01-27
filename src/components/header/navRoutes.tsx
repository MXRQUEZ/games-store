import { Route, Routes } from "react-router-dom";
import Home from "@/components/pages/home";
import Products from "@/components/products/products";
import About from "@/components/pages/about";
import SignIn from "@/components/users/signIn";
import SignUp from "@/components/users/signUp";
import pages from "@/components/header/pages";

const NavRoutes = () => (
  <Routes>
    <Route path="*" element={<Home />} />
    <Route path={pages.home} element={<Home />} />
    <Route path={pages.products} element={<Products />} />
    <Route path={pages.about} element={<About />} />
    <Route path={pages.signIn} element={<SignIn />} />
    <Route path={pages.signUp} element={<SignUp />} />
  </Routes>
);

export default NavRoutes;
