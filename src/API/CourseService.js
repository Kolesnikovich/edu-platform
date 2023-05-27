import axios from "axios";
export default class CourseService{
    static async getAllPublicCourses(limit = 10, page = 1, token = ''){
        const response = await axios.get("https://26.204.142.184:7093/api/courses",{
            params: {
                itemsPerPage: limit,
                pageNumber: page,
                sortBy: 'rating desc'
            }
            , headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    }
    static async getPopularCourses(limit = 10, page = 1, token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWQ3NzY2My01NzUwLTQzMzgtYjA4YS0zOGU1YWY4ZmE5OTYiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImNhZDc3NjYzLTU3NTAtNDMzOC1iMDhhLTM4ZTVhZjhmYTk5NiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJzdHJpbmcyIiwianRpIjoiNGMzYWYyYmEtNjQ0Ny00ZDYwLThjYzYtMDkwZTkyMGQ3NDljIiwiZXhwIjoxNjg0MDMwNTkzLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDkzIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA5MyJ9.AllAUnfhgA3cMm1SBLkf7OSN9ZAH1eWSp1ZnfyH4cyc"){
        const response = await axios.get("https://26.204.142.184:7093/api/courses",{
            params: {
                itemsPerPage: limit,
                pageNumber: page,

            }
            , headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    }
    static async getById(id){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response
    }

}