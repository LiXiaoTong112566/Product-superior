import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import style from './mine.module.scss'

//import style from './mine.module.scss'


class Mine extends Component {
  componentWillMount() { }
  componentDidMount() { }
  componentWillUnmount() { }

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReact() {
  
  }

  componentDidShow() { }

  componentDidHide() { }

 



  render() {
    return (
      <View className={style.minewrap}>
        
      </View>
    )
  }
}

export default Mine 
