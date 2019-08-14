/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 14:52:05
 * @LastEditTime: 2019-08-14 10:02:59
 * @LastEditors: Please set LastEditors
 */
import fly from "../utils/request";

//获取商品详情
export let sepcialInfo = params => {
    return fly.post('/api/open/sepcial/query/1.0.0', params);
  }
