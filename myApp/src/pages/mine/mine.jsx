import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import style from './mine.module.scss'


class Mine extends Component {
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
<<<<<<< HEAD
      <View className={style.mine}>
=======
      <View className={style.minewrap}>
>>>>>>> hmm
        
      </View>
    )
  }
}

export default Mine 
