import axios from "axios";

const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000/api"
    : "http://3.106.218.13/api";

export default axios.create({
  baseURL: API_URL,
});