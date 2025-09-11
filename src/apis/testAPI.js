import httpInstance from "@/utils/http";

//通过封装的 httpInstance 发送网络请求，获取首页分类数据
export function getCategory() {
    //返回的是一个 promise 对象
    return httpInstance({
        url: 'home/category/head'
    })
}