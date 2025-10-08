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

/**
 * @description:获取二级分类列表数据
 * @param {*} id 分类id
 * @return {*}
 */
export const getCategoryFilterAPI = (id) => {
    return httpInstance({
        url:'/category/sub/filter',
        params: {
            id
        }
    })
}