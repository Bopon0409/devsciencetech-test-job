import { makeAutoObservable } from "mobx";

export const PAGES_NAMES = {
  Auth: "auth",
  Main: "main",
};

class PagesStore {
  page = PAGES_NAMES.Auth;

  constructor() {
    makeAutoObservable(this);
  }

  changePage = (page) => {
    if (!Object.values(PAGES_NAMES).includes(page)) return;

    this.page = page;
  };
}

export const pagesStore = new PagesStore();
