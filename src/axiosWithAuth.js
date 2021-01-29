import axios from "axios";

const axiosWithAuth = () => {
  return axios.create({
    headers: {
      Authorization: "Bearer d9652479bb5618f0f8322edda0bacf9f2ded8f48",
      "Content-Type": "application/json",
    },
  });
};

export default axiosWithAuth;
