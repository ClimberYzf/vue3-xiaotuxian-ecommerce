<script setup>
//不用接口请求，改用本地数据
// import {getCategoryAPI} from '@/apis/layout'
import {categoryData} from '@/mock/category'
import { onMounted, ref } from 'vue'
const categoryList = ref([]) 

//接口请求
// const getCategory = async () => {
//     //封装是因为通常发送接口之前做些额外的处理
//     const res = await getCategoryAPI()
//     console.log(res.data)
//     categroyList.value = res.result
//     //拿到数据后的处理
// }


//初始化数据（替代接口请求）
const initCategory = () => {
    categoryList.value = categoryData.result
    console.log(categoryList.value)
};

//选择一个生命周期函数调用，如常用的onMounted
onMounted( () => {
    // getCategory()
    initCategory();
})
</script>
<template>
    <ul class="app-header-nav">                
                <li class="home" v-for="item in categoryList" :key="item.id">
                    <RouterLink to="/">{{  item.name }}</RouterLink>
                </li>
            </ul>
</template>
<style scoped lang="scss">
.app-header-nav {
            width: 820px;
            display: flex;
            padding-left: 40px;
            position: relative;//
            z-index: 998;

            li {
                margin-right: 40px;
                width: 38px;
                text-align: center;

            a {
                font-size: 16px;
                line-height: 32px;
                height: 32px;
                display: inline-block;

                &:hover {
                    color: $xtxColor;
                    border-bottom: 1px solid $xtxColor;
                }
            }

            // .active {
            //     color: $xtxColor;
            //     border-bottom: 1px solid $xtxColor;
            // }
  }
}
</style>