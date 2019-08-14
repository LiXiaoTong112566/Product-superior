import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'

import store from './store'

import './app.scss'

//import Index from './pages/commodityDetails/commodityDetail'


// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }


class App extends Component {
  componentDidMount() { }
  config = {
    pages: [
      'pages/indexList/indexList',
      'pages/delivery/index',
      'pages/shoppingCar/shoppingCar',
      'pages/index/index',
      'pages/mine/mine',
      'pages/commodityDetails/commodityDetail',
      'pages/special/special',
      "pages/search/search"
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
        iconPath:"static/images/shouye.png",
        selectedIconPath:"static/images/shouye_active.png",
        text: "首页"
      }, {
        pagePath: "pages/shoppingCar/shoppingCar",
        iconPath:"static/images/shop.png",
        selectedIconPath:"static/images/xin.png",
        text: "购物车"
      }, {
        pagePath: "pages/mine/mine",
        iconPath:"static/images/my.png",
        selectedIconPath:"static/images/my_active.png",
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
