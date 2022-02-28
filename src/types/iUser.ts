interface IUser {
  id?: number | string;
  login: string;
  password: string;
  profilePicture?: string;
  description?: string;
  username?: string;
  passwordRepeat?: string;
}

export default IUser;
