import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
import style from './commodityDetails.module.scss'
import SwiperComponent from "../../components/swiperComponent/swiperComponent.jsx";
import Count from "../../components/count/count.jsx";
import Purchase from "../../components/purchase/purchase.js";
console.log("购物",Purchase)
import vipImage from "../../static/images/黑卡@2x.png";
@inject('detail')
@observer
class CommodityDetail extends Component {
  componentWillMount() { }
  componentDidMount() {
    console.log(this.$router.params.id)
    this.props.detail.getProductDetail({ pid: 549 });
    this.props.detail.getdetailPicture({pid:549,basePid:549,userIdentity: 2});
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
    console.log('componentWillReact');
  }

  componentDidShow() { }

  componentDidHide() { }

  increment = () => {

  }

  render() {
    console.log("获取到的数据",this.props.detail.productDetail);
    let {productDetail,detailPictureData,checkedColor}=this.props.detail;
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
              <View>￥{productDetail&&productDetail.marketPrice}</View>
              <View className={style.salePrice}>{productDetail.salesPrice&&productDetail.salesPrice}</View>
              <Image className={style.img} src={vipImage}></Image>
            </View>
            <View className={style.priceRight}>
              分享赚1.98
          </View>
          </View>
          {/* 商品的标题 */}
          <View className={style.title}>
            {productDetail.title&&productDetail.title}
        </View>
          <View className={style.express}>快递包邮</View>

          {/* 选择规格 */}
          <View className={style.dimensions} onClick={()=>this.showCountFn()}>
            <View className={style.dimensionsLeft}>
              <View>选择</View>
              <View>规格</View>
            </View>
            <View className={style.dimensionsRight}>
            {checkedColor}
          </View>
          </View>
          <View className={style.clue}>
            <View className={style.reminder}>提示:
          </View>
            <Text className={style.content}>西藏自治区,新疆维吾尔自治区不包邮,运费加13.00元</Text>
          </View>

          {/* 内容 */}
          <View className={style.main}>
           {detailPictureData&&detailPictureData.map((item,index)=>{
             return <Image  key={item.pid} style={{height:item.imgHeight+"px" }}src={item.imgUrl}></Image>
           })}
          </View>
        </View>
        {console.log("数量123",this.props.detail.countFlag)}
           {console.log("数量123",this.props.detail.shoppingFlag)}
        {/* 购物车弹窗 */}
        {this.props.detail.shoppingFlag?<Purchase></Purchase>:""}
          {/* 添加数量弹窗*/}
          {this.props.detail.countFlag?<Count></Count>:""}
          
          
        
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
