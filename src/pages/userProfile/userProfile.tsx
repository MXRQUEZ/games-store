import { FC } from "react";
import classes from "./userProfile.module.scss";
import Container from "@/components/ui/container/container";
import useTypedSelector from "@/hooks/redux/useTypedSelector";
import ProfileForm from "@/components/ui/forms/profile/profileForm";

const UserProfile: FC = () => {
  const user = useTypedSelector((state) => state.auth.user);
  const title = `${user?.username || user?.login} profile page`;

  return (
    <Container id={classes.profile} title={title}>
      {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
      <ProfileForm user={user!} />
    </Container>
  );
};

export default UserProfile;
