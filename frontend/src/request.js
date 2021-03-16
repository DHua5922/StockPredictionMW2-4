import { BASE_URL } from "./global";
import axios from "axios";

axios.interceptors.request.use(function (config) {
  // Modify request before it is sent
  if(config.url.indexOf(BASE_URL) === -1)
      config.url = BASE_URL + config.url;
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});