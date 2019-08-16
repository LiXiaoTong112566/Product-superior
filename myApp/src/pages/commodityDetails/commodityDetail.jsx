import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
import style from './commodityDetails.module.scss'
import SwiperComponent from "../../components/swiperComponent/swiperComponent.jsx";
import Count from "../../components/count/count.jsx";
import Purchase from "../../components/purchase/purchase.js";
console.log("购物", Purchase)
import vipImage from "../../static/images/黑卡@2x.png";
@inject('detail')
@observer
class CommodityDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checkedColor: "",
    }

  }
  componentWillMount() { }
  componentDidMount() {


    let id = this.$router.params.id;
    this.props.detail.getProductDetail({ pid: id });
    this.props.detail.getdetailPicture({ pid: id, basePid: id, userIdentity: 2 });
    //获取规格里面的数据
    this.props.detail.getskuAttrs({ pid: id });


  }

  shopFn() {
    let id = this.$router.params.id;
    let { skuAttrsData, checkedColor } = this.props.detail;

    let vid = skuAttrsData[0].attributeValueRelationVoList[0].vid;

    this.props.detail.getskuQuery({ pid: id, vids: `[${vid}]` })
    this.props.detail.showShop();
  }
  //数量的弹窗的显示
  showCountFn() {
    let id = this.$router.params.id;
    let { skuAttrsData, checkedColor } = this.props.detail;

    let vid = skuAttrsData[0].attributeValueRelationVoList[0].vid;
    //this.props.detail.getProductDetail({pid:id});
    this.props.detail.getskuQuery({ pid: id, vids: `[${vid}]` })
    this.props.detail.showCount();
    this.props.detail.checkedColor=">";
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
    let id = this.$router.params.id;
    console.log("获取到的数据", this.props.detail.productDetail);
    let { productDetail, detailPictureData } = this.props.detail;
    return (
      <View className={style.commodityDetailBox}>
        {/* 主要的内容 */}
        <View className={style.boxMain}>
          {/* 录播图 */}
          <View className={style.swiperBox}>
            <SwiperComponent dataId={id}></SwiperComponent>
          </View>

          {/* 价格 */}
          <View className={style.priceBox}>
            <View className={style.priceLeft}>
              <View>￥{productDetail && productDetail.marketPrice}</View>
              <View className={style.salePrice}>{productDetail.salesPrice && productDetail.salesPrice}</View>
              <Image className={style.img} src={vipImage}></Image>
            </View>
            <View className={style.priceRight}>
              分享赚1.98
          </View>
          </View>
          {/* 商品的标题 */}
          <View className={style.title}>
            {productDetail.title && productDetail.title}
          </View>
          <View className={style.express}>快递包邮</View>

          {/* 选择规格 */}
          <View className={style.dimensions} onClick={() => this.showCountFn()}>
            <View className={style.dimensionsLeft}>
              <View>选择</View>
              <View>规格</View>
            </View>
            <View className={style.dimensionsRight}>
              {this.props.detail.checkedColor}
            </View>
          </View>
          <View className={style.clue}>
            <View className={style.reminder}>提示:
          </View>
            <Text className={style.content}>西藏自治区,新疆维吾尔自治区不包邮,运费加13.00元</Text>
          </View>

          {/* 内容 */}
          <View className={style.main}>
            {detailPictureData && detailPictureData.map((item, index) => {
              return <Image key={item.pid} style={{ height: item.imgHeight + "px" }} src={item.imgUrl}></Image>
            })}
          </View>
        </View>
        {console.log("数量123", this.props.detail.countFlag)}
        {console.log("数量123", this.props.detail.shoppingFlag)}
        {/* 购物车弹窗 */}
        {this.props.detail.shoppingFlag ? <Purchase></Purchase> : ""}
        {/* 添加数量弹窗*/}
        {this.props.detail.countFlag ? <Count></Count> : ""}



        <View className={style.footer}>
          <View className={style.share}>
            分享赚1.98
        </View>
          <View className={style.shop} onClick={() => this.shopFn()}>
            立即购买
        </View>
        </View>
      </View>
    )
  }
}

export default CommodityDetail 
