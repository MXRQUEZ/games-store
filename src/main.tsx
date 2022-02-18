import "./styles/main.css";
import "./components/header/header.module.scss";
import { Component, StrictMode } from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "@/components/layout/layout";
import Home from "@/pages/home/home";
import Products from "@/pages/products/products";
import About from "@/pages/about/about";
import UserProfile from "@/pages/userProfile/userProfile";
import ProtectedRoute from "@/components/protectedRoute/protectedRoute";
import store from "@/store";

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
    console.log(this.state.hasError);
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
                  <Route element={<ProtectedRoute />}>
                    <Route path="/products/*" element={<Products />}>
                      <Route path=":category" element={<Products />} />
                    </Route>
                    <Route path="/profile" element={<UserProfile />} />
                  </Route>
                  <Route path="/about" element={<About />} />
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
