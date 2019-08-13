import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import style from './index.module.scss'


@inject('counterStore')
@observer
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
    const { counterStore } = this.props
    counterStore.increment()
  }



  render() {
    const { counterStore: { counter } } = this.props
    return (
      <View className={style.index}>
        {/* <Button onClick={this.increment}>+</Button>
        <Text>{counter}</Text> */}
      </View>
    )
  }
}

export default Index 
