import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import style from './shoppingCar.module.scss'


class ShoppingCar extends Component {
  componentWillMount() { }
  componentDidMount() { }
  componentWillUnmount() { }

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidShow() { }

  componentDidHide() { }


  render() {
    return (
      <View className={style.shoppingcarwrap}>
       
      </View>
    )
  }
}

export default ShoppingCar 
