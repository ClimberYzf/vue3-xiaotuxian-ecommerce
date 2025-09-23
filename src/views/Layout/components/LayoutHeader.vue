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
    <!-- Header -->
    <header class="app-header">
        <div class="container">
            <h1 class="logo">
                <RouterLink to="/">小兔鲜</RouterLink>
            </h1>
            <ul class="app-header-nav">                
                <li class="home" v-for="item in categoryList" :key="item.id">
                    <RouterLink to="/">{{  item.name }}</RouterLink>
                </li>
            </ul>
            <div class="search">
                <i class="iconfont icon-search"></i>
                <input type="text" placeholder="搜一搜">
            </div>
            <!-- 头部购物车 -->
            <!-- <HeaderCart /> -->
        </div>
    </header>
</template>
<style scoped lang="scss">
    .app-header {
        background-color: #fff;
        .container {
            display: flex;
            align-items: center;
        }
        .logo {
            width:200px;
            a {
                display:block;//因为父元素.logo下只有a标签，所以可以占满整个宽度，不用行内块。
                height: 132px;
                width: 100%;                
                text-indent: -9999px;
                background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
            }
        }

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

        .search {
            width: 250px;
            height: 32px;
            position: relative;//如果有绝对定位的子元素则必须保留，否则可省略（但保留无妨）。
            border-bottom: 1px solid #e7e7e7;
            line-height: 32px;//设置图标和输入框行高

            .icon-search {
                font-size: 18px;
                margin-left: 5px;//行元素left有效
            }
            input {
                width: 140px;
                padding-left: 5px;
                color: #666;
            }
                        
        }
        
    }

</style>