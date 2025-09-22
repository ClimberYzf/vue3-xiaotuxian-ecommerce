<script setup>
</script>
<template>
    <!-- Header -->
    <header class="app-header">
        <div class="container">
            <h1 class="logo">
                <RouterLink to="/">小兔鲜</RouterLink>
            </h1>
            <ul class="app-header-nav">
                <li class="home">
                    <RouterLink to="/">首页</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">居家</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">美食</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">服饰</RouterLink>
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