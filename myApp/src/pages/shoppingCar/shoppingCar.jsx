import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './shoppingCar.scss'
import svgd from '../../img/椭圆形-为勾选.svg'
import svg from '../../img/椭圆形-为勾选(1).svg'

import Cart from '../../components/cart'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: false
    }
  }


  componentWillMount() { }



  componentDidMount() { }

  componentWillUnmount() { }
  componentWillReact() {
    // console.log('componentWillReact')
  }
  config = {
    navigationBarTitleText: '购物车'
  }
  componentDidShow() { }

  componentDidHide() { }
  checkedAll() {
    this.setState({
      flag: !this.state.flag
    })
  }
  render() {
    // console.log(this.state)
    return (
      <View className='wrap'>
        <View className='main'>
          <Cart></Cart>
        </View>
        <View className='cart_footer'>
          <View className='cart_checked'>
            <View className='cart_span' onClick={() => this.checkedAll()}>
              {this.state.flag === false ? <Image src={svg}></Image> : <Image src={svgd}></Image>}
            </View>
            <p>全选</p>
          </View>
          <View className='aggregate'>
            <p>总计：<span>¥198.8</span></p>
          </View>
          <View className='cart_footer_button'>
            <span>完成</span>
            <span>删除</span>
          </View>
        </View>
        <View className='footer'>123333</View>
      </View>
    )
  }
}

export default Index 
