import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

class AuthStore {
  login = "";
  password = "";

  constructor() {
    makeAutoObservable(this);
  }

  // ф-ия изменения логина
  changeLogin = (login) => {
    this.login = login;
  };

  // ф-ия изменения пароля
  changePassword = (password) => {
    this.password = password;
  };

  sendAccountToServer = () => {
    console.log(this.login);
    console.log(this.password);
  };
}

export const authStore = new AuthStore();
