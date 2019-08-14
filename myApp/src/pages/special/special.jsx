import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,ScrollView } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './special.scss'



class Special extends Component {
    constructor(){
        super()
        this.state={
            flag:false
        }
    }
  componentWillMount() { }
  componentDidMount() { 
    
  }
  componentWillUnmount() { }

  config = {
    navigationBarTitleText: '专题'
  }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidShow() { }

  componentDidHide() { }

  increment = () => {}
 //吸顶
  onScrollToUpper=(e)=>{
    if(e.target.scrollTop >=230){
       // console.log('top...............',this.state.flag)
        this.setState({
            flag:true
        })
    }else{
        //console.log(e.target.scrollTop)
        this.setState({
            flag:false
        })
    }
  }
  render() {
      let flag = this.state.flag;
    return (
    <ScrollView 
        scrollY
        onScroll={this.onScrollToUpper}
        className="scroll"
        >
      <View className="special">
         {/* 需要吸顶效果 */}
         <View className="topImg">
            专题图片
         </View>
         <View className={flag ?"navigation isFixed" :"navigation"}>
             南靖特产专区
         </View>
         <View>
            <View className="listWrap">
                <View className="left_line"></View>
                <View className="box"></View>
                <View className="text">南靖特产专区</View>
                <View className="box"></View>
                <View className="right_line"></View>
            </View>
             {/* 图文混排 竖向 */}
               {/* 循环区域 */}
                <View className="dls">
                  <View className="left_dt">12</View>
                  <View className="right_dd">
                        <View className="right_title">10支 辰和 乌龙茶棒 福建土楼 简易冲泡 方便携带 铁观音陈香型</View>
                        <View className="right_span">
                          <Text className="right_text">￥258</Text>
                          <Text className="right_money">赚￥84</Text>
                        </View>
                  </View>
                </View>
            {/* 横向 */}
            <View className="infeed">
                <View className="dls_infeed">
                    <View className="top_dt">12</View>
                    <View className="bottom_dd">
                          <View className="bottom_title">10支 辰和 乌龙茶棒 福建土楼 简易冲泡 方便携带 铁观音陈香型</View>
                          <View className="bottom_span">
                              <View>
                                  <Text>￥</Text>
                                  <View className="blone">258</View>
                              </View>
                              <Text className="bottom_money">赚￥84</Text>
                          </View>
                    </View>
                </View>
                <View className="dls_infeed">
                    <View className="top_dt">12</View>
                    <View className="bottom_dd">
                          <View className="bottom_title">10支 辰和 乌龙茶棒 福建土楼 简易冲泡 方便携带 铁观音陈香型</View>
                          <View className="bottom_span">
                              <View>
                                  <Text>￥</Text>
                                  <View className="blone">258</View>
                              </View>
                              <Text className="bottom_money">赚￥84</Text>
                          </View>
                    </View>
                </View>
                <View className="dls_infeed">
                    <View className="top_dt">12</View>
                    <View className="bottom_dd">
                          <View className="bottom_title">10支 辰和 乌龙茶棒 福建土楼 简易冲泡 方便携带 铁观音陈香型</View>
                          <View className="bottom_span">
                              <View>
                                  <Text>￥</Text>
                                  <View className="blone">258</View>
                              </View>
                              <Text className="bottom_money">赚￥84</Text>
                          </View>
                    </View>
                </View>
                <View className="dls_infeed">
                    <View className="top_dt">12</View>
                    <View className="bottom_dd">
                          <View className="bottom_title">10支 辰和 乌龙茶棒 福建土楼 简易冲泡 方便携带 铁观音陈香型</View>
                          <View className="bottom_span">
                              <View>
                                  <Text>￥</Text>
                                  <View className="blone">258</View>
                              </View>
                              <Text className="bottom_money">赚￥84</Text>
                          </View>
                    </View>
                </View>
            </View>
         </View>
      </View>
      </ScrollView>
    )
  }
}

export default Special 
