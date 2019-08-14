import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import './mine.scss'

import logBg from "../../static/images/logBg.png"
import dfh from "../../static/images/dfh.png"
import dfk from "../../static/images/dfk.png"
import dsh from "../../static/images/dsh.png"
import dz from "../../static/images/dz.png"
import jt from "../../static/images/jt.png"
import kf from "../../static/images/kf.png"
import sm from "../../static/images/sm.png"
import yhj from "../../static/images/yhj.png"

class Mine extends Component {
  componentWillMount() { }
  componentDidMount() { }
  componentWillUnmount() { }

  config = {
    navigationBarTitleText: '个人中心'
  }

  componentWillReact() {
  
  }

  componentDidShow() { }

  componentDidHide() { }

 



  render() {
    return (
      <View className="minewrap">
          <Image className="logbg" src={logBg}/>
          <View className="invitation">
             <Text>邀请码：</Text>
             <Text>复制</Text>
          </View>
          <View className="location">
              <View className="order">
                 <View className="myOrder">我的订单</View>
                 <View className="dlsOrder">
                   <View className="dls">
                      <Image className="dts" src={dfk}/>
                      <Text>代付款</Text>
                   </View>
                   <View className="dls">
                      <Image className="dts" src={dfh}/>
                      <Text>代发货</Text>
                   </View>
                   <View className="dls">
                      <Image className="dts" src={dsh}/>
                      <Text>代收货</Text>
                   </View>
                 </View>
              </View>
              <View className="newsList">
                  <View className="list">
                    <Image className="dts" src={yhj}/>
                    <Text>我的优惠劵</Text>
                    <Image className="dts" src={jt}/>
                  </View>
                  <View className="list">
                    <Image className="dts" src={dz}/>
                    <Text>收货地址</Text>
                    <Image className="dts" src={jt}/>
                  </View>
                  <View className="list">
                    <Image className="dts" src={kf}/>
                    <Text>联系客服</Text>
                    <Image className="dts" src={jt}/>
                  </View>
                  <View className="list">
                    <Image className="dts" src={sm}/>
                    <Text>实名认证</Text>
                    <Image className="dts" src={jt}/>
                  </View>
              </View>
          </View>
      </View>
    )
  }
}

export default Mine 
