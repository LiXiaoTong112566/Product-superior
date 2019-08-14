import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, ScrollView, Image, Swiper, SwiperItem } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import style from './index.module.scss'
import search from '../../static/images/search.png'

// @inject('home')
// @observer

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navlist: [],
      footerList: [],
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
      url: 'https://upapi.jinaup.com/api/open/page/home/list/1.0.0',
      header: {
        'content-type': 'application/json',
        'trackId': 'F649B34989975F2672F778DFE1F6CC7C0A012572F93A8D44E9E2E6A43B0D64EF5B753BD95E281A12FB6E2657CA3C322C8EDD48AD88C1D895AA882EE69AF51E209A101AD4A318BF41E54B13C189A368B3080D4CB37654208721AA2141D76141878B4F2F23C363A567319335B0AF520D12'

      },
      method: 'POST',
      success: (res) => {
        this.setState({
          sectionList: res.data.result
        })
      }
    })

    Taro.request({
      url: 'https://upapi.jinaup.com/api/open/page/home/products/1.0.0',
      header: {
        'content-type': 'application/json',
        'trackId': 'F649B34989975F2672F778DFE1F6CC7C0A012572F93A8D44E9E2E6A43B0D64EF5B753BD95E281A12FB6E2657CA3C322C8EDD48AD88C1D895AA882EE69AF51E209A101AD4A318BF41E54B13C189A368B3080D4CB37654208721AA2141D76141878B4F2F23C363A567319335B0AF520D12'

      },
      method: 'POST',
      success: (res) => {
        console.log(res.data.result)
        this.setState({
          footerList: res.data.result
        })
      }
    })

  }
  componentWillUnmount() { }

  config = {
    navigationBarTitleText: '首页',
    navigationBarBackgroundColor: '#fff'
  }
  //头部nav导航跳转页面方法
  navjina(id) {
    Taro.navigateTo({
      url:"/pages/indexList/indexList"
    })
  }

  componentWillReact() {
    console.log('componentWillReact')
  }
  componentDidShow() { }
  componentDidHide() { }
  increment = () => {}
  SwiperItem(id){
    Taro.navigateTo({
      url:`/pages/special/special?id=${id}`
    })
    console.log(id,'id')
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
          interval='2000'
          autoplay
        >
          {
            this.state.sectionList[0]&&this.state.sectionList[0].items.map((item) => {
              return <SwiperItem key={item.contentValue} >
                {/* <View>sff</View> */}
                <Image style='width: 100%;height: 100%;border-radius:5px;' src={item.imgUrl} onClick={this.SwiperItem.bind(this,item.contentValue)}></Image>
              </SwiperItem>
            })
          }
        </Swiper>
        {/* 会员专区 */}
        <View className={style.section}>
          <View className={style.sNav}>
            {
              this.state.sectionList[1]&&this.state.sectionList[1].items.map((item) => {
                return <View key={item.contentValue} className={style.contentValue}  onClick={this.SwiperItem.bind(this,item.contentValue)}>
                  <View className={style.sNavimgWrap}>
                    <Image src={item.imgUrl} className={style.sNavimg}></Image>
                  </View>
                  <View className={style.sNavTxt}>{item.title}</View>
                </View>
              })
            }
          </View>
          {/* 今日爆品 */}
          <Image className={style.bigbanner} src={this.state.sectionList[2] && this.state.sectionList[2].pictUrl} ></Image>
          {/* 月饼盒 */}
          <Image className={style.bigbanner} src={this.state.sectionList[4] && this.state.sectionList[4].pictUrl} ></Image>
          <View className={style.jingxuan}>
            <View className={style.jingxuanTop}>
              <View className={style.jx}>精选好物 | 等你来抢</View>
              <View className={style.more}>更多&gt;</View>
            </View>
           {/* 月饼盒的列表 */}
            <View className={style.jingxuancon}>
              {
                this.state.sectionList[5]&&this.state.sectionList[5].items.map((item, i) => {
                  return <View className={style.jingxuanItem} key={i}>
                    <View className={style.jingxuanimgbox}>
                      <Image src={item.imgUrl} className={style.jingxuanimg}></Image>
                    </View>
                    <View className={style.title}>{item.title}</View>
                    <View className={style.salesPrice}>￥{item.salesPrice}</View>
                  </View>
                })
              }
            </View>
          </View>
          {/* 电器 */}
          <Image className={style.bigbanner} src={this.state.sectionList[6] && this.state.sectionList[6].pictUrl}  onClick={this.SwiperItem.bind(this,226)}></Image>
          <View className={style.jingxuan}>
            <View className={style.jingxuanTop}>
              <View className={style.jx}>精选好物 | 等你来抢</View>
              <View className={style.more}>更多&gt;</View>
            </View>
            {/* 电器的列表 */}
            <View className={style.jingxuancon}>
              {
                this.state.sectionList[7]&&this.state.sectionList[7].items.map((item, i) => {
                  return <View className={style.jingxuanItem} key={i}>
                    <View className={style.jingxuanimgbox}>
                      <Image src={item.imgUrl} className={style.jingxuanimg}></Image>
                    </View>
                    <View className={style.title}>{item.title}</View>
                    <View className={style.salesPrice}>￥{item.salesPrice}</View>
                  </View>
                })
              }
            </View>
          </View>
          {/* 进口 */}
          <Image className={style.bigbanner} src={this.state.sectionList[8] && this.state.sectionList[8].pictUrl} onClick={this.SwiperItem.bind(this,223)}></Image>
          <View className={style.jingxuan}>
            <View className={style.jingxuanTop}>
              <View className={style.jx}>精选好物 | 等你来抢</View>
              <View className={style.more}>更多&gt;</View>
            </View>
            {/* 进口列表 */}
            <View className={style.jingxuancon}>
              {
                this.state.sectionList[9]&&this.state.sectionList[9].items.map((item, i) => {
                  return <View className={style.jingxuanItem} key={i}>
                    <View className={style.jingxuanimgbox}>
                      <Image src={item.imgUrl} className={style.jingxuanimg}></Image>
                    </View>
                    <View className={style.title}>{item.title}</View>
                    <View className={style.salesPrice}>￥{item.salesPrice}</View>
                  </View>
                })
              }
            </View>
          </View>
          {/* 小孩汽车 */}
          <Image className={style.bigbanner} src={this.state.sectionList[10] && this.state.sectionList[10].pictUrl} onClick={this.SwiperItem.bind(this,224)}></Image>
          <View className={style.jingxuan}>
            <View className={style.jingxuanTop}>
              <View className={style.jx}>精选好物 | 等你来抢</View>
              <View className={style.more}>更多&gt;</View>
            </View>
            {/* 小孩汽车的列表 */}
            <View className={style.jingxuancon}>
              {
                this.state.sectionList[11]&&this.state.sectionList[11].items.map((item, i) => {
                  return <View className={style.jingxuanItem} key={i}>
                    <View className={style.jingxuanimgbox}>
                      <Image src={item.imgUrl} className={style.jingxuanimg}></Image>
                    </View>
                    <View className={style.title}>{item.title}</View>
                    <View className={style.salesPrice}>￥{item.salesPrice}</View>
                  </View>
                })
              }
            </View>
          </View>
          {/* 女性脸部用品 */}
          <Image className={style.bigbanner} src={this.state.sectionList[12] && this.state.sectionList[12].pictUrl} onClick={this.SwiperItem.bind(this,225)}></Image>
          <View className={style.jingxuan}>
            <View className={style.jingxuanTop}>
              <View className={style.jx}>精选好物 | 等你来抢</View>
              <View className={style.more}>更多&gt;</View>
            </View>
            {/* 女性脸部用品的列表 */}
            <View className={style.jingxuancon}>
              {
                this.state.sectionList[13]&&this.state.sectionList[13].items.map((item, i) => {
                  return <View className={style.jingxuanItem} key={i}>
                    <View className={style.jingxuanimgbox}>
                      <Image src={item.imgUrl} className={style.jingxuanimg}></Image>
                    </View>
                    <View className={style.title}>{item.title}</View>
                    <View className={style.salesPrice}>￥{item.salesPrice}</View>
                  </View>
                })
              }
            </View>
          </View>
        </View>
        {/* <View className={style.footer}>
          <View className={style.jx}>精选好物 | 等你来抢</View>
        </View> */}
      </View>
    )
  }
}

export default Index 
