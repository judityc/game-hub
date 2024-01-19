import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a18c8be4bb9e4a649f95ec744939b778",
  },
});
