import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, ScrollView, Image, Label } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import './indexList.scss';
import style from './indexList.module.scss';
//列表组件
import DetailList from "../../components/detailList/detailList"
@inject('indexList')
@observer

class IndexList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      childs: [],
      ind:0,
      ids:1
    }
  }
  componentWillMount() {
   }
  componentDidMount() {
    this.props.indexList.categoryQueryAction();
    this.props.indexList.productListAction({
      pageIndex: 1,
      cid: this.state.ids,
      sortType: 1
    })
  }
  componentWillUnmount() { }

  config = {
    navigationBarTitleText: '积纳有品',
  }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidShow() {
    
  }

  componentDidHide() { }

  render() {
    let {ids}=this.state;
    let childsff=this.state.childs.childs;
    return (
      <View className='index'>
        <ScrollView className='top' scrollX="true">
          {
            this.props.indexList.indexLIstData && this.props.indexList.indexLIstData.map((item, index) => {
              return <View className={item.cid===ids?'active li':'li'} key={index + 'o'} onClick={this.topList.bind(this, item.cid, index)}>{item.cname}</View>
            })
          }
        </ScrollView>
        <View className='centen'>
          {
           childsff&&childsff.map((item, index) => {
              console.log(item, 'item++++++++++++++++++++++')
              return (
                <View className='cenZi' onClick={this.centen.bind(this, item.cid, index)}>
                  <Image
                    className='img'
                    src={item.imgUrl}
                  />
                  <Label className='txt'>{item.cname}</Label>
                </View>
              )
            })
          }
        </View>
        <View className='tabr'>
          <View onClick={()=>{this.zh(1)}}>综合</View>
          <View onClick={()=>{this.zh(2)}}>最新</View>
          <View className='prices'  onClick={()=>{this.zh(3)}}>
            价格
                <Label className='tp' onClick={()=>{this.zh(3)}}>△</Label>
                <Label className='bo' onClick={()=>{this.zh(4)}}>▽</Label>  
          </View>

        </View>
        <DetailList></DetailList>
      </View>
    )
  }
  //点击头部
  topList(id, index) {
    this.setState({
      childs: this.props.indexList.indexLIstData[index],
      ids:id,
      ind:index
    })
    this.props.indexList.productListAction({
      pageIndex: 1,
      cid: id,
      sortType: 1
    })

  }
  //点击综合
  zh(sortType){
    this.props.indexList.productListAction({
      pageIndex: 1,
      cid: this.state.ids,
      sortType: sortType
    })
  }
//点击头部下边
  centen(id){
    this.props.indexList.productListAction({
      pageIndex: 1,
      cid: id,
      sortType: 1
    })
  }


}

export default IndexList 
