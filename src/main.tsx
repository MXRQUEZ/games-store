import "./styles/main.css";
import "./components/header/header.scss";
import { Component, StrictMode } from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/layout/layout";
import Home from "@/components/pages/home";
import Products from "@/components/products/products";
import About from "@/components/pages/about";
import SignIn from "@/components/users/signIn";
import SignUp from "@/components/users/signUp";

interface AppProps {
  nothing: boolean;
}
interface IAppErrorState {
  hasError: boolean;
}

class AppContainer extends Component<AppProps, IAppErrorState> {
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
      <StrictMode>
        <BrowserRouter>
          <Layout>
            {this.state.hasError ? (
              <Home />
            ) : (
              <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
              </Routes>
            )}
          </Layout>
        </BrowserRouter>
      </StrictMode>
    );
  }
}

ReactDom.render(<AppContainer nothing={false} />, document.getElementById("app"));
