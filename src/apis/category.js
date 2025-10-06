import httpInstance from "@/utils/http"

export function getCategoryAPI(id) {
    return httpInstance({
        url: '/category',  
        //axios接口请求传参      
        params: {
            id
        }
    })
}