import Taro , { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer , inject } from '@tarojs/mobx'

import baobao from '../../img/baobao.jpg'
import svgd from '../../img/椭圆形-为勾选(1).svg'
import svg from '../../img/椭圆形-为勾选.svg'

import './index.scss'

class Cart extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View className='main_cart'>
                <View className='cart_checked'>
                <View className='cart_span' onClick={() => this.checkedAll()}>
                    {this.state.flag === false ? <Image src={svg}></Image> : <Image src={svgd}></Image>}
                </View>
                </View>
                <Image src={baobao} alt=""/>
                <View className='cart_cont'>
                    <p>帮宝适绿帮纸尿裤大号L64片超薄透气男女通用婴儿尿片尿不湿</p>
                    <span>规格：XL</span>
                    <View className='cart_box'>
                        <p>¥<span>52.50</span></p>
                        <View className='cart_cart'>
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    // checkedAll() {
    //     this.setState(prevState => ({
    //         flag : !prevState.flag
    //     }))
    // }
}
export default Cart