// 
import fly from "../utils/request";

// 城市列表
export function citycode(params){
    return fly.post('/api/open/product/ht/location/chinaRegion/1.0.0')
}


  //添加地址
export function addAddress(params){
  return fly.post('/api/open/user/address/addAddress/1.0.0',params)
}