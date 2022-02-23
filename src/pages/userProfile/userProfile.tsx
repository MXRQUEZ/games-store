import { FC, useEffect, useState } from "react";
import classes from "./userProfile.module.scss";
import Container from "@/components/ui/container/container";
import useTypedSelector from "@/hooks/redux/useTypedSelector";
import IUser from "@/types/iUser";
import { getUserByLogin } from "@/shared/utils/apiRequests";
import Spinner from "@/components/ui/spinner/spinner";
import ProfileForm from "@/components/ui/forms/profile/profileForm";

const UserProfile: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userLogin = useTypedSelector((state) => state.auth.user!);
  const title = `${userLogin} profile page`;
  const [profile, setProfile] = useState<IUser>({ login: userLogin, password: "qwerty" });
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    (async () => {
      setSpinner(true);
      const currentUser = await getUserByLogin({ user: userLogin });
      setProfile(currentUser);
      setSpinner(false);
    })();
  }, []);

  console.log(profile);

  return (
    <Container id={classes.profile} title={title}>
      <ProfileForm profile={profile} setProfile={setProfile} />
      {spinner && <Spinner />}
    </Container>
  );
};

export default UserProfile;
