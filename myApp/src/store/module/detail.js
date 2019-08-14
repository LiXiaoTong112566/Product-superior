/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 16:05:01
 * @LastEditTime: 2019-08-14 00:17:07
 * @LastEditors: Please set LastEditors
 */
import { observable, action } from "mobx";
import {
    getInfo,
} from "../../service/index";

class Detail {

    @observable productDetail = [];//获取到的商品详情
    @observable countFlag = false;//数量弹出框的显示和隐藏
    @observable shoppingFlag = false;//购物弹出框的显示和隐藏

    @action getProductDetail(obj) {
        console.log("接收到的数据", obj)
        let data = getInfo(obj);
        console.log("获取到的详情的数据", data);
        this.productDetail = data;
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

