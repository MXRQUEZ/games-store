import { Route, Routes } from "react-router-dom";
import Home from "@/components/home";
import Products from "@/components/products/products";
import About from "@/components/about";
import SignIn from "@/components/users/signIn";
import SignUp from "@/components/users/signUp";
import pageLinks from "@/components/header/pageLinks";

const NavRoutes = () => (
  <Routes>
    <Route path="*" element={<Home />} />
    <Route path={pageLinks.home} element={<Home />} />
    <Route path={pageLinks.products} element={<Products />} />
    <Route path={pageLinks.about} element={<About />} />
    <Route path={pageLinks.signIn} element={<SignIn />} />
    <Route path={pageLinks.signUp} element={<SignUp />} />
  </Routes>
);

export default NavRoutes;
