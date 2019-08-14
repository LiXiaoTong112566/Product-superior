import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
import style from './commodityDetails.module.scss'
import SwiperComponent from "../../components/swiperComponent/swiperComponent.jsx";
import Count from "../../components/count/count.jsx";
import Purchase from "../../components/purchase/purchase.js";
console.log("购物",Purchase)

@inject('detail')
@observer
class CommodityDetail extends Component {
  componentWillMount() { }
  componentDidMount() {
    this.props.detail.getProductDetail({ pid: 549 });
    console.log(this.props);
  }

  shopFn(){
    this.props.detail.showShop();
  }
//数量的弹窗的显示
showCountFn(){
  this.props.detail.showCount();
};

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

  }

  render() {
    console.log("获取到的数据",this.props.detail)
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
              <View>￥75</View>
              <View> 73.02</View>
              <Image src=""></Image>
            </View>
            <View className={style.priceRight}>
              分享赚1.98
          </View>
          </View>
          {/* 商品的标题 */}
          <View className={style.title}>
            澳洲直邮的面霜 澳洲直邮的面霜 澳洲直邮的面霜
        </View>
          <View className={style.express}>快递包邮</View>

          {/* 选择规格 */}
          <View className={style.dimensions} onClick={()=>this.showCountFn()}>
            <View className={style.dimensionsLeft}>
              <View>选择</View>
              <View>规格</View>
            </View>
            <View className={style.dimensionsRight}>
              确认
          </View>
          </View>
          <View className={style.clue}>
            <View className={style.reminder}>提示:
          </View>
            <Text className={style.content}>新疆地区包邮</Text>
          </View>

          {/* 内容 */}
          <View className={style.main}>
            主题的内容
          </View>
        </View>
        {console.log("数量123",this.props.detail.countFlag)}
          {/* 添加数量弹窗*/}
          {this.props.detail.countFlag?<Count></Count>:""}
          
          {/* 购物车弹窗 */}
          {this.props.detail.shoppingFlag?<Purchase></Purchase>:""}
        
        <View className={style.footer}>
          <View className={style.share}>
            分享赚1.98
        </View>
          <View className={style.shop} onClick={()=>this.shopFn()}>
            立即购买
        </View>
        </View>
      </View>
    )
  }
}

export default CommodityDetail 
