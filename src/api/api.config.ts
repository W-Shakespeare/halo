// import axios from "axios";

import { ListItemObj } from "../redux/cardList/types";

const myApi = "https://62322c9ac5ec1188ad2c7333.mockapi.io/cardList";
// const yourApi2 = "https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e";

type ApiType = {
  method: string;
  data?: any;
  url?: string;
};

type UpdateCardListType = {
  data: ListItemObj;
  url: string;
};

const api = ({ method, data, url = "" }: ApiType) =>
  fetch(myApi + url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

const apiConfig = {
  get: () => api({ method: "GET" }),
  put: ({ data, url }: UpdateCardListType) => api({ data, method: "PUT", url }),
};

export default apiConfig;
