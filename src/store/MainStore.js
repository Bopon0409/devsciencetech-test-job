import { makeAutoObservable } from "mobx";
import ObjectImage from "../styles/images/object.png";

const DEFAULT_OBJECTS_ARRAY = [
  {
    Id: 1,
    Image: ObjectImage,
    Description: 120023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 2,
    Image: ObjectImage,
    Description: 120033,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 3,
    Image: ObjectImage,
    Description: 130023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 4,
    Image: ObjectImage,
    Description: 140023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 5,
    Image: ObjectImage,
    Description: 150023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 6,
    Image: ObjectImage,
    Description: 160023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 7,
    Image: ObjectImage,
    Description: 170023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 8,
    Image: ObjectImage,
    Description: 180023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 9,
    Image: ObjectImage,
    Description: 120023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 10,
    Image: ObjectImage,
    Description: 120033,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 11,
    Image: ObjectImage,
    Description: 130023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 12,
    Image: ObjectImage,
    Description: 140023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 13,
    Image: ObjectImage,
    Description: 150023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 14,
    Image: ObjectImage,
    Description: 160023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 15,
    Image: ObjectImage,
    Description: 170023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 16,
    Image: ObjectImage,
    Description: 180023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 17,
    Image: ObjectImage,
    Description: 120023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 18,
    Image: ObjectImage,
    Description: 120033,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 19,
    Image: ObjectImage,
    Description: 130023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 20,
    Image: ObjectImage,
    Description: 140023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 21,
    Image: ObjectImage,
    Description: 150023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 22,
    Image: ObjectImage,
    Description: 160023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 23,
    Image: ObjectImage,
    Description: 170023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 24,
    Image: ObjectImage,
    Description: 180023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 25,
    Image: ObjectImage,
    Description: 120023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 26,
    Image: ObjectImage,
    Description: 120033,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 27,
    Image: ObjectImage,
    Description: 130023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 28,
    Image: ObjectImage,
    Description: 140023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 29,
    Image: ObjectImage,
    Description: 150023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 30,
    Image: ObjectImage,
    Description: 160023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 31,
    Image: ObjectImage,
    Description: 170023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 32,
    Image: ObjectImage,
    Description: 180023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 33,
    Image: ObjectImage,
    Description: 120023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 34,
    Image: ObjectImage,
    Description: 120033,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 35,
    Image: ObjectImage,
    Description: 130023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 36,
    Image: ObjectImage,
    Description: 140023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 37,
    Image: ObjectImage,
    Description: 150023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 38,
    Image: ObjectImage,
    Description: 160023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 39,
    Image: ObjectImage,
    Description: 170023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 40,
    Image: ObjectImage,
    Description: 180023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 41,
    Image: ObjectImage,
    Description: 120023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 42,
    Image: ObjectImage,
    Description: 120033,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 43,
    Image: ObjectImage,
    Description: 130023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 44,
    Image: ObjectImage,
    Description: 140023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 45,
    Image: ObjectImage,
    Description: 150023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 46,
    Image: ObjectImage,
    Description: 160023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 47,
    Image: ObjectImage,
    Description: 170023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 48,
    Image: ObjectImage,
    Description: 180023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 49,
    Image: ObjectImage,
    Description: 120023,
    Title: "Бета",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 50,
    Image: ObjectImage,
    Description: 120033,
    Title: "Бета",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 51,
    Image: ObjectImage,
    Description: 130023,
    Title: "Бета",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 52,
    Image: ObjectImage,
    Description: 140023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 53,
    Image: ObjectImage,
    Description: 150023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 54,
    Image: ObjectImage,
    Description: 160023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 55,
    Image: ObjectImage,
    Description: 170023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 56,
    Image: ObjectImage,
    Description: 180023,
    Title: "Бета",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 57,
    Image: ObjectImage,
    Description: 120023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 58,
    Image: ObjectImage,
    Description: 120033,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 59,
    Image: ObjectImage,
    Description: 130023,
    Title: "Бета",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 60,
    Image: ObjectImage,
    Description: 140023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 61,
    Image: ObjectImage,
    Description: 150023,
    Title: "Бета",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 62,
    Image: ObjectImage,
    Description: 160023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 63,
    Image: ObjectImage,
    Description: 170023,
    Title: "Авторадио",
    Video: "devscience.tech/Video/12345.mp4",
  },
  {
    Id: 64,
    Image: ObjectImage,
    Description: 180023,
    Title: "Бета",
    Video: "devscience.tech/Video/12345.mp4",
  },
];

class MainStore {
  user = {
    Title: "Алексей",
    role: "Admin",
    ruRole: "Администратор",
  };

  serachInputValue = ""; // значения поля поиска в objectsList
  currentMenuId = 0; // Id текущего пункта меню
  changedObject = {};

  objectsArray = DEFAULT_OBJECTS_ARRAY;

  constructor() {
    makeAutoObservable(this);
  }

  changeMenuId = (id) => {
    this.currentMenuId = id;
  };

  changeMenuDescription = (Description) => {
    this.currentMenuDescription = Description;
  };

  onChangeSearchInputValue = (value) => {
    this.serachInputValue = value;
  };

  setChangedObject = (object) => {
    this.changedObject = object;
    console.log(object);
  };
}

export const mainStore = new MainStore();
