import axios from "axios";

const axiosWithAuth = () => {
  const TOKEN = "d9652479bb5618f0f8322edda0bacf9f2ded8f48";

  return axios.create({
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });
};

export default axiosWithAuth;
