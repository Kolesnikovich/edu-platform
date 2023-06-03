import axios from "axios";

export default class AuthService{
    static async login(email, password){
        const response = await axios.post("http://26.160.42.194:7093/api/auth/login", {
            email: email,
            password: password,
        })
        return response
    }

    static async register(credentials){
        const response = await axios.post("http://26.160.42.194:7093/api/auth/register", credentials)
        return response
    }
}