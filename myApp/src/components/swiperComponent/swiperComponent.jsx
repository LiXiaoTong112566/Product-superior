import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Swiper, SwiperItem } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

// import style from './commodityDetail.module.scss'


@inject('counterStore')
@observer
class SwiperComponent extends Component {
  componentWillMount() { }
  componentDidMount() { }
  componentWillUnmount() { }

  config = {
    navigationBarTitleText: '商品详情'
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
      <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#f90'
        circular
        indicatorDots
        autoplay>
        <SwiperItem>
          <View className='demo-text-1'>1</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'>2</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3'>3</View>
        </SwiperItem>
      </Swiper>
    )
  }

}
  export default SwiperComponent
