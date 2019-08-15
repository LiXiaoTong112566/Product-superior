
import { observable, action } from 'mobx'
import {citycode,addAddress} from '../../service'
import regeneratorRuntime from "../../utils/runtime"
console.log(regeneratorRuntime)

export default class City {
    //城市渲染
    @observable citycodeData=[];

  //@action 修饰方法
  @action citycodeAction = async (params) => {
      const data = await citycode()
      console.log(data,'citycode')
      this.citycodeData=data.result.htLocationVoList;
    //   console.log(this.indexLIstData,'zmxcategoryQueryAction')
  }
 //添加地址
  @action addAddressAction = async (params) => {
    const data = await addAddress(params)
    console.log(data,'addAddressActionaddAddressAction')
    // this.citycodeData=data.result.htLocationVoList;
}

}


