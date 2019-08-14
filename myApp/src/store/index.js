/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 16:15:31
 * @LastEditTime: 2019-08-14 08:38:33
 * @LastEditors: Please set LastEditors
 */
import DetailModule from './module/detail';
// 引入模块
import Home from './home'
import IndexList from "./indexList"

//获取到的商品详情
const detail =new DetailModule();
// 实例化模块
const home = new Home()
const indexList = new IndexList()
//登录
export default {
  home,
  indexList,
  detail,
};
