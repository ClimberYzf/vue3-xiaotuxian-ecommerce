//封装购物车模块
import { defineStore } from "pinia"
import {ref, computed} from 'vue'
import { useUserStore } from "./userStore"
import {insertCartAPI, findNewCartListAPI, delCartAPI} from "@/apis/cart"
import {checkGoodsStockAPI} from "@/apis/home"

export const useCartStore = defineStore('cart', ()=>{
    const userStore = useUserStore()
    const isLogin = computed(()=>userStore.userInfo.token)
    //1.定义state - cartList
    const cartList = ref([])
    // 错误信息
    // const errorMsg = ref('') 
    
    //获取最新购物车列表action
    const updateNewList = async () => {
        const res = await findNewCartListAPI()
        cartList.value = res.data.result
    }

    //2.定义action - addCart
    const addCart = async(goods) => {
        const {skuId, count} = goods
        if (isLogin.value) {
            //登录下：
            //判断该商品是否有库存
            // const res = await checkGoodsStockAPI(skuId)
            // console.log("库存返回的res:",res)
            // if (res.data.result.isEffective & res.data.result.stock >= count){
                //商品有效 且 库存足够，可以添加到购物车
                await insertCartAPI({skuId, count})
                updateNewList()
                // return true
            // }else{
            //     //商品无效 或 库存不足
            //     errorMsg.value = '商品无效 或 库存不足'
            //     return false
            // }            
        }else {
            //未登录下：
            //添加购物车操作
            //已经添加过 - count+1
            //没有添加过 - 直接push
            //思路： 通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
            const item = cartList.value.find((item) => goods.skuId === item.skuId)
            if (item) {
                //已经添加过
                item.count ++
            }else {
                //没有添加过
                cartList.value.push(goods)
            }
        }
        
        }
    //删除购物车
    const delCart = async (skuId)=>{
         if (isLogin.value) {
            //调用接口实现接口购物车中的删除功能
            await delCartAPI([skuId]) //可是这里好像还没有批量删除吧。
            updateNewList()

         }else{
            //方法1.找到要删除项的下标值-splice
            const idx = cartList.value.findIndex((item) => skuId === item.skuId)
            cartList.value.splice(idx,1) //splice(删除的起始下标值,要删除的元素数量)
            //方法2.使用数组的过滤方法 - filter 保留所有item.skuId 不等于 skuId 的项 
            // const deleteCartList = cartList.value.filter((item) => skuId!== item.skuId)
            // cartList.value = deleteCartList
         }
        

    }

    //清除购物车数据
    const clearCart = () => {
        cartList.value = []
    }

    //计算属性
    //1.总的数量 所有项的count之和
    // reduce(（上一次回调的返回值a即累加器，当前处理的数组元素）=> {处理逻辑，返回更新后的值}, 初始值)
    // 可以在控制台看到，当前的数组元素是一个对象
    const allCount = computed(()=>cartList.value.reduce((a,c)=>a+c.count,0))
    //2.总价 所有项的price*count之和
    const allPrice = computed(()=>cartList.value.reduce((a,c)=>a+c.count*c.price,0))

    //单选功能
    const singleCheck = (skuId,selected) => {
        //通过skuId找到修改项，把它的selected修改为selected
        const item = cartList.value.find((item) => skuId === item.skuId)
        item.selected = selected
    }

    //是否全选
    //  array.every((当前正在处理的数组元素currentValue) => {条件判断逻辑，返回 true 或 false})
    const isAll = computed(()=>cartList.value.every((item)=>item.selected))

    //全选功能
    const allCheck = (selected) => {
        //把cartList中的每一项的selected都设置为当前的全选框状态
        cartList.value.forEach(item => item.selected = selected)
    }

    //已选择数量
    const selectedCount = computed(() => cartList.value.filter((item) => item.selected).reduce((a,c)=>a+c.count,0))
    //已选择商品价格合计
    const selectedPrice = computed(() => cartList.value.filter((item) => item.selected).reduce((a,c)=>a+c.count*c.price,0))

    

    return {
        cartList,
        allCount,
        allPrice,
        isAll,
        selectedCount,
        selectedPrice,
        addCart,
        delCart,
        singleCheck,
        allCheck,
        clearCart,
        updateNewList
    }
}, {
    persist: true,
  },)