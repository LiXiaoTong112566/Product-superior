import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, ScrollView, Image, Swiper, SwiperItem } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import style from './index.module.scss'
<<<<<<< HEAD
import search from '../../static/images/search.png'
=======
>>>>>>> hmm

@inject('home')
@observer

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navlist: [],
     
    }
  }

  componentWillMount() { }
  componentDidMount() { 
    Taro.request({
      url: 'https://upapi.jinaup.com/api/open/product/category/query/1',
      header: {
        'content-type': 'application/json',
        // 'Referer': 'https://servicewechat.com/wx83bc9634cac116c5/devtools/page-frame.html',
        // 'User- Agent': 'Mozilla/ 5.0(iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit / 601.1.46(KHTML, like Gecko) Version / 9.0 Mobile / 13B143 Safari / 601.1 wechatdevtools / 1.02.1905230 MicroMessenger / 6.7.3 Language / zh_CN webview /',
       //  'trackId': 'F649B34989975F268EA5BC4927E7C2365DBB8293767D955992FF410009F6B2DE301BCDFBE166230EBF083C72B5B6A948277C0041980DAC5E46FA1EF475B12D4773F05A5E984CF1D814817C9546DF831BF9D9BD6C1F2231AFA450731B6837E7084E77DC9918A436BC'
      },
      method:'POST',
      success:(res)=>{
        console.log(res)
      }
    })
  }
  componentWillUnmount() { }

  config = {
    navigationBarTitleText: '首页',
    navigationBarBackgroundColor: '#fff'
  }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidShow() { }

  componentDidHide() { }

  // increment = () => {
  //   const { counterStore } = this.props
  //   counterStore.increment()
  // }



  render() {
    // const { counterStore: { counter } } = this.props
    return (
      <View className={style.index}>
<<<<<<< HEAD
        <Image src={search} className={style.search} />
        {/* 头部nav */}
        <ScrollView
          className={style.scrollview}
          scrollX
          scrollWithAnimation
        >
          <View className={style.scrollwrap}>
            <View className={style.tuijian}>今日推荐</View>
            {
              this.state.navlist.map((item, i) => {
                return <View key={i} className={style.headitem}>{item}</View>
              })
            }
          </View>
        </ScrollView>
        {/* 头部轮播图 */}
        <Swiper
          className='swiper'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <View className='demo-text-1'>1</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2'>2</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3'>3</View>
          </SwiperItem>
        </Swiper>
        <View className={style['s-nav']}>
            
        </View>
=======
        {/* <Button onClick={this.increment}>+</Button>
        <Text>{counter}</Text> */}
>>>>>>> hmm
      </View>
    )
  }
}

export default Index 
