// axios基础的封装
//1.导入 axios
import axios from 'axios'

//错误提示框 —— 统一拦截“用户不存在”的错误 
import {ElMessage} from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

import { useUserStore } from '@/stores/userStore'
import router from '@/router'


//2.创建一个“定制版”的 axios 实例
const httpInstance = axios.create({
    //2.1 基础地址：所有请求都会自动拼上这个前缀
    baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net',
    //2.2 超时时间：请求发出去后，5秒内没响应就判定“失败”
    timeout: 15000  //获取订单是慢响应，从原先的5秒延长至15秒
})

// 添加请求拦截器
httpInstance.interceptors.request.use(function (config) {
    //1.从pinia获取token数据
    const userStore = useUserStore()    
    //2.按照后端的要求拼接token数据
    const token = userStore.userInfo.token
    console.log("发送请求时已经有token： ",token)
    if (token) {
      config.headers.Authorization = `Bearer ${token}` //后端要求的写法
    }
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器, 未来有业务再补充代码，先搭建基础的框架
// httpInstance.interceptors.response.use(“成功响应处理”的回调函数, “失败响应处理”的回调函数)
httpInstance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;     //原来每次调用接口时，我需要比视频多写.data是因为后来，视频代码这里返回的是response.data,而我这里和当时那节视频一样是写response。
  }, function (error) {
    let errorMsg = '请求失败，请稍后再试~'  
    const userStore = useUserStore()  

    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么

    //关于“用户不存在”提供统一的错误提示
    //自己增加：单独处理超时错误(error.code 为 ECONNABORTED 表示超时）
    //确认一下是不是ECONNABORTED？
    // console.log('错误信息：', error);// 是的，code值是ECONNABORTED
    if (error.code === 'ECONNABORTED') {
      errorMsg = '请求超时啦~可能是网络较慢，请点击重试'  //是在页面提示，不是在控制台显示，一般是网络问题或后端临时故障导致的超时，可以提醒用户检查网络或者稍后重试。
    }
    //后端成功接收并处理了请求，但返回了非 2xx 状态码（如 400/401/500 等），且响应体中包含 data.message 字段:
    else if (error?.response?.data?.message) {
      errorMsg = error.response.data.message
    }
    ElMessage({
      type: 'warning',
      message: errorMsg
      // message:error?.response?.data?.message     

    })

    //401 token失效处理
    //1.清除本地用户数据
    //2.跳转到登录页
    if (error?.response?.status === 401) {
      userStore.clearUserInfo()
      router.push('/login')
    }

    return Promise.reject(error);
  });

//完成了4项基础配置，把封装好的 axios 实例 “暴露出去”，让项目中其他文件可以导入并使用它。
export default httpInstance