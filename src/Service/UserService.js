import axios from "axios";
import { isConstructorDeclaration } from "typescript";
const API_URL = "http://localhost:9091/api";
const API = "http://localhost:9091/api/users/find?loginName=kim.koe";
class UserService {

    addUserInfo(user) {

        console.log(" inside Add person user->", user);

        return axios.post(`${API_URL}/addUser/`, user);
    }



}


export default new UserService();