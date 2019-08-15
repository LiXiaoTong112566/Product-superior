import { observable, action } from 'mobx'
import { categoryQuery,productList } from '../../service'
import regeneratorRuntime from "../../utils/runtime"
console.log(regeneratorRuntime)

export default class DetailOne {
    //头部
    @observable indexLIstData=[];
    //列表
    @observable indexBotData=[];

  //@action 修饰方法
  @action categoryQueryAction = async (params) => {
      const data = await categoryQuery()
      this.indexLIstData=data.result
      console.log(this.indexLIstData,'zmxcategoryQueryAction')
  }

    //列表详情
    @action productListAction = async (params) => {
        const data = await productList(params)
        this.indexBotData=data.result;
        console.log(data,'ssssssssssssssssssssssssssss')
    }
}


