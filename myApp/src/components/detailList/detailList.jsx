import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Label } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import  './detailList.scss'


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



    render() {
        // const { counterStore: { counter } } = this.props
        return (
            <View class="detailList">
                <View class="dl">
                    <View class="dt">
                        <Image src="" class="image"></Image>
                    </View>
                    <View class="dd">
                        <View class="tet">基础课程京东数科出生地点</View>
                        <View class="taxes">报税</View>
                        <View class="unit">￥78</View>
                        <View class='money'>
                            <Text class="left">750</Text>
                            <Text class="right">1150</Text>
                        </View>
                    </View>
                </View>
            </View>

        )
    }
}

export default DetailList 
