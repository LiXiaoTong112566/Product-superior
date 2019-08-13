/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 20:26:30
 * @LastEditTime: 2019-08-14 00:01:16
 * @LastEditors: Please set LastEditors
 */
import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import "./purchase.scss";

class Purchase extends Component {
  
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

  render() {
    return (
      <View className="purchaseBox">
        {/* 标题 */}

        <View className="box">
          <View className="title">
            <View className="colorSize">颜色,尺码</View>
            <View className="close">X</View>
          </View>

          {/* 商品 */}
          <View className="commodity">
            <View className="commodityLeft">
              <Image src="" />
            </View>
            <View className="commodityRight">
              <View>￥399.50</View>
              <View>库存：4999</View>
            </View>
          </View>

          {/* 颜色的盒子 */}
          <Text className="headline">颜色</Text>
          <View className="colorList">
            <Text className="color active">灰色</Text>
            <Text className="color">黑色</Text>
            <Text className="color">蓝色</Text>
          </View>

          <Text className="headline">尺码</Text>
          {/* 尺码 */}
          <View className="sizeList">
            <Text className="size active">L(170/92A)</Text>
            <Text className="size">L(170/92A)</Text>
            <Text className="size">L(170/92A)</Text>
          </View>

          {/* 数量 */}
          <View className="numBox">
            <Text>数量</Text>
            <View className="num">
              <Text>-</Text>
              <Text>1</Text>
              <Text>+</Text>
            </View>
          </View>

          <Button className="btn">确定</Button>
        </View>
      </View>
    );
  }
}
export default Purchase;
