import httpInstance from "@/utils/http"

export const getDetail = (id) => {
    return httpInstance({
        url: "/goods",
        params: {
            id
        } 
    }) 
}

export const getHotGoodsAPI = ({id, type, limit=3}) => {
    return httpInstance({
        url: "/goods/hot",
        params:{
            id,
            type, //1表示24小时热榜，2表示周热榜
            limit
        }
    })
}