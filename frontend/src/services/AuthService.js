import Axios from "axios";

const baseUrl = "http://localhost:8080";

class AuthService {
  authenticate = (user) => {
    return Axios.post(baseUrl + "/authenticate", user);
    // .then((response) => {
    //   return response.data;
    // })
    // .catch((err) => {
    //   return "error";
    // });
  };

  register = (user) => {
    return Axios.post(baseUrl + "/register", user);
  };
}

export default new AuthService();
