import axios from "axios";
export default class CourseService{
    static async getAllPublicCourses(limit = 10, page = 1, sortBy = '' , token = '',onlyMyCourses= false){
        const response = await axios.get("http://26.160.42.194:7093/api/courses",{
            params: {
                itemsPerPage: limit,
                pageNumber: page,
                sortBy,
                onlyMyCourses: onlyMyCourses
            }
            , headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    }

    static async getPopularCourses(limit = 10, page = 1, token = ''){
        const response = await axios.get("http://26.160.42.194:7093/api/courses",{
            params: {
                itemsPerPage: limit,
                pageNumber: page,
                sortBy: "rating desc",
            }
            , headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    }

    static async getById(id, token){
        const response = await axios.get(`http://26.160.42.194:7093/api/courses/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    }

    static async create(course, token){
        const response = await axios.post("http://26.160.42.194:7093/api/courses", course, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response;
    }

    static async update(course, id, token){
        const response = await axios.put(`http://26.160.42.194:7093/api/courses/${id}`, course, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response;
    }

    static async delete(id, token){
        const response = await axios.delete(`http://26.160.42.194:7093/api/courses/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response;
    }

    // static async getAccessRequests(id: string){
    //     const response = await axios.get(`http://26.160.42.194:7093/api/courses/${id}/access-requests`, {
    //         headers: {
    //             "Authorization": `Bearer ${token}`
    //         }
    //     })
    //     return response
    // }
    //
    // static async requestAccess(id: string, userId: string){
    //     const response = await axios.post(`http://26.160.42.194:7093/api/courses/${id}/request-access`, {
    //         headers: {
    //             "Authorization": `Bearer ${token}`
    //         }
    //     })
    //     return response
    // }
    //
    // static async approveAccess(id: string, userId: string){
    //     const response = await axios.post(`http://26.160.42.194:7093/api/courses/${id}/approve-access/${userId}`, {
    //         headers: {
    //             "Authorization": `Bearer ${token}`
    //         }
    //     })
    //     return response
    // }
    //
    // static async revokeAccess(id: string, userId: string){
    //     const response = await axios.post(`http://26.160.42.194:7093/api/courses/${id}/revoke-access/${userId}`, {
    //         headers: {
    //             "Authorization": `Bearer ${token}`
    //         }
    //     })
    //     return response
    // }
    //
    // static async rejectAccess(id: string, userId: string){
    //     const response = await axios.post(`http://26.160.42.194:7093/api/courses/${id}/dismiss-access/${userId}`, {
    //         headers: {
    //             "Authorization": `Bearer ${token}`
    //         }
    //     })
    //     return response
    // }
}