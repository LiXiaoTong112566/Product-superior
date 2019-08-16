import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'
import '@tarojs/async-await'
import store from './store/index'
import './app.scss'


class App extends Component {
  componentDidMount() { }
  config = {
    pages: [
      //首页
      'pages/index/index',
      //编辑收货地址
      "pages/address/index",
      //购物车
      'pages/shoppingCar/shoppingCar',
      // 我的
      'pages/mine/mine',
      // 我的订单
      'pages/myOrder/myorder',
      // 商品详情
      'pages/commodityDetails/commodityDetail',
      'pages/indexList/indexList',
      //收货地址
      'pages/delivery/index',
      // 专题
      'pages/special/special',
      //搜索
      "pages/search/search",
      //手机号
      "pages/phone/phone",
      //分享合成canvas
      "pages/share/share",
      "pages/addressS/index"
     

    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    permission: {
      'scope.userLocation': {
        desc: '你的位置信息将用于小程序位置接口的效果展示'
      }
    },
    tabBar: {
      selectedColor: "#56d2bf",
      list: [{
        pagePath: "pages/index/index",
        iconPath: "static/images/shouye.png",
        selectedIconPath: "static/images/shouye_active.png",
        text: "首页"
      }, {
        pagePath: "pages/shoppingCar/shoppingCar",
        iconPath: "static/images/shop.png",
        selectedIconPath: "static/images/xin.png",
        text: "购物车"
      }, {
        pagePath: "pages/mine/mine",
        iconPath: "static/images/my.png",
        selectedIconPath: "static/images/my_active.png",
        text: "我的"
      }]
    },
  }

  componentDidShow() { }
  componentDidHide() { }

  componentDidCatchError() { }
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}


Taro.render(<App />, document.getElementById('app'))
