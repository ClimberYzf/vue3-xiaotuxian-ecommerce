<script setup>
import {ref} from 'vue'
const showInput = ref(false)    
</script>
<template>
    产品列表<br>
    <!-- autofocus 只在页面首次加载时生效，动态插入的元素它管不到。所以按钮点击后显示的输入框不会自动聚焦。<br>
    <button @click="showInput = true">显示输入框</button> -->
    <!-- <input v-if="showInput" autofocus type="text" placeholder="用autofocus"> -->
    <!-- <input autofocus  type="text" placeholder="输入框"> -->
    <!-- 用自定义指令 v-focus 实现自动聚焦。<br>
    点击按钮后，输入框显示的同时会自动聚焦 —— 因为 v-focus 的 mounted 钩子会在输入框被插入 DOM 时触发，执行 el.focus()。<br>
    点击按钮后，输入框这一DOM节点插入到DOM骨架中。
    <button @click="showInput = true">显示输入框</button>
    <input v-if="showInput" v-focus type="text" placeholder="用autofocus">
    <input v-focus  type="text" placeholder="输入框">
    优先用 Vue 自带的声明式语法，少用自定义指令,因为它们更高效，对服务端渲染也更友好。
    <br> -->
    
</template>