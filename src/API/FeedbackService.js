import axios from "axios";

export default class FeedbackService {
    static async getAll(courseId, token){
        const response = await axios.get(`http://26.160.42.194:7093/api/courses/${courseId}/feedback`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    }

    static async getAllByUser(courseId, userId, token){
        const response = await axios.get(`http://26.160.42.194:7093/api/courses/${courseId}/feedback/${userId}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response
    }

    static async delete(courseId, userId, token){
        const response = await axios.delete(`http://26.160.42.194:7093/api/courses/${courseId}/feedback/${userId}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response
    }

    static async update(courseId, model, token){
        const response = await axios.put(`http://26.160.42.194:7093/api/courses/${courseId}/feedback`, model, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response
    }

    static async create(courseId, feedback, token){
        const response = await axios.post(`http://26.160.42.194:7093/api/courses/${courseId}/feedback`, feedback, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response
    }

    static async answer(courseId, userId, authorResponse){
        const response = await axios.post(`http://26.160.42.194:7093/api/courses/${courseId}/feedback/${userId}/answer`, authorResponse);
        return response
    }
}