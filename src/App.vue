<script setup>
//这里的@仅作联想提示，不做实际的路径转换

</script>

<template>       
       <!-- <el-button type="primary">Primary</el-button> -->
      
      <!-- 一级路由出口组件-->
      <RouterView />
      <div class="test">
            test scss
      </div>
</template>

<style scoped lang="scss">
      .test {
            color:$priceColor;
       }
</style>
