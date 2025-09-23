import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//引入初始化样式文件
import '@/styles/common.scss'

//测试接口函数-接口暂时无法访问，运行时控制台会报错，先注释掉
// import { getCategory } from '@/apis/testAPI'
// getCategory().then(
//     //打印promise对象
//     res => {
//         console.log(res)
//     }
// )

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
