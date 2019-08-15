import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Label } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './detailList.scss'


@inject('indexList')
@observer

class DetailList extends Component {
    componentWillMount() { }
    componentDidMount() { }
    componentWillUnmount() { }

    config = {
        navigationBarTitleText: '首页'
    }

    componentWillReact() {
        console.log('componentWillReact')
    }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (
            <View class="detailList">
                {
                    this.props.indexList.indexBotData && this.props.indexList.indexBotData.map((item, index) => {
                        return (
                            <View class="dl" key={index+"dl"}>
                                <View class="dt">
                                    <Image src={item.mainImgUrl} class="image"></Image>
                                </View>
                                <View class="dd">
                                    <View class="tet">{item.title}</View>
                                    <View class="taxes">报税</View>
                                    <View class="unit">￥{item.salesPrice}</View>
                                    <View class='money'>
                                        <Text class="left">￥{item.vipPrice}</Text>
                                        <Text class="right">￥{item.earnMoney}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }

            </View>

        )
    }
}

export default DetailList 
