import axios from "axios";

const axiosWithAuth = () => {
  const TOKEN = process.env.TOKEN;
  return axios.create({
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });
};

export default axiosWithAuth;
