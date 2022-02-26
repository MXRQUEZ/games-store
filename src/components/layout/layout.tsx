import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import Footer from "@/components/footer/footer";
import Modal from "@/components/ui/modal/modal";
import SignInForm from "@/components/ui/forms/modal-forms/sign-in/signInForm";
import SignUpForm from "../ui/forms/modal-forms/sign-up/signUpForm";
import useTypedSelector from "@/hooks/redux/useTypedSelector";
import useActions from "@/hooks/redux/useActions";
import { userKey } from "@/store/types/auth";
import { getUserById } from "@/shared/utils/apiRequests";

const Layout: FC = ({ children }) => {
  const navigate = useNavigate();
  const { isSignInActive, isSignUpActive } = useTypedSelector((state) => state.modals);
  const isAuth = !!useTypedSelector((state) => state.auth.user);
  const { signInModalClose, signUpModalClose } = useActions();
  const { signIn } = useActions();

  const onSignInClose = () => {
    signInModalClose();
    navigate("/");
  };

  const onSignUpClose = () => {
    signUpModalClose();
    navigate("/");
  };

  useEffect(() => {
    const userId = localStorage.getItem(userKey);
    if (userId && !isAuth) {
      (async () => {
        const user = await getUserById({ user: userId });
        user && signIn(user);
      })();
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <div>{children}</div>
      </main>
      <Modal isVisible={isSignInActive} onClose={onSignInClose}>
        <SignInForm />
      </Modal>
      <Modal isVisible={isSignUpActive} onClose={onSignUpClose}>
        <SignUpForm />
      </Modal>
      <Footer />
    </>
  );
};

export default Layout;
