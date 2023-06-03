import axios from "axios";

export default class FileAssignmentsService {
    static async getAll(token){
        const response = await axios.get(`https://26.160.42.194:7093/api/file-assignments`,{
            headers: {
                "Authorization": `Bearer ${token}`
            }});
        return response
    }

    static async getById(id, token){
        const response = await axios.get(`http://26.160.42.194:7093/api/file-assignments/${id}`,{
            headers: {
                "Authorization": `Bearer ${token}`
            }});
        return response
    }

    static async create(id, model, token){
        const response = await axios.post(`http://26.160.42.194:7093/api/file-assignments/`, model,{
            headers: {
                "Authorization": `Bearer ${token}`
            }});
        return response
    }

    static async update(id, model, token){
        const response = await axios.put(`http://26.160.42.194:7093/api/file-assignments/${id}`, model,{
            headers: {
                "Authorization": `Bearer ${token}`
            }});
        return response
    }

    static async delete(id, token){
        const response = await axios.delete(`http://26.160.42.194:7093/api/file-assignments/${id}`,{
            headers: {
                "Authorization": `Bearer ${token}`
            }});
        return response
    }

    static async pending(token){
        const response = await axios.get(`http://26.160.42.194:7093/api/file-assignments/pending`,{
            headers: {
                "Authorization": `Bearer ${token}`
            }});
        return response
    }

    static async grade(courseId, themeId, assignmentId, userId, grade, token){
        const response = await axios.post(`http://26.160.42.194:7093/api/file-assignments/grade`, null, { params : {
                courseId,
                themeId,
                assignmentId,
                userId,
                grade
            },
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response
    }
}