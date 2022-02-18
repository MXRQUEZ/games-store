import "./styles/main.css";
import "./components/header/header.module.scss";
import { Component, StrictMode } from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/layout/layout";
import Home from "@/pages/home/home";
import Products from "@/pages/products/products";
import About from "@/pages/about/about";
import UserProfile from "@/pages/userProfile/userProfile";
import ProtectedRoute from "@/components/protectedRoute/protectedRoute";

interface AppProps {
  nothing: boolean;
}
interface IAppState {
  hasError: boolean;
  isAuth: boolean;
}

class AppContainer extends Component<AppProps, IAppState> {
  ["constructor"]: typeof AppContainer;

  constructor(props: AppProps) {
    super(props);

    this.state = {
      hasError: false,
      isAuth: false,
    };

    this.setAuth = this.setAuth.bind(this);
  }

  componentDidMount() {
    console.log(this.state.hasError);
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  setAuth(authState: boolean) {
    this.setState({
      isAuth: authState,
    });
  }

  render() {
    return (
      <StrictMode>
        <BrowserRouter>
          <Layout isAuth={this.state.isAuth} setAuth={this.setAuth}>
            {this.state.hasError ? (
              <Home />
            ) : (
              <Routes>
                <Route path="*" element={<Home />} />
                <Route element={<ProtectedRoute isAuth={this.state.isAuth} />}>
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
    );
  }
}

ReactDom.render(<AppContainer nothing={false} />, document.getElementById("app"));
