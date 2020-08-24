import Axios from "axios";

const baseUrl = "http://localhost:8080";

class UserService {
  getUserDetails = () => {
    return Axios.get(baseUrl + "/user", { withCredentials: true });
  };
  getAllAds = () => {
    return Axios.get(baseUrl + "/ads");
  };

  getUserAds = () => {
    return Axios.get(baseUrl + "/user/ads", { withCredentials: true });
  };

  postNewAd = async (ad) => {
    return await Axios.post(baseUrl + "/ad", ad, { withCredentials: true });
  };
}

export default new UserService();
