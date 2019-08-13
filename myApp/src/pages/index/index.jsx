import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import style from './index.module.scss'




class Index extends Component {
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

  increment = () => {
  
  }



  render() {
  
    return (
      <View>
      
      </View>
    )
  }
}

export default Index 
