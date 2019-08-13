/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 14:52:05
 * @LastEditTime: 2019-08-13 17:28:25
 * @LastEditors: Please set LastEditors
 */
import fly from "../utils/requset";

//获取商品详情
export let getInfo = params => {
  console.log("获取到的参数",params);
    return fly.post('/api/open/product/info/1.0.0', params);
  }
