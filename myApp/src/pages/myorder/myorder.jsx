/* 我的订单 */

import Taro, { Component } from '@tarojs/taro'
import { View, Image, Canvas } from '@tarojs/components'
// import { observer, inject } from '@tarojs/mobx'
// import wudingdan from '../../static/images/wudingdan.png'
import bigimg from '../../img/baobao.jpg'

import './myorder.module.scss'

// @inject('counterStore')
// @observer
class Myorder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headList: ['全部', '待付款', '待发货', '待收货'],
      ind: 0
    }
  }
  componentWillMount() {
    const result = {
     
      "title": "内含哈密瓜味月饼5个、凤梨味5个、蛋黄香芋味月饼3个、蛋黄红豆味月饼3个",
      "shortTitle": "BY-HEALTH 汤臣倍健 牛乳钙片压片糖果 60片/瓶",
     
      mainImgUrl: "https://jnup.oss-cn-beijing.aliyuncs.com/product/a911cc3d771d0cef5fca95e441976a3e.jpg",
      "supplierProductPictureVoList": [{
        "ppid": 686204,
        "pid": 37253,
        "imgType": 1,
        "imgUrl": "http://haitao.nos.netease.com/e7e0936a25764af6b31fba26f311c4c11525954376593jh0hu4ig13297.jpg",
        "imgWidth": null,
        "imgHeight": null,
        "sortId": 1,
        "state": 1,
        "createTime": 1555563892000,
        "updateTime": 1555583277000
      }, {
        "ppid": 686205,
        "pid": 37253,
        "imgType": 1,
        "imgUrl": "http://haitao.nos.netease.com/1a2258a19de84c938a95cde3ea88e5331525954377012jh0hu4u413298.jpg",
        "imgWidth": null,
        "imgHeight": null,
        "sortId": 2,
        "state": 1,
        "createTime": 1555563892000,
        "updateTime": 1555583277000
      }, {
        "ppid": 686206,
        "pid": 37253,
        "imgType": 1,
        "imgUrl": "http://haitao.nos.netease.com/76bd5456369c43438655b43e88b6a20e1525954377917jh0hu5ja13299.jpg",
        "imgWidth": null,
        "imgHeight": null,
        "sortId": 3,
        "state": 1,
        "createTime": 1555563892000,
        "updateTime": 1555583277000
      }],
      "shareUrl": "https://h5.jinaup.com/pc/productInfoDetail.html?pid=37253&fromInviteCode=2TWHAR5",
      "xcxShareUrl": "/pages/go2detail/main?id=37253&fromInviteCode=2TWHAR5",
      "xcxFriendShareUrl": "https://h5.jinaup.com/pc/productInfoDetail.html?pid=37253&fromInviteCode=2TWHAR5",

    },
  }
  componentDidMount() {

  }
  // componentWillUnmount() { }
  // componentWillReact() {
  // console.log('componentWillReact')
  // }
  config = {
    navigationBarTitleText: '我的订单'
  }
  // componentDidShow() { }

  // componentDidHide() { }
  tabclick(ind) {
    this.setState({
      ind: ind
    })
  }
  render() {
    // console.log(this.state)

    return (
      <View className='wrap'>
        <View className='header'>
          {
            this.state.headList.map((item, i) => {
              return <View key={i} className={this.state.ind === i ? 'headitem active' : 'headitem'} onClick={this.tabclick.bind(this, i)}>{item}</View>
            })
          }
        </View>
        <View className='con'>
          <View className='conitem'>
            <View className='conitemtop'>
              <View className='time'>2019-01-17 17:18:50</View>
              <View className='status'>待发货</View>
            </View>
            <View className='info'>
              <Image src={bigimg} className='img'></Image>
              <View className='infocon'>
                <View className='tit'>帮宝适绿帮纸尿裤大号的看法内开内倒</View>
                <View className='specification'>规格：XL</View>
                <View className='num'>
                  <View>￥52.50</View>
                  <View>x1</View>
                </View>
              </View>
            </View>
            <View className='total'>共2件商品 合计：￥52.50</View>
          </View>
          <Canvas style='width='></Canvas>
        </View>
      </View>
    )
  }
}

export default Myorder 
