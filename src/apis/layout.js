import httpInstance from "@/utils/http"
export function getCategoryAPI() {
    return httpInstance({
        //请求所需的参数，看接口文档
        url: '/home/category/head'
        //get请求，method默认，可以不写
    }
    )
}