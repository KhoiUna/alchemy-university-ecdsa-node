import axios from "axios";

const server = axios.create({
  baseURL: import.meta.env.AXIOS_URL,
});

export default server;
