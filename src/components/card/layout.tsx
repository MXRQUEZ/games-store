import { FC } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const storeName = "Games $tore";

const Layout: FC = ({ children }) => (
  <>
    <Header title={storeName} />
    <main>
      <div>{children}</div>
    </main>
    <Footer />
  </>
);

export default Layout;
