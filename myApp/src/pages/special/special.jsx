import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, ScrollView, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './special.scss'


@inject('home')
@observer
class Special extends Component {
    constructor() {
        super()
        this.state = {
            flag: false
        }
    }
    componentWillMount() {

    }
    componentDidMount() {
        this.props.home.sepcialInfoAction({
            siid: this.$router.params.id
        })
        console.log(this.$router.params.id)
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

    increment = () => { }
    //吸顶
    onScrollToUpper = (e) => {
        if (e.target.scrollTop >= 230) {
            this.setState({
                flag: true
            })
        } else {
            this.setState({
                flag: false
            })
        }
    }
    render() {
        let flag = this.state.flag;
        let sepcialInfoData = this.props.home.sepcialInfoData;//.shareUrl
        return (
            sepcialInfoData === null ? <View className="special">
                <view class="navigation">不好意思，暂无数据</view>
            </View> :
                <ScrollView
                    scrollY
                    onScroll={this.onScrollToUpper}
                    className="scroll"
                >
                    <View className="special">
                        {/* 需要吸顶效果 */}
                        <View className="topImg">
                            <Image
                                className='img'
                                src={sepcialInfoData.specialImg}
                            />
                        </View>
                        <View className={flag ? "navigation isFixed" : "navigation"}>
                            {sepcialInfoData.specialName}
                        </View>
                        {
                            sepcialInfoData.anchors && sepcialInfoData.anchors.map((item, index) => {
                                // console.log(item, 'itemitemitemitem')
                                return (
                                    <View key={index + 's'}>
                                        <View className="listWrap">
                                            <View className="left_line"></View>
                                            <View className="box"></View>
                                            <View className="text">{item.anchorDesc}</View>
                                            <View className="box"></View>
                                            <View className="right_line"></View>
                                        </View>
                                        {/* 循环区域 */}
                                        {/* 横向 */}
                                        <View className="infeed">
                                            {
                                                item.products && item.products.map((i, index) => {
                                                    return (
                                                        <View className="dls_infeed" key={index + 'a'}>
                                                            <View className="top_dt">
                                                                <Image
                                                                    className='img'
                                                                    src={i.mainImgUrl}
                                                                />
                                                            </View>
                                                            <View className="bottom_dd">
                                                                <View className="bottom_title">{i.title}</View>
                                                                <View className="bottom_span">
                                                                    <View>
                                                                        <Text>￥</Text>
                                                                        <View className="blone">{i.supplyPrice}</View>
                                                                    </View>
                                                                    <Text className="bottom_money">赚￥{i.memberDiscountPrice}</Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    )
                                                })
                                            }
                                        </View>
                                    </View>
                                )
                            })
                        }

                    </View>
                </ScrollView>
        )
    }
}

export default Special 
