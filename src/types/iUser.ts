interface IUser {
  id?: number | string;
  login: string;
  password: string;

  passwordRepeat?: string;
}

export default IUser;
