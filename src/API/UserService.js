import axios from "axios";

export default class CourseService{
    static async loginRequest(email, password){
        const response = await axios.post("https://26.204.142.184:7093/api/auth/login", {
            email: email,
            password: password,
        })
        return response
    }
}