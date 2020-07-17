import  Axios from "axios";


const baseUrl = "http://localhost:8080";

class UserService {

    getAllAds = () => {
        return Axios.get(baseUrl + "/ads" );
    }

    getUserAds = () => {
        return Axios.get(baseUrl + "/ads/user", {withCredentials: true})
    }

}

export default new UserService();