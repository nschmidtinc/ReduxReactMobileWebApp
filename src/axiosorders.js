import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerback-d0dfd.firebaseio.com/"
});

export default instance;
