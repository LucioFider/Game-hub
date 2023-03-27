import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "74843602ca0e4b98b945c240a1ca8662",
  },
});
