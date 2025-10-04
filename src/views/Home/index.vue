<script setup>
    import HomeCategory from './components/HomeCategory.vue';
    import HomeHot from './components/HomeHot.vue';
    import HomeNew from './components/HomeNew.vue';
    import HomeProduct from './components/HomeProduct.vue';
    import HomeBanner  from './components/HomeBanner.vue';
    // import HomePanel from './components/HomePanel.vue'; 
</script>
<template>
    <div class="container">
        <HomeCategory />
        <HomeBanner />
    </div>
    <HomeNew />
    <!-- <HomeHot /> -->
    <!-- 竟然是在视口内，多加几个组件后发现，有的组件就不在视口内了，所以懒加载功能算实现了。 -->
    <!-- <HomeNew /> -->
    <HomeHot />
    <HomeProduct />
    <!-- 测试面板组件 -->
    <!-- <HomePanel title="新鲜好物" sub-title="新鲜好物 每日必推">
        <div>
            我是新鲜好物的插槽
        </div>
    </HomePanel>
    <HomePanel title="人气推荐" sub-title="人气推荐 精选好货">
        <div>
            我是人气推荐的插槽
        </div>
    </HomePanel> -->
</template>