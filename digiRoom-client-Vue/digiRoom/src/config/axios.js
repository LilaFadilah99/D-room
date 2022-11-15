import axios from "axios";
export default axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://d-room.herokuapp.com",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
