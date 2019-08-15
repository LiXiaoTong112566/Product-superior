import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx';
import "./count.scss";
import regeneratorRuntime from "../../utils/runtime";
console.log(regeneratorRuntime);
@inject('detail')
@observer

class Count extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sum: 1,
        }

    }
    componentWillMount() { }
    componentDidMount() {
     
       
    }
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
    //改变选中的颜色
    async changeColor(data) {
        console.log("change113", data);
        let vids = JSON.parse(data.attributeValueJson)[0].valueVo.vid;
         let result = await this.props.detail.getskuQuery({ pid:data.pid , vids: `[${vids}]` });
         console.log("获取到的数据result",result)
         this.props.detail.checkedColor=result.skuName;
       
    }

    //改变数量

    changeCount(type) {
        console.log("type");
        let { skuQueryData } = this.props.detail;
        //如果库存为0直接返回
        if (skuQueryData.store === 0) {
            return;
        } else {

            if (type === "-") {
                console.log(1,this.state.sum);
                if (this.state.sum <= 1) {
                    this.setState({
                        sum: 1,
                    })

                } else {
                    console.log(this.state.sum);
                    this.setState({
                        sum: this.state.sum - 1,
                    })
                }

            } else {

                if (this.state.sum >= skuQueryData.store) {
                    this.setState({
                        sum: skuQueryData.store,

                    })

                } else {
                    this.setState({
                        sum: this.state.sum + 1,
                    })
                }
            }
        }
    }
    //确认按钮

     countersign(){
        this.props.detail.showCount();
     }

    render() {

        let { productDetail, skuQueryData } = this.props.detail;
        return (
            <View className="addCountBox">
                <View className="box">
                    {/* 数量 */}
                    <View className="title">
                        <Text>数量</Text>
                        <View onClick={() => this.props.detail.showCount()}>X</View>
                    </View>
                    {/* 商品 */}
                    <View className="article">
                        <View className="articleLeft">
                            <Image src={productDetail && productDetail.mainImgUrl} />
                        </View>

                        <View className="articlRight">
                            <View className="price">￥{skuQueryData && skuQueryData.salesPrice}</View>
                            <View className="price">库存:{skuQueryData.store}</View>
                        </View>
                    </View>

                    {/* 规格 */}
                    <Text className="num">默认</Text>
                    <View className="countBox">
                        {productDetail.supplierProductSkuVoList && productDetail.supplierProductSkuVoList.map((item, index) => {
                            return <Text key={index} className={item.skuName === skuQueryData.skuName ? "color active" : "color"} onClick={() => this.changeColor(item)}>{item.skuName}</Text>
                        })}

                    </View>


                    {/* 改变数量 */}

                    <View className="changeCount">
                        <Text className="num">数量</Text>
                        <View className="change">
                            <Text clasName="minus" onClick={() => this.changeCount("-")}>-</Text>
                            <Text>{this.state.sum}</Text>
                            <Text className="add" onClick={() => this.changeCount("+")}>+</Text>
                        </View>
                    </View>
                    {/* 按钮 */}
                    <Button className='btn' onClick={()=>this.countersign()}>确认</Button>
                </View>
            </View>



        )
    }

}
export default Count
