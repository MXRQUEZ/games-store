import "./styles/main.css";
import "./components/header/header.scss";
import { Component, StrictMode } from "react";
import ReactDom from "react-dom";
import Header from "./components/header/header";
import Footer from "@/components/footer/footer";

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
        <Header title="Games $tore" />
        <Footer />
      </StrictMode>
    );
  }
}

ReactDom.render(<AppContainer nothing={false} />, document.getElementById("app"));
