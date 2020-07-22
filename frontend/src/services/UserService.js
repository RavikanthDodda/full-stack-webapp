import  Axios from "axios";


const baseUrl = "http://localhost:8080";

class UserService {

    getAllAds = () => {
        return Axios.get(baseUrl + "/ads" );
    }

    getUserAds = () => {
        return Axios.get(baseUrl + "/ads/user", {withCredentials: true});
    }

    postAd = (ad) => {
        return Axios.get(baseUrl + "/ad", ad,  {withCredentials: true});
    }

}

export default new UserService();