import "./styles/main.css";
import "./components/header/header.module.scss";
import { Component, StrictMode } from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "@/components/layout/layout";
import Home from "@/pages/home/home";
import ProtectedRoute from "@/components/protectedRoute/protectedRoute";
import store from "@/store";
import Pathnames from "./constants/pathnames";
import { AboutPage, OrderPage, ProductsPage, ProfilePage } from "@/pages/lazyPages";

interface AppProps {
  nothing: boolean;
}
interface IAppState {
  hasError: boolean;
}

class AppContainer extends Component<AppProps, IAppState> {
  ["constructor"]: typeof AppContainer;

  constructor(props: AppProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount() {
    this.state.hasError && console.error("UI error!");
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    return (
      <Provider store={store}>
        <StrictMode>
          <BrowserRouter>
            <Layout>
              {this.state.hasError ? (
                <Home />
              ) : (
                <Routes>
                  <Route path="*" element={<Home />} />
                  <Route path={Pathnames.Login} element={<Home />} />
                  <Route element={<ProtectedRoute />}>
                    <Route path={Pathnames.Products} element={<ProductsPage />}>
                      <Route path=":category" element={<ProductsPage />} />
                    </Route>
                    <Route path={Pathnames.Profile} element={<ProfilePage />} />
                    <Route path={Pathnames.Order} element={<OrderPage />} />
                  </Route>
                  <Route path={Pathnames.About} element={<AboutPage />} />
                </Routes>
              )}
            </Layout>
          </BrowserRouter>
        </StrictMode>
      </Provider>
    );
  }
}

ReactDom.render(<AppContainer nothing={false} />, document.getElementById("app"));
