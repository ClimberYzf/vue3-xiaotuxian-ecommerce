//封装分类数据业务相关代码
import {getCategoryAPI} from '@/apis/category'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import {onBeforeRouteUpdate} from 'vue-router'
export function useCategory() {
    const categoryData = ref({}) //后端返回的是对象
    const route = useRoute()  //专门用来获取路由参数的实例
    const getCategory = async (id=route.params.id ) => {
        // 用params传参，所以是params.id，如果用query传参就是query.id
        const res = await getCategoryAPI(id)
        categoryData.value = res.data.result
    }
    onMounted(() => getCategory())

    //目标：路由参数变化的时候，可以把分类数据接口重新发送
    onBeforeRouteUpdate((to)=>{
    console.log('路由变化了')
    //存在问题：使用最新的路由参数请求最新的分类数据
    getCategory(to.params.id)
    })
    return {
        categoryData
    }
}