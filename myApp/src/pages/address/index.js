import Taro, { Component } from '@tarojs/taro'
import { View , Picker } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'
import xiayibu from '../../img/下一步.svg'
import { AtForm, AtSwitch } from 'taro-ui'
// @inject('city')
// @observer

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
        value: false,
        selector: ['美国', '中国', '巴西'],
        selectorChecked: '美国',
    }
  }
  config = {
    navigationBarTitleText: '收货地址'
  }

  componentWillMount () { }

  componentWillReact () {
     
  }

  componentDidMount () { 
    //  console.log(this.props.city.getCity(),'333333')
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { } 
  handleChange = value => {
    this.setState({ value })
  }
  render () {
    return (
      <View className='wrap'>
        <View className='main'>
            <View className='name'>
                <input type="text" placeholder='收货人' />
                <Image src={xiayibu} />
            </View>
            <View className='phone'>
                <input type="text" placeholder='手机号码' />
                <Image src={xiayibu} />
            </View>
            <View className='region'>
                <View className='picker'>
                  <Picker mode='multiSelector' range={this.state.selector} onChange={this.onChange}>
                    <View className='picker'>
                    所在地区:{this.state.selectorChecked}
                    </View>
                  </Picker>
                </View>
                <Image src={xiayibu} />
            </View>
            <View className='detailedness'>
                <textarea placeholder="详细地址：如道路,门牌号,小区,楼栋号,单元室等"  rows="3" type="text" />
            </View>
        </View>
        <View className='conter'>
            <span>标签</span>
            <View className='conter_cont'>
                <View className='cont_all'>家</View>
                <View className='cont_all'>公司</View>
                <View className='cont_all'>学校</View>
                <View className='cont_all'>其他</View>
            </View>
            <View className='conter_footer'>
                <View className='cont_default'>设为默认地址</View>
                <View className='indicate' >
                    <AtForm>
                        <AtSwitch checked={this.state.value} onChange={this.handleChange} />
                    </AtForm>
                </View>
            </View>
        </View>
        <View className='footer_bt'>
            <View className='delete'>删除收货信息</View>
            <View className='save'>保存</View>
        </View>
      </View>
    )
  }
}

export default Index 
