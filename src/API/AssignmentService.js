import axios from "axios";

export default class AssignmentsService {
    static async getById(courseId, themeId, id, token){
        const response = await axios.get(`http://26.160.42.194:7093/api/courses/${courseId}/themes/${themeId}/assignments/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    }

    static async get(courseId, themeId, token){
        const response = await axios.get(`http://26.160.42.194:7093/api/courses/${courseId}/themes/${themeId}/assignments/`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    }

    static async create(courseId, themeId, model, token){
        const response = await axios.post(`http://26.160.42.194:7093/api/courses/${courseId}/themes/${themeId}/assignments`, model, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    }

    static async update(courseId, themeId, id, updatedModel, token){
        const response = await axios.put(`http://26.160.42.194:7093/api/courses/${courseId}/themes/${themeId}/assignments/${id}`,updatedModel, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    }

    static async delete(courseId, themeId, id, token){
        const response = await axios.delete(`http://26.160.42.194:7093/api/courses/${courseId}/themes/${themeId}/assignments/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    }
}