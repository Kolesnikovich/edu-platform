import axios from "axios";

export default class FilesService {
    static async getAll(info, token){
        const response = await axios.post("http://26.160.42.194:7093/api/files", info,{
            headers: {
                "Authorization": `Bearer ${token}`
            }});
        return response
    }

    static async attach(attachmentObjectIds, attachmentObjectTypes, file, token){
        const response = await axios.post("http://26.160.42.194:7093/api/files/attach", file, {params: { attachmentObjectIds, attachmentObjectTypes}},{
            headers: {
                "Authorization": `Bearer ${token}`
            }});
        return response
    }
}