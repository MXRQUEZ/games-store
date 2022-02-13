import { FC, useState } from "react";
import Header from "../header/header";
import Footer from "@/components/footer/footer";
import Modal from "@/components/ui/modal/modal";
import SignInForm from "@/components/ui/forms/sign-in/signInForm";
import SignUpForm from "../ui/forms/sign-up/signUpForm";

interface ILayoutProps {
  isAuth: boolean;
  setAuth: (authState: boolean) => void;
}

const Layout: FC<ILayoutProps> = ({ isAuth, setAuth, children }) => {
  const [isSignInActive, setSignInActive] = useState(false);
  const [isSignUpActive, setSignUpActive] = useState(false);

  return (
    <>
      <Header isAuth={isAuth} setAuth={setAuth} setSignInActive={setSignInActive} setSignUpActive={setSignUpActive} />
      <main>
        <div>{children}</div>
      </main>
      <Modal visible={isSignInActive} setVisible={setSignInActive}>
        <SignInForm setAuth={setAuth} setModalVisible={setSignInActive} />
      </Modal>
      <Modal visible={isSignUpActive} setVisible={setSignUpActive}>
        <SignUpForm setAuth={setAuth} setModalVisible={setSignInActive} />
      </Modal>
      <Footer />
    </>
  );
};

export default Layout;
