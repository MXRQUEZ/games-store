import Roles from "@/constants/roles";

interface IUser {
  id?: number | string;
  login: string;
  password: string;
  balance?: number;
  profilePicture?: string;
  description?: string;
  username?: string;
  role?: Roles;
  passwordRepeat?: string;
}

export default IUser;
