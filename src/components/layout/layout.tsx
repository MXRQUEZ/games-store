import { FC } from "react";
import Header from "@/components/header/header";
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
