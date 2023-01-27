const axios = require("axios");

console.log(axios);

const instance = axios.create({
  baseURL: "https://api-argonautes.herokuapp.com/api",
});

class ApiClient {
  get(path) {
    return new Promise((resolve, reject) => {
      instance
        .get(path)
        .then((response) => resolve(response))
        .catch((e) => {
          reject(e);
        });
    });
  }

  post(path, body) {
    return new Promise((resolve, reject) => {
      instance
        .post(path, body)
        .then((response) => resolve(response))
        .catch((e) => {
          reject(e);
        });
    });
  }

  put(path, body) {
    return new Promise((resolve, reject) => {
      instance
        .put(path, body)
        .then((response) => resolve(response))
        .catch((e) => {
          reject(e);
        });
    });
  }

  delete(path) {
    return new Promise((resolve, reject) => {
      instance
        .delete(path)
        .then((response) => resolve(response))
        .catch((e) => {
          reject(e);
        });
    });
  }
}

export const Api = new ApiClient();
