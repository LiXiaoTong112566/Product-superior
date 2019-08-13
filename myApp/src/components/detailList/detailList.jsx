import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Label } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './detailList.scss'


// @inject('detailOne')
// @observer

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

    increment = () => {
        // const { counterStore } = this.props
        // counterStore.increment()
    }


    // mainImgUrl  title  salesPrice  vipPrice   earnMoney
    render() {
        console.log(this.props.data)
        // const { counterStore: { counter } } = this.props
        return (
            <View class="detailList">
                {
                    this.props.data && this.props.data.map((item, index) => {
                        return (
                            <View class="dl">
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
