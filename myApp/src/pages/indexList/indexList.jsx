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
<<<<<<< HEAD
    let {ids}=this.state;
    let childsff=this.state.childs.childs;
=======
   // console.log(this.state.indexLIstData,'xasdddddddddddd')
>>>>>>> hmm
    return (
      <View className='index'>
        <ScrollView className='top' scrollX="true">
          {
<<<<<<< HEAD
            this.props.indexList.indexLIstData && this.props.indexList.indexLIstData.map((item, index) => {
              return <View className={item.cid===ids?'active li':'li'} key={index + 'o'} onClick={this.topList.bind(this, item.cid, index)}>{item.cname}</View>
=======
            this.state.indexLIstData&&this.state.indexLIstData.map((item,index)=>{
              return  <View className={style.li} onClick={this.topList.bind(this,item.cid,index)} key={index}>{item.cname}</View>
            
>>>>>>> hmm
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

<<<<<<< HEAD
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
=======
  topList(id,index){
    Taro.request({
      url: 'https://upapi.jinaup.com/api/open/product/category/productList/1.0.0',
      data: {
        pageIndex:1,
        cid: id,
        sortType:1
      },
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'trackId': 'F649B34989975F268EA5BC4927E7C2365DBB8293767D955992FF410009F6B2DE301BCDFBE166230EBF083C72B5B6A948277C0041980DAC5E46FA1EF475B12D4773F05A5E984CF1D814817C9546DF831BF9D9BD6C1F2231AFA450731B6837E7084E77DC9918A436BC'

      },
      method:'POST',
      success:(res)=>{
        //console.log(res.data.result,'res++++++++++++++++++++++++++++++++++++++++++')
        this.setState({
          indexBotData:res.data.result,
          childs:this.state.indexLIstData[index]
        })
       
      }
>>>>>>> hmm
    })
  }


}

export default IndexList 
