import { useIntersectionObserver } from '@vueuse/core'
// 定义懒加载插件
export const lazyPlugin = {
    install(app) {
        //懒加载指令逻辑
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
                    //useIntersectionObserver 是一个 “即时执行” 的函数，而回调函数会在 “未来某个时刻” 才触发，两者的执行时机完全不同
                    stop() // 停止监听
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
    }
}