import axios from "axios";

require('dotenv').config();

const HOST = process.env.REACT_APP_API_HOST || "localhost";
const PROTOCOL = process.env.REACT_APP_API_PROTOCOL || "http";

const blogFetch = axios.create({
  baseURL: `${PROTOCOL}://${HOST}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default blogFetch;
