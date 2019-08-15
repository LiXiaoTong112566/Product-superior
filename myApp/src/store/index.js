/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 16:15:31
 * @LastEditTime: 2019-08-14 10:32:27
 * @LastEditors: Please set LastEditors
 */
import DetailModule from './module/detail';
import IndexList  from "./module/indexList";
import Home from "./module/home";
import Search from "./module/search";
//获取到的商品详情
let detail =new DetailModule();
let indexList = new IndexList()
let home = new Home()
let search = new Search()
//登录
export default {
  indexList,
  detail,
  home,
  search
};
