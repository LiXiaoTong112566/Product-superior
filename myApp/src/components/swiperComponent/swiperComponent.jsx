import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import "./swiper.Componentmodule.scss";
@inject('detail')
@observer
class SwiperComponent extends Component {
  componentWillMount() { }
  componentDidMount() { 
    let id=this.props.dataId;
    console.log(id);
    this.props.detail.getProductDetail({ pid: id });


  }
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
    // console.log("创优来的数据", this.props);
    // let { productDetail } = this.props.data;
    // console.log("获取到的图片数据", productDetail);
    return (
    <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay>
        {
           this.props.detail.productDetail.supplierProductPictureVoList&&this.props.detail.productDetail.supplierProductPictureVoList.map((item, index) => {
            return <SwiperItem>  <View className='demo-text-1' key={item.ppid}><Image src={item.imgUrl} alt="" /></View></SwiperItem>
          })
        }
     </Swiper>
       
      //  :<Swiper className='test-h'
      //   indicatorColor='#999'
      //   indicatorActiveColor='#333'
      //   circular
      //   indicatorDots
      //   autoplay><SwiperItem><View className='demo-text-1' key={item.ppid}><Image src={productDetail.mainImgUrl} alt="" /></View></SwiperItem></Swiper> 
    )
  }

}
export default SwiperComponent
