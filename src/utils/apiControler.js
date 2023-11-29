import axios from "axios";

const IPv4 = "http://86.57.194.20:5002";

class ApiController {
  accessToken;
  refreshToken;

  constructor() {
    this.accessToken = localStorage.getItem("accessToken");
    this.refreshToken = localStorage.getItem("refreshToken");
  }

  getAccessToken() {
    if (!this.accessToken) {
      console.log("Access token not found");
      return "";
    }
    return localStorage.getItem("accessToken");
  }

  setAccessToken(accessToken) {
    localStorage.setItem("accessToken", accessToken);
    this.accessToken = accessToken;
  }

  getRefreshToken() {
    if (!this.refreshToken) {
      console.log("Refresh token not found");
      return "";
    }
    return this.refreshToken;
  }

  setRefreshToken(refreshToken) {
    localStorage.setItem("refreshToken", refreshToken);
    this.refreshToken = refreshToken;
  }

  getHeaders() {
    const object = {
      Authorization: "Bearer " + this.getAccessToken(),
    };
    console.log(object);
    return object;
  }

  async getContent(contentName) {
    try {
      const URL = `${IPv4}/api/Content/GetContent`;
      const data = {
        headers: this.getHeaders(),
        params: {
          Title: contentName,
        },
      };

      const response = await axios.get(URL, data);

      console.log(response.data);
    } catch (error) {
      console.error(`:: Error to GetContent`);
    }
  }

  async deleteContent(id) {
    try {
      const URL = `${IPv4}/api/Content/DeleteContent/${+id}`;
      const data = {
        headers: this.getHeaders(),
      };

      const response = await axios.delete(URL, data);

      console.log(response.data);
    } catch (error) {
      console.error(`:: Error to DeleteContent`);
    }
  }

  async changeContent(object) {
    try {
      const URL = `${IPv4}/api/Content/ChangeContent`;
      const { Video, Title, Image, Description, Id } = object;
      const data = {
        headers: this.getHeaders(),
        params: {
          Id,
          Video,
          Title,
          Image,
          Description,
        },
      };

      const response = await axios.put(URL, data);

      console.log(response);

      console.log(`:: Content has been updated`);
    } catch (error) {
      console.error(`:: Error to ChangeContent`);
    }
  }

  async addContent(object) {
    try {
      console.log(object);
      const URL = `${IPv4}/api/Content/AddContent`;
      const { Video, Title, Image, Description } = object;
      const data = {
        headers: this.getHeaders(),
        params: {
          Title,
          Description,
          Video,
          Image,
        },
      };
      console.log(data);

      const response = await axios.post(URL, data);
      console.log(response);

      console.log(":: Content has been added");
    } catch (error) {
      console.error(`:: Error to AddContent`);
      console.error(error);
    }
  }

  async authorize(login = "", password = "") {
    try {
      const URL = `${IPv4}/api/Home/login`;
      const data = {
        login,
        password,
      };

      console.log(URL, data);
      const response = await axios.post(URL, data);
      console.log(response);
      return {
        ...response.data,
        code: 200,
      };
    } catch (error) {
      console.error(`:: Error authorize: ${error}`);
      return {
        code: 400,
        error: error.message,
      };
    }
  }

  async refresh(refreshToken) {
    const URL = `${IPv4}/api/Home/refresh`;

    const data = {
      headers: {
        Authorization: "Bearer " + this.getRefreshToken(),
      },
      params: {
        title,
        description,
        video,
        image,
      },
    };
  }
}

export const apiController = new ApiController();
