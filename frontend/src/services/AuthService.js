import  Axios from "axios";


const baseUrl = "http://localhost:8080";

class AuthService {

    authenticate = (user) => {
    console.log(user);
    
        return Axios.post( baseUrl + "/authenticate", user );
    }

    register = (user) => {
        return Axios.post( baseUrl + "/register", user );
    }


}

export default new AuthService();