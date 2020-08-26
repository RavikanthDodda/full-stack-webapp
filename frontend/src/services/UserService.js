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

  postNewAd = (ad) => {
    return Axios.post(baseUrl + "/ad", ad, { withCredentials: true });
  };
  deleteAd = (id) => {
    console.log(id);
    return Axios.delete(baseUrl + `/ad?id=${id}`, { withCredentials: true });
  };
}

export default new UserService();
