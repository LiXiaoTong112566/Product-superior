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
        this.props.detail.getskuQuery({ pid: 549, vids: "[5832]" })
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
        console.log("change", JSON.parse(data));
        let vids = JSON.parse(data)[0].valueVo.vid;
        console.log("changeaaaaaa", vids);
        let result = await this.props.detail.getskuQuery({ pid: 549, vids: `[${vids}]` });
        console.log("改变选中的颜色", result);


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
        let { skuQueryData,checkedData} = this.props.detail;
        let sum={sum:this.state.sum};
        let newData=Object.assign({},skuQueryData,sum);
        checkedData.push(newData);
        this.props.detail.changeColor(skuQueryData.skuName);
        this.props.detail.showCount();
      
     }

    render() {

        let { productDetail, skuQueryData } = this.props.detail;

        console.log("获取详情的数据", skuQueryData);


        console.log("获取到的数据123", productDetail);
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

                    {/* 数量 */}
                    <Text className="num">数量</Text>
                    <View className="countBox">
                        {productDetail.supplierProductSkuVoList && productDetail.supplierProductSkuVoList.map((item, index) => {
                            return <Text key={index} className={item.skuName === skuQueryData.skuName ? "color active" : "color"} onClick={() => this.changeColor(item.attributeValueJson)}>{item.skuName}</Text>
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
