import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
import style from './commodityDetails.module.scss'
import SwiperComponent from "../../components/swiperComponent/swiperComponent.jsx";

@inject('counterStore')
@observer
class CommodityDetail extends Component {
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
      <View className={style.commodityDetailBox}>
        {/* 主要的内容 */}
        <View className={style.boxMain}>
          {/* 录播图 */}
          <View className={style.swiperBox}>
            <SwiperComponent></SwiperComponent>
          </View>

          {/* 价格 */}
          <View className={style.priceBox}>
            <View className={style.priceLeft}>
              <View>￥</View>
              <View> 73.02</View>
              <View></View>
            </View>
            <View className={style.priceRight}>
              分享赚1.98
          </View>
          </View>
          {/* 商品的标题 */}
          <View className={style.title}>
            澳洲直邮的面霜 澳洲直邮的面霜 澳洲直邮的面霜
        </View>

          {/* 选择规格 */}
          <View className={style.dimensions}>
            <View className={style.dimensionsLeft}> 
              <View>选择</View>
              <View>规格</View>
            </View>
            <View className={style.dimensionsRight}>
              确认
          </View>
          </View>
          <view className={style.reminder}>提示:</view>
          {/* 内容 */}
          <view className={style.main}>
            主题的内容
          </view>
        </View>

        <view className={style.footer}>
        <view className={style.footer}>
  分享赚1.98
        </view>
        <view className={style.footer}>
      立即购买
        </view>

        </view>
      </View>
    )
  }
}

export default CommodityDetail 
