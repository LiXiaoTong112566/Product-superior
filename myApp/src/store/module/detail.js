/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 16:05:01
 * @LastEditTime: 2019-08-14 15:37:04
 * @LastEditors: Please set LastEditors
 */
import { observable, action } from "mobx";
import regeneratorRuntime from "../../utils/runtime";
console.log(regeneratorRuntime);
// import ""
import { getInfo, detailPicture, skuQuery } from "../../service/index";

class Detail {
  @observable productDetail = ""; //获取到的商品详情
  @observable detailPictureData = ""; //获取商品详情的图片
  @observable countFlag = false; //数量弹出框的显示和隐藏
  @observable shoppingFlag = false; //购物弹出框的显示和隐藏

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
    console.log("接收到的数据shuliang", obj);
    let data = await skuQuery(obj);
    console.log("获取到的shuliang的数据", data);
    this.skuQueryData = data.result;
  }

  //数量弹窗的显示
  @action showCount() {
    console.log("count");
    this.countFlag = !this.countFlag;
  }

  //购物的弹窗的显示

  @action showShop() {
    this.shoppingFlag = !this.shoppingFlag;
    console.log(this.shoppingFlag);
  }
}

export default Detail;
