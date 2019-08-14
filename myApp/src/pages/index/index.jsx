import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, ScrollView, Image, Swiper, SwiperItem } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import style from './index.module.scss'
import search from '../../static/images/search.png'

@inject('home')
@observer

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navlist: [],
      sectionList: []
    }
  }

  componentDidMount() {
    Taro.request({
      url: 'https://upapi.jinaup.com/api/open/product/category/query/1',
      header: {
        'content-type': 'application/json',
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
   
    return (
      <View className={style.index}>
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
      </View>
    )
  }
}

export default Index 
