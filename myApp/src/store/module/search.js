import { observable, action } from 'mobx'
import regeneratorRuntime from "../../utils/runtime";
console.log(regeneratorRuntime,'regeneratorRuntime')

import { searchShop } from '../../service'

export default class SearchShop {
    
    @observable searchText=[];
  //@action 修饰方法

  //搜索商品
  @action searchShopText = async (params) => {
      const data = await searchShop(params);
      console.log(data.result)
      this.searchText=data.result;
  }

}
