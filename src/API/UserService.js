import axios from "axios";

export default class UserService{
    static async getProfile(token){
        const response = await axios.get(`http://26.160.42.194:7093/api/users/profile`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    }
    static async getById(id, token){
        const response = await axios.get(`http://26.160.42.194:7093/api/users/profile/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    }

    static async changePassword(currentPassword, newPassword, token){
        const response = await axios.post(`http://26.160.42.194:7093/api/users/change-password`, { currentPassword, newPassword}, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    }

    static async updateProfile(username, email, token){
        const response = await axios.post(`http://26.160.42.194:7093/api/users/update-profile`, { username, email}, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    }

    static async getCurrentUserProgress(token){
        const response = await axios.get(`http://26.160.42.194:7093/api/users/progress`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    }

    static async getUserProgress(id, token){
        const response = await axios.get(`http://26.160.42.194:7093/api/users/progress?id=${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    }
}