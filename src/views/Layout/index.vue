<script setup lang="ts">
// import { RouterView } from 'vue-router'; //视频里没有这行代码
//这是 ES6 的解构赋值语法，表示从 vue-router 导出的内容中，单独提取 RouterView 这个组件。
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
</script>

<template>
    <!-- <div>
        我是首页
        下面是二级路由出口
        <RouterView />
    </div> -->
    <LayoutNav />
    <LayoutHeader />
    <RouterView />
    <LayoutFooter />
</template>