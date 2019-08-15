import { observable, action } from 'mobx'
import regeneratorRuntime from "../../utils/runtime";
console.log(regeneratorRuntime,'regeneratorRuntime')
import { sepcialInfo } from '../../service'

export default class DetailOne {
    
    @observable sepcialInfoData=[];
  //@action 修饰方法

  //轮播专题
  @action sepcialInfoAction = async (params) => {
      const data = await sepcialInfo(params)
      this.sepcialInfoData=data.result;
  }

}


