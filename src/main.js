import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//引入初始化样式文件
import '@/styles/common.scss'

//引入懒加载指令插件并且注册即app.use()
import {lazyPlugin} from '@/directives'
//引入全局组件插件
import { componentPlugin } from '@/components'

// 测试接口函数-测试完注释掉
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
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')






