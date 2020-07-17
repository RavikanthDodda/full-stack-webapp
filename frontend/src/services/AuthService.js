import  Axios from "axios";


const baseUrl = "http://localhost:8080";

class AuthService {

    authenticate = (user) => {
        return Axios.post( baseUrl + "/authenticate", user );
    }


}

export default new AuthService();