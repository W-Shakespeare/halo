// import axios from "axios";

const myApi = "https://62322c9ac5ec1188ad2c7333.mockapi.io/cardList";
// const yourApi2 = "https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e";

const api = ({ method, data, url = "" }) =>
  fetch(myApi + url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

const apiConfig = {
  get: (data) => api({ ...data, method: "GET" }),
  put: (data) => api({ ...data, method: "PUT" }),
};

export default apiConfig;
