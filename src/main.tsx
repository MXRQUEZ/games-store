import "./styles/main.css";
import "./components/header/header.scss";
import { Component, StrictMode } from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/card/layout";
import Home from "@/components/pages/home";
import pages from "@/components/header/pages";
import Products from "@/components/products/products";
import About from "@/components/pages/about";
import SignIn from "@/components/users/signIn";
import SignUp from "@/components/users/signUp";

interface AppProps {
  nothing: boolean;
}
interface AppState {
  title: string;
}

class AppContainer extends Component<AppProps, AppState> {
  ["constructor"]: typeof AppContainer;

  render() {
    return (
      <StrictMode>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="*" element={<Home />} />
              <Route path={pages.home} element={<Home />} />
              <Route path={pages.products} element={<Products />} />
              <Route path={pages.about} element={<About />} />
              <Route path={pages.signIn} element={<SignIn />} />
              <Route path={pages.signUp} element={<SignUp />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </StrictMode>
    );
  }
}

ReactDom.render(<AppContainer nothing={false} />, document.getElementById("app"));
