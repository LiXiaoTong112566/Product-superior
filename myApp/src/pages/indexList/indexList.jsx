import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, ScrollView, Image,Label  } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import style from './indexList.module.scss';
//列表组件
import DetailList from "../../components/detailList/detailList"

// @inject('detailOne')
// @observer

class IndexList extends Component {
  constructor(props){
    super(props)
    this.state={
      indexLIstData:[],
      indexBotData:[],
      childs:[]
    }
  }
  componentWillMount() { }
  componentDidMount() {
    // console.log(this.props.detailOne,'props++++++++++++++++++++++')
    // this.props.detailOne.categoryQueryAction()
    Taro.request({
      url: 'https://upapi.jinaup.com/api/open/product/category/query/1.0.0',
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'trackId': 'F649B34989975F268EA5BC4927E7C2365DBB8293767D955992FF410009F6B2DE301BCDFBE166230EBF083C72B5B6A948277C0041980DAC5E46FA1EF475B12D4773F05A5E984CF1D814817C9546DF831BF9D9BD6C1F2231AFA450731B6837E7084E77DC9918A436BC'

      },
      method:'POST',
      success:(res)=>{
        this.setState({
           indexLIstData:res.data.result
        })
       
      }
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

  // increment = () => {
  //   const { detailOne } = this.props
  //   detailOne.increment()
  //   console.log(detailOne,'detailOne66++++++++++')
  // }



  render() {
   // console.log(this.state.indexLIstData,'xasdddddddddddd')
    return (
      <View className={style.index}>
        <ScrollView className={style.top} scrollX="true">
          {
            this.state.indexLIstData&&this.state.indexLIstData.map((item,index)=>{
              return  <View className={style.li} onClick={this.topList.bind(this,item.cid,index)} key={index}>{item.cname}</View>
            
            })
          }
        </ScrollView>
        <View className={style.centen}>
          {
            console.log(this.state.childs)
          }
          {/* {
             this.state.indexLIstData&&this.state.indexLIstData.forEach((item,index)=>{
              item.childs&&item.childs.map((i,index)=>{
                console.log(i.cname)
                    // return (
                    //   <View className={style.cenZi}>
                    //   <Image
                    //     className={style.img}
                    //     src={i.imgUrl}
                    //   />
                    //   <Label className={style.txt}>{i.cname}</Label>
                    // </View>
                    // )
                 })
             })
          } */}
       
       
        
         
        </View>
        <View className={style.tabr}>
            <View>综合</View>
            <View>综合</View>
            <View className={style.prices}>
                综合
                {/* <Label className={style.top}>△</Label>
                <Label className={style.bo}>▽</Label>   */}
            </View>
        </View>
        <DetailList data={this.state.indexBotData}></DetailList>
    </View>
    )
  }

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
    })
  }


}

export default IndexList 
