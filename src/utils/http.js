// axios基础的封装
//1.导入 axios
import axios from 'axios'

//2.创建一个“定制版”的 axios 实例
const httpInstance = axios.create({
    //2.1 基础地址：所有请求都会自动拼上这个前缀
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    //2.2 超时时间：请求发出去后，5秒内没响应就判定“失败”
    timeout: 5000
})

// 添加请求拦截器
httpInstance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器, 未来有业务再补充代码，先搭建基础的框架
httpInstance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });

//完成了4项基础配置，把封装好的 axios 实例 “暴露出去”，让项目中其他文件可以导入并使用它。
export default httpInstance