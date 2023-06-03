import axios from "axios";

export default class MentorsService {
    static async getAll(courseId, token){
        const response = await axios.get(`http://26.160.42.194:7093/api/courses/${courseId}/mentors`,{
            headers: {
                "Authorization": `Bearer ${token}`
            }});
        return response
    }

    static async add(courseId, userId, token){
        const response = await axios.post(`http://26.160.42.194:7093/api/courses/${courseId}/mentors/${userId}`,{
            headers: {
                "Authorization": `Bearer ${token}`
            }});
        return response
    }

    static async remove(courseId, userId, token){
        const response = await axios.delete(`http://26.160.42.194:7093/api/courses/${courseId}/mentors/${userId}`,{
            headers: {
                "Authorization": `Bearer ${token}`
            }});
        return response
    }
}