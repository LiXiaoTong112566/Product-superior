/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 16:05:01
 * @LastEditTime: 2019-08-15 19:31:20
 * @LastEditors: Please set LastEditors
 */
import { observable, action } from "mobx";
import regeneratorRuntime from "../../utils/runtime";
console.log(regeneratorRuntime);

import { getInfo, detailPicture, skuQuery,skuAttrs } from "../../service/index";

class Detail {
  @observable productDetail = ""; //获取到的商品详情
  @observable detailPictureData = ""; //获取商品详情的图片
  @observable skuQueryData="";//获取库存数量和颜色弹框里面的数据
  @observable checkedData=[];//选中的颜色和数量
  @observable checkedColor=">";//选中的规格
  @observable countFlag = false; //数量弹出框的显示和隐藏
  @observable shoppingFlag = false; //购物弹出框的显示和隐藏
  @observable skuAttrsData = "";//获取到库存弹窗里面的数据

  //获取商品详情的数据
  @action async getProductDetail(obj) {
    let data = await getInfo(obj);
    this.productDetail = data.result;
  }

  //获取商品详情的图片的数据
  @action async getdetailPicture(obj) {
    let data = await detailPicture(obj);
    this.detailPictureData = data.result;
  }

  //获取库存数量和颜色弹框里面的数据
  @action async getskuQuery(obj) {
    return new Promise(async (resolve, reject) => {
      // console.log("接收到的数据shuliang", obj);
      let data = await skuQuery(obj);
      // console.log("获取到的shuliang的数据", data);
      this.skuQueryData = data.result;
      resolve(data.result);
    });
  }

  //选择规格
  @action async getskuAttrs(obj) {
    let data = await skuAttrs(obj);
    console.log("获取规格里面的数据",data);
    this.skuAttrsData = data.result;

  }



  //数量弹窗的显示
  @action showCount() {
    console.log("count");
    this.countFlag = !this.countFlag;
  
  }

  //购物的弹窗的显示

  @action showShop() {
    this.shoppingFlag = !this.shoppingFlag;
    console.log("购物", this.shoppingFlag);
  }

  //点击确认按钮获取到的值
   //点击确认的按钮
   @action changeColor(color){
     
     this.checkedColor=color;
    
  }
}

export default Detail;
