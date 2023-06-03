import axios from "axios"

export default class ThemeService {
    static async getById(courseId, id, token){
        const response = await axios.get(`http://26.160.42.194:7093/api/courses/${courseId}/themes/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    }

    static async delete(courseId, id, token){
        const response = await axios.delete(`http://26.160.42.194:7093/api/courses/${courseId}/themes/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    }

    static async update(courseId, id, updatedModel, token){
        const response = await axios.put(`http://26.160.42.194:7093/api/courses/${courseId}/themes/${id}`, updatedModel, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    }

    static async create(courseId, model, token){
        const response = await axios.post(`http://26.160.42.194:7093/api/courses/${courseId}/themes`, model, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    }

    static async complete(courseId, id, token){
        const response = await axios.post(`http://26.160.42.194:7093/api/courses/${courseId}/themes/${id}/complete`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    }
}