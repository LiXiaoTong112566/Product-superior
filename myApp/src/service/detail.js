/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 14:52:05
 * @LastEditTime: 2019-08-15 20:06:51
 * @LastEditors: Please set LastEditors
 */
import fly from "../utils/request.js";

//获取商品详情
export let getInfo = params => {
 
    return fly.post('/api/open/product/info/1.0.0', params);
  }

//获取商品详情的图片
export let detailPicture = params => {
    return fly.post('/api/open/product/detailPicture/1.0.0', params);
  }

  //获取商品的弹窗里面的数量和颜色
  export let skuQuery = params => {
      return fly.post('/api/open/product/sku/query/1', params);
  }

  //获取商品的弹窗里面的属性

  export let skuAttrs = params => {
    return fly.post('/api/open/product/sku/attrs/1.0.0', params);
}

  
  //购物详情
  export let productInfo = params => {
      return fly.post('/api/open/product/info/1.0.0', params);
  }

  
  


