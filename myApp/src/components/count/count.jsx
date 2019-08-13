import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx';
import "./count.scss";

@inject('detail')
@observer

class Count extends Component {
    componentWillMount() { }
    componentDidMount() { }
    componentWillUnmount() { }

    config = {
        // navigationBarTitleText: '商品详情'
    }

    componentWillReact() {
        // console.log('componentWillReact')
    }

    componentDidShow() { }

    componentDidHide() { }

    increment = () => {

    }

    render() {
        return (

            <View className="addCountBox">
                <View className="box">
                {/* 数量 */}
                <View className="title">
                    <Text>数量</Text>
                    <View onClick={()=>this.props.detail.showCount()}>X</View>
                </View>
                {/* 商品 */}
                <View className="article">
                    <View className="articleLeft">
                        <Image src="" />
                    </View>

                    <View className="articlRight">
                        <View className="price">￥299</View>
                        <View className="price">库存： 20</View>
                    </View>
                </View>

                {/* 数量 */}
                <Text className="num">数量</Text>
                <View className="countBox">
                    <Text className="active">2件</Text>
                    <Text>1件</Text>
                </View>


                {/* 改变数量 */}

                <View className="changeCount">
                    <Text className="num">数量</Text>
                    <View className="change">
                        <Text clasName="minus">-</Text>
                        <Text>1</Text>
                        <Text className="add">+</Text>
                    </View>
                </View>
                {/* 按钮 */}
                <Button className='btn'>按钮</Button>
                </View>
            </View>



        )
    }

}
export default Count
