import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import style from './mine.module.scss'
import './mine.scss'

import logBg from "../../static/images/logBg.png"
import dfh from "../../static/images/dfh.png"
import dfk from "../../static/images/dfk.png"
import dsh from "../../static/images/dsh.png"
import dz from "../../static/images/dz.png"
import jt from "../../static/images/jt.png"
import kf from "../../static/images/kf.png"
import sm from "../../static/images/sm.png"
import yhj from "../../static/images/yhj.png"


class Mine extends Component {
  constructor(){
    super()
    this.state={
      dls:[
        {icon:dfk,title:"代付款"},
        {icon:dfh,title:"代发货"},
        {icon:dsh,title:"代收货"}
      ],
      list:[
        {icon:yhj,title:"我的优惠劵",},
        {icon:dz,title:"收货地址", slite:'/pages/addressS/index'},
        {icon:kf,title:"联系客服"},
        {icon:sm,title:"实名认证"}
      ]
    }
  }
  componentWillMount() { }
  componentDidMount() { }
  componentWillUnmount() { }

  config = {
    navigationBarTitleText: '个人中心'
  }

  componentWillReact() {
  
  }

  componentDidShow() { }

  componentDidHide() { }
  dz(title,slite){
    console.log(title,slite,'sliteslitesliteslitesliteslite')
    Taro.navigateTo({
      url:slite
    })
  }
  render() {
    let {dls, list} = this.state;
    return (
      <View className="minewrap">
          <Image className="logbg" src={logBg}/>
          <View className="invitation">
             <Text>邀请码：</Text>
             <Text>复制</Text>
          </View>
          <View className="location">
              <View className="order">
                 <View className="myOrder">我的订单</View>
                 <View className="dlsOrder">
                    {dls.map((item,index)=>
                        <View className="dls" key={index+"dls"}>
                            <Image className="dts" src={item.icon}/>
                            <Text>{item.title}</Text>
                        </View>
                      )}
                 </View>
              </View>
              <View className="newsList">
                  {list.map((file,index)=>
                      <View className="list" key={"list"+index}>
                        <Image className="dts" src={file.icon}/>
                        <Text onClick={this.dz.bind(this,file.title,file.slite)}>{file.title}</Text>
                        <Image className="dts" src={jt}/>
                      </View>
                    )}
              </View>
          </View>
      </View>
    )
  }
}

export default Mine 
