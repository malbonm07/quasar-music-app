import axios from "axios";
import configApiUrl from "./apiurl.js";

const instance = axios.create({
  baseURL: configApiUrl.apiUrl
});

export default instance;
