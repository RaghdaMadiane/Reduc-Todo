import axios from "axios";

const register = (username,  email, password) => {
  return axios.post("http://localhost:5000/register", {
    username,
    email,
    password,
   
  });
};
const login = (email, password) => {

  return axios
    .post("http://localhost:5000/login", {
      email,
      password,
    })
    .then((response) => {
     
      if (response.data.accessToken) {
        localStorage.setItem("user",JSON.stringify(response.data));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
const authService = {
  register,
  login,
  logout,
};
export default authService;