import httpInstance from "@/utils/http"

//获取banner
//给参数 params 设置了默认值 {}，如果没有传递参数，params 就会是一个空对象，避免了因 params 为 undefined 而导致后续解构赋值出错。
export function getBannerAPI(params={}) {
    //投放位置distributionSite默认为1，商品为2
    //如果 params 中没有 distributionSite 属性，distributionSite 就会使用默认值 '1'。
    const {distributionSite='1'} = params
    return httpInstance({
        url: '/home/banner', 
        //这里的 params 是 axios 中用于传递查询字符串参数的配置项，和上面的params仅名称相同，但作用域不同所以不冲突。
        params: {
            distributionSite
        }
    }
    )
}

/**
 * @description:获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
    return httpInstance({
        url:'/home/new'
    })
}

/**
 * @description:获取人气推荐
 * @param {*}
 * @return {*}
 */
export const findHotAPI = () => {
    return httpInstance({
        url:'/home/hot'
    })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}


/**补充：
 * @description:商品库存查询
 */
export const checkGoodsStockAPI = (skuID) => {
    return httpInstance({
        url: `/goods/stock/${skuID}`
    })
}