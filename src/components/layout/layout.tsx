import { FC } from "react";
import Header from "../header/header";
import Footer from "@/components/footer/footer";

const Layout: FC = ({ children }) => (
  <>
    <Header />
    <main>
      <div>{children}</div>
    </main>
    <Footer />
  </>
);

export default Layout;
