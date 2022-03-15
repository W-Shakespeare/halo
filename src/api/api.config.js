import axios from "axios";

// axios config
const axiosConfig = axios.create({
  baseURL: "https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e",
});

axiosConfig.interceptors.response.use(
  (res) => res.data,
  (err) => {
    throw new Error(err.response.data.message);
  }
);

export default axiosConfig;
