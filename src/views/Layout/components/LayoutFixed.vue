<script setup>
import LayoutHeaderUl from './LayoutHeaderUl.vue'; 
//vueuse
import { useScroll } from '@vueuse/core'
//基于window做滚动,y是纵轴的滚动距离
const {y} = useScroll(window)
</script>
<template>
    <!-- 动态类控制，根据y值确定show类是否有效 -->
    <div class="app-header-sticky " :class="{show: y > 78}" >
        <div class="container">
        <RouterLink class="logo" to="/" />        
        <!-- 导航区域 -->
        <LayoutHeaderUl />
        <div class="right">
            <RouterLink to="/">品牌</RouterLink>
            <RouterLink to="/">专题</RouterLink>
        </div>
        </div>
    </div>
</template>
<style scoped lang='scss'>
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;//值越大越在顶层
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 此处为关键样式!!!
  // 状态一：往上平移自身高度 + 完全透明
  transform: translateY(-100%);
  opacity: 0;

  // 状态二：移除平移 + 完全不透明
  &.show {  //相比在外层写.show,&.show只作用于当前父元素，不影响其他元素，避免全局污染。
    transition: all 0.3s linear;//元素样式平滑过渡动画
    transform: none; //恢复到默认位置，即Y轴上位置为0.
    opacity: 1;
  }

  .container {  
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    height: 80px;
    background: url("@/assets/images/logo.png") no-repeat right 2px;
    background-size: 160px auto;
  }

  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $xtxColor;

    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;

      &:hover {
        color: $xtxColor;
      }
    }
  }
}
</style>