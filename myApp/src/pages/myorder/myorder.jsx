/* 我的订单 */

import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
// import { observer, inject } from '@tarojs/mobx'
// import wudingdan from '../../static/images/wudingdan.png'
import bigimg from '../../img/baobao.jpg'

import './myorder.module.scss'

// @inject('counterStore')
// @observer
class Myorder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headList: ['全部', '待付款', '待发货', '待收货'],
      ind: 0
    }
  }
  // componentWillMount() { }
  // componentDidMount() { }
  // componentWillUnmount() { }
  // componentWillReact() {
  // console.log('componentWillReact')
  // }
  config = {
    navigationBarTitleText: '我的订单'
  }
  // componentDidShow() { }

  // componentDidHide() { }
  tabclick(ind) {
    this.setState({
      ind: ind
    })
  }
  render() {
    // console.log(this.state)
    return (
      <View className='wrap'>
        <View className='header'>
          {
            this.state.headList.map((item, i) => {
              return <View key={i} className={this.state.ind === i ? 'headitem active' : 'headitem'} onClick={this.tabclick.bind(this, i)}>{item}</View>
            })
          }
        </View>
        <View className='con'>
          <View className='conitem'>
            <View className='conitemtop'>
              <View className='time'>2019-01-17 17:18:50</View>
              <View className='status'>待发货</View>
            </View>
            <View className='info'>
              <Image src={bigimg} className='img'></Image>
              <View className='infocon'>
                <View>帮宝适绿帮纸尿裤大号的看法内开内倒不能地方不能</View>
                <View>规格：XL</View>
                <View>
                  <View>￥52.50</View>
                  <View>x1</View>
                </View>
              </View>
              <View>共2件商品 合计：￥52.50</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Myorder 
