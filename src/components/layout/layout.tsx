import { FC, useEffect, useState } from "react";
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
import Spinner from "@/components/ui/spinner/spinner";

const Layout: FC = ({ children }) => {
  const { isSignInActive, isSignUpActive } = useTypedSelector((state) => state.modals);
  const isAuth = !!useTypedSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const { signInModalClose, signUpModalClose } = useActions();
  const { signIn } = useActions();
  const [spinner, setSpinner] = useState(true);

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
        setSpinner(false);
      })();
      return;
    }

    setSpinner(false);
  }, []);

  return (
    <>
      <Header />
      <main>{spinner ? <Spinner /> : children}</main>
      <Modal isActive={isSignInActive} onClose={onSignInClose}>
        <SignInForm />
      </Modal>
      <Modal isActive={isSignUpActive} onClose={onSignUpClose}>
        <SignUpForm />
      </Modal>
      <Footer />
    </>
  );
};

export default Layout;
