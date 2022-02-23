interface IUser {
  id?: number | string;
  login: string;
  password: string;
  avatar?: string;
  description?: string;
  passwordRepeat?: string;
}

export default IUser;
