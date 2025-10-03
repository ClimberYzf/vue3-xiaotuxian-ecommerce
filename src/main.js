import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//引入初始化样式文件
import '@/styles/common.scss'

import { useIntersectionObserver } from '@vueuse/core'

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

// 在 main.js 中全局注册 v-focus 指
// 注册自定义指令 v-focus
// app.directive('focus', {
//   // 当指令绑定的元素被插入到 DOM 时触发
//   mounted(el) {
//     // el 是指令绑定的 DOM 元素（这里是 input 标签）
//     el.focus() // 调用原生 DOM 方法，让元素获取焦点
//   }
// })

app.mount('#app')

//定义全局指令
app.directive('img-lazy',{
  mounted(el,binding) {
    //el:指令绑定的元素 img
    //binding对象:常用binding.value指令等于号后绑定的表达式的值 图片url
    // console.log(el, binding.value)
    const { stop } = useIntersectionObserver(
      el,
      ([entry]) => {
        console.log(entry.isIntersecting)
         if (entry.isIntersecting) {
          //  进入视口区域
           el.src = binding.value
         }
        
        //判断是否进入视口区域
        // const rect = entry.target.getBoundingClientRect(); // 获取元素位置信息
        // console.log('元素顶部距离视口顶部的距离：', rect.top);
        // console.log('元素底部距离视口顶部的距离：', rect.bottom);
        // console.log('当前视口高度：', window.innerHeight);
        // console.log('是否进入视口：', entry.isIntersecting);

      },    
      
     );
  }
})



