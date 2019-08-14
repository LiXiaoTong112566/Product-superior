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
<<<<<<< HEAD
     
=======
      sectionList: []
>>>>>>> dzh
    }
  }

  componentDidMount() {
    Taro.request({
      url: 'https://upapi.jinaup.com/api/open/product/category/query/1',
      header: {
        'content-type': 'application/json',
<<<<<<< HEAD
        // 'Referer': 'https://servicewechat.com/wx83bc9634cac116c5/devtools/page-frame.html',
        // 'User- Agent': 'Mozilla/ 5.0(iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit / 601.1.46(KHTML, like Gecko) Version / 9.0 Mobile / 13B143 Safari / 601.1 wechatdevtools / 1.02.1905230 MicroMessenger / 6.7.3 Language / zh_CN webview /',
       //  'trackId': 'F649B34989975F268EA5BC4927E7C2365DBB8293767D955992FF410009F6B2DE301BCDFBE166230EBF083C72B5B6A948277C0041980DAC5E46FA1EF475B12D4773F05A5E984CF1D814817C9546DF831BF9D9BD6C1F2231AFA450731B6837E7084E77DC9918A436BC'
=======
>>>>>>> dzh
      },
      method: 'POST',
      success: (res) => {
        this.setState({
          navlist: res.data.result
        })
      }
    })

    Taro.request({
      url: 'https://upapi.jinaup.com/api/open/page/home/products/1.0.0',
      header: {
        'content-type': 'application/json',
      },
      method: 'POST',
      success: (res) => {
        // console.log(res)
      }
    })

    Taro.request({
      url: 'https://upapi.jinaup.com/api/open/page/home/list/1.0.0',
      header: {
        'content-type': 'application/json',
      },
      method: 'POST',
      success: (res) => {
        console.log(res.data.result)
        this.setState({
          sectionList: res.data.result
        })
      }
    })
  }
  componentWillUnmount() { }

  // request(url,method){
  //   Taro.request({
  //     url: url,
  //     header: {
  //       'content-type': 'application/json',
  //     },
  //     method: method,
  //     success: (res) => {
  //       this.setState({
  //         navlist: res.data.result
  //       })
  //     }
  //   })
  // }
  config = {
    navigationBarTitleText: '首页',
    navigationBarBackgroundColor: '#fff'
  }
  //头部nav导航跳转页面方法
  navjina(cid) {
    console.log(cid)
  }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidShow() { }

  componentDidHide() { }

  increment = () => {
  
  }



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
              this.state.navlist.map((item) => {
                return <View key={item.cid} className={style.headitem} onClick={() => this.navjina(item.cid)}>{item.cname}</View>
              })
            }
          </View>
        </ScrollView>
        {/* 头部轮播图 */}
        <Swiper
          className={style.swiper}
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
        >
          {
            this.state.sectionList[0].items.map((item) => {
              return <SwiperItem key={item.contentValue} >
                {/* <View>sff</View> */}
                <Image style='width: 100%;height: 100%;border-radius:5px;' src={item.imgUrl}></Image>
              </SwiperItem>
            })
          }
        </Swiper>
        <View className={style.section}>
            <View className>

            </View>
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
