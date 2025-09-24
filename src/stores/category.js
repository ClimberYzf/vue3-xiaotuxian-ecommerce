import { ref } from 'vue'
import { defineStore } from 'pinia'
import {getCategoryAPI} from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
    //导航列表的数据管理
    //state 导航列表数据
    const categoryList = ref([])  

    //action 获取导航数据的方法
    // 接口请求
    const getCategory = async () => {
        //封装是因为通常发送接口之前做些额外的处理
        const res = await getCategoryAPI()        
        categroyList.value = res.result
        //拿到数据后的处理
    }

    return {
        categoryList,
        getCategory
    }

})  