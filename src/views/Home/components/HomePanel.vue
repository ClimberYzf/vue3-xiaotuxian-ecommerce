<script setup>
defineProps({
    //主标题
    title:{
        type:String
    },
    //副标题
    subTitle:{
        type:String
        }
})
</script>
<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <!-- 主标题和副标题 -->
        <h3>
        {{ title }}<small>{{subTitle}}</small>
        </h3>
      </div>
      <!-- 主体内容区域,用插槽 -->
      <slot />
    </div>
  </div>
</template>

<style scoped lang='scss'>
.home-panel {
  background-color: #fff;

  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;//子元素在交叉轴(垂直方向)的末端对齐（底部对齐）

    h3 {
      flex: 1;//让弹性子元素按比例占据容器的剩余空间.这里应该是自动占剩余的空间.
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;

      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>