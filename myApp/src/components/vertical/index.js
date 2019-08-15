import Taro , { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer , inject } from '@tarojs/mobx'


import './index.scss'

class Delivery extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
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
        )
    }
}
export default Delivery