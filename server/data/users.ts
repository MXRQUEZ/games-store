import IUser from "@/types/iUser";
import Roles from "@/constants/roles";

export const users: IUser[] = [
  {
    id: 1,
    login: "Admin",
    password: "123456",
    balance: 100,
    role: Roles.Admin,
  },
  {
    id: 2,
    login: "Crazy_User",
    password: "123456",
    balance: 10,
    role: Roles.User,
  },
];

export default users;
