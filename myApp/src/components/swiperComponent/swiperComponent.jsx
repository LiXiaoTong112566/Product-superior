import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Swiper, SwiperItem,Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import "./swiper.Componentmodule.scss";
@inject('detail')
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
   
  }

  render() {
   
    let {productDetail}=this.props.detail;
    console.log("获取到的图片数据",productDetail);
    return (
      <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#f90'
        circular
        indicatorDots
        autoplay>
        <SwiperItem>
          <View className='demo-text-1'><Image src={productDetail.mainImgUrl} alt=""/></View>
        </SwiperItem>
    
      </Swiper>
    )
  }

}
  export default SwiperComponent
