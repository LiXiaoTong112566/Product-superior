// 
import fly from "../utils/request";

// 详情上
export function categoryQuery(params){
    return fly.post('/api/open/product/category/query/1.0.0')
  }
//详情列表
export function productList(params){
  return fly.post('/api/open/product/category/productList/1.0.0',params)
}