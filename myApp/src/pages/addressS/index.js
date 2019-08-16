import Taro, { Component } from '@tarojs/taro'
import { View , Picker } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import "./index.scss"
class Index extends Component {
  config = {
    navigationBarTitleText: '收货地址'
  }

  componentWillMount () { }

  componentWillReact () {
     
  }

  componentDidMount () { 
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { } 
  bth(){
    Taro.navigateTo({
      url:'/pages/address/index'
    })
  }
  render () {
    return (
       <View className="btn" onClick={this.bth.bind(this)}>新增收货地址</View>
    )
  }
}

export default Index 
