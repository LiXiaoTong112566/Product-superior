/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 20:16:40
 * @LastEditTime: 2019-08-12 20:38:13
 * @LastEditors: Please set LastEditors
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import style from './shoppingCar.module.scss';


@inject('counterStore')
@observer
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
