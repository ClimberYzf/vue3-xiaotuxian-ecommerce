<script setup>
// import {ref} from 'vue'
// const showInput = ref(false)    

import HomePanel from './HomePanel.vue';
import {getGoodsAPI} from '@/apis/home'
import {ref, onMounted} from 'vue'
import Goodsitem from './GoodsItem.vue';

const goodsProduct = ref([])
const getGoods = async () => {
    const res = await getGoodsAPI()
    goodsProduct.value = res.data.result
}
onMounted(()=>getGoods())
</script>
<template>
    <!-- 产品列表<br> -->
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
    <div class="home-product">
        <HomePanel :title="cate.name" v-for="cate in goodsProduct" :key="cate.id">
            <div class="box">
                <RouterLink class="cover" to="/">
                    <img v-img-lazy="cate.picture" />
                    <strong class="label">
                        <span>{{  cate.name }}</span>
                        <span>{{ cate.saleInfo }}</span>
                    </strong>                    
                </RouterLink> 
                <ul class="goods-list">
                    <li v-for="goods in cate.goods" :key="goods.id">
                        <!-- <RouterLink to="/" class="goods-item">
                            <img v-img-lazy="goods.picture" alt="" />
                            <p class="name ellipsis">{{ goods.name }}</p>
                            <p class="desc ellipsis">{{ goods.desc }}</p>
                            <p class="price">&yen;{{ goods.price }}</p>
                        </RouterLink> -->
                        <!-- 优化成单独的组件，可复用 -->
                        <Goodsitem :goods="goods" />
                    </li>
                </ul>
            </div>
        </HomePanel>        
    </div>
</template>
<style lang="scss" scoped>
    .home-product {
  background: #fff;
  margin-top: 20px;
/* .sub是？ */
  .sub {
    margin-bottom: 2px;

    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;

      &:hover {
        background: $xtxColor;
        color: #fff;
      }

      &:last-child {
        margin-right: 80px;
      }
    }
  }

  .box {
    display: flex;

    .cover {
      width: 240px;
      height: 610px;
      margin-right: 10px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }

      .label {
        width: 188px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);

        span {
          text-align: center;

          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }

          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }

    .goods-list {
      width: 990px;
      display: flex;
      flex-wrap: wrap;//让子元素自动换行，从第二行开始继续排列。

      li {
        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;

        &:nth-last-child(-n + 4) {
          margin-bottom: 0;
        }

        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }


  }
}
</style>