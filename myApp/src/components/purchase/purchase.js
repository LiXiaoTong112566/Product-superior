/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 20:26:30
 * @LastEditTime: 2019-08-15 20:13:53
 * @LastEditors: Please set LastEditors
 */
import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import "./purchase.scss";

import regeneratorRuntime from "../../utils/runtime";

console.log(regeneratorRuntime);
@inject("detail")
@observer
class Purchase extends Component {

  constructor(){
    super();
    this.state={
      sum:1,
    }
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}

  config = {
    // navigationBarTitleText: '商品详情'
  };

  componentWillReact() {
    // console.log('componentWillReact')
  }

  componentDidShow() {}

  componentDidHide() {}

  increment = () => {};

  //改变选中的颜色
  async changeColor(data) {
    console.log("change113", data);
    let vids = JSON.parse(data.attributeValueJson)[0].valueVo.vid;
    let result = await this.props.detail.getskuQuery({
      pid: data.pid,
      vids: `[${vids}]`
    });
    console.log("获取到的数据result", result);
    
  }

  //改变数量
  changeCount(type) {
    console.log("type");
    let { skuQueryData } = this.props.detail;
    //如果库存为0直接返回
    if (skuQueryData.store === 0) {
      return;
    } else {
      if (type === "-") {
        console.log(1, this.state.sum);
        if (this.state.sum <= 1) {
          this.setState({
            sum: 1
          });
        } else {
          console.log(this.state.sum);
          this.setState({
            sum: this.state.sum - 1
          });
        }
      } else {
        if (this.state.sum >= skuQueryData.store) {
          this.setState({
            sum: skuQueryData.store
          });
        } else {
          this.setState({
            sum: this.state.sum + 1
          });
        }
      }
    }
  }

  render() {
    let { productDetail, skuQueryData } = this.props.detail;
    return (
      <View className="purchaseBox">
        {/* 标题 */}

        <View className="box">
          <View className="title">
            <View className="colorSize">颜色,尺码</View>
            <View
              className="close"
              onClick={() => this.props.detail.showShop()}
            >
              X
            </View>
          </View>
          {/* 商品 */}
          <View className="commodity">
            <View className="commodityLeft">
              <Image src={productDetail && productDetail.mainImgUrl} />
            </View>
            <View className="commodityRight">
              <View className="price">
                ￥{skuQueryData && skuQueryData.salesPrice}
              </View>
              <View className="price">库存:{skuQueryData.store}</View>
            </View>
          </View>
          {/* 颜色的盒子 */}
          <Text className="headline">颜色</Text>
          <View className="colorList">
            {productDetail.supplierProductSkuVoList &&
              productDetail.supplierProductSkuVoList.map((item, index) => {
                return (
                  <Text
                    key={index}
                    className={
                      item.skuName === skuQueryData.skuName
                        ? "color active"
                        : "color"
                    }
                    onClick={() => this.changeColor(item)}
                  >
                    {item.skuName}
                  </Text>
                );
              })}
          </View>
          {/* <Text className="headline">尺码</Text>
          {/* 尺码 */}
          {/* <View className="sizeList">
            <Text className="size active">L(170/92A)</Text>
            <Text className="size">L(170/92A)</Text>
            <Text className="size">L(170/92A)</Text>
          </View> */}
          
          {/* 数量 */}
          <View className="numBox">
            <Text>数量</Text>
            <View className="num">
              <Text clasName="minus" onClick={() => this.changeCount("-")}>
                -
              </Text>
              <Text>{this.state.sum}</Text>
              <Text className="add" onClick={() => this.changeCount("+")}>
                +
              </Text>
            </View>
          </View>
          <Button className="btn" onClick={() => this.props.detail.showShop()}>
            确定
          </Button>
        </View>
      </View>
    );
  }
}
export default Purchase;
