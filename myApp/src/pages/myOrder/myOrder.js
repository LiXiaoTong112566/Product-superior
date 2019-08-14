/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 10:57:47
 * @LastEditTime: 2019-08-14 11:04:25
 * @LastEditors: Please set LastEditors
 */
import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
import './myOrder.module.scss'



// @inject('detail')
// @observer
class CommodityDetail extends Component {
  componentWillMount() { }
  componentDidMount() {
    // this.props.detail.getProductDetail({ pid: 549 });
    // console.log(this.props);
  }

  componentWillUnmount() { }

  config = {
    navigationBarTitleText: '我的订单'
  }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidShow() { }

  componentDidHide() { }

  increment = () => {

  }

  render() {
    console.log("获取到的数据",this.props.detail)
    return (
      <View className="myOrederBox">
          <View className="header">
              <Text>全部</Text>
              <Text>待付款</Text>
              <Text>代发货</Text>
              <Text>待收货</Text>
          </View>

          <View className="mainList">
              
          </View>
      
         
      </View>
    )
  }
}

export default CommodityDetail 
