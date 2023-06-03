import axios from "axios"
import TestRequestModel from "./models/TestRequestModel";

export default class TestService {
    static async getAll(token){
        const response = await axios.get("http://26.160.42.194:7093/api/tests",{
            headers: {
                "Authorization": `Bearer ${token}`
            }});
        return response
    }

    static async getById(id, token){
        const response = await axios.get(`http://26.160.42.194:7093/api/tests/${id}`,{
            headers: {
                "Authorization": `Bearer ${token}`
            }});
        return response
    }

    static async create(model, token){
        const response = await axios.post(`http://26.160.42.194:7093/api/tests`, model,{
            headers: {
                "Authorization": `Bearer ${token}`
            }});
        return response
    }

    static async update(id, model, token){
        const response = await axios.put(`http://26.160.42.194:7093/api/tests/${id}`, model,{
            headers: {
                "Authorization": `Bearer ${token}`
            }});
        return response
    }

    static async delete(id, token){
        const response = await axios.delete(`http://26.160.42.194:7093/api/tests/${id}`,{
            headers: {
                "Authorization": `Bearer ${token}`
            }});
        return response
    }

    static async answer(courseId, themeId, id, answer, token){
        const response = await axios.post(`http://26.160.42.194:7093/api/tests/${id}/answer?courseId=${courseId}&themeId=${themeId}`, answer,{
            headers: {
                "Authorization": `Bearer ${token}`
            }});
        return response
    }
}