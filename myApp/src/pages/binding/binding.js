import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Input } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './binding.scss'
import Delivery from '../../components/delivery/delivery'

// @inject('counterStore')
// @observer
class Index extends Component {
  config = {
    navigationBarTitleText: '绑定手机号'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
    console.log('bjkjknknk')
  }

  componentDidMount () { }

  componentWillUnmsount () { }

  componentDidShow () { }

  componentDidHide () { }


  render () {
    return (
        <View className='example'>
            <View className="inputa">
                <Text>手机号</Text>
                <Input type='text' placeholder='最大输入长度为 11' maxLength='11'/>
            </View>
            <View className="inputa">
                <Text>验证码</Text>
                <Input type='text' placeholder='最大输入长度为 10'/>
                <Text className="verification">59s重新发送</Text>
            </View>

            <View className="btn">验证后绑定新手机</View>
        </View>  
    )
  }
}

export default Index 
