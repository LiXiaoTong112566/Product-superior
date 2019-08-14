import Taro , { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer , inject } from '@tarojs/mobx'


import './delivery.scss'

class Delivery extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View className='wrap_delivery'>
              <View className='delivery_left'>
                  <View className='delivery_name'>
                    <p>李小冉</p>
                    <p>15825478997</p>
                  </View>
                  <View className='delivery_default'>
                    <span>默认</span>
                    <p><b>[家]</b>北京是朝阳区焦化厂小区3号楼2单元1005</p>
                  </View>
              </View>
              <View className='delivery_right'>
                <View className='delivery_compile'>
                  编辑
                </View>
              </View>
           </View>
        )
    }
}
export default Delivery