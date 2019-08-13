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
      indexLIstData:[]
    }
  }
  componentWillMount() { }
  componentDidMount() {
    // console.log(this.props.detailOne,'props++++++++++++++++++++++')
    // this.props.detailOne.categoryQueryAction()
    Taro.request({
      url: 'https://upapi.jinaup.com/api/open/product/category/query/1.0.0',
      header: {
        'content-type': 'application/json',
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
    console.log(this.state.indexLIstData,'xasdddddddddddd')
    return (
      <View className={style.index}>
        <ScrollView className={style.top} scrollX="true">
          {
            this.state.indexLIstData&&this.state.indexLIstData.map((item,index)=>{
              return  <View className={style.li}>{item.cname}</View>
            })
          }
        </ScrollView>
        <View className={style.centen}>
          <View className={style.cenZi}>
            <Image
              className={style.img}
              src='http://img1.imgtn.bdimg.com/it/u=2174909441,2495215020&fm=26&gp=0.jpg'
            />
            <Label className={style.txt}>资环</Label>
          </View>
          <View className={style.cenZi}>
            <Image
              className={style.img}
              src='http://img1.imgtn.bdimg.com/it/u=2174909441,2495215020&fm=26&gp=0.jpg'
            />
            <Label className={style.txt}>资环</Label>
          </View>
          <View className={style.cenZi}>
            <Image
              className={style.img}
              src='http://img1.imgtn.bdimg.com/it/u=2174909441,2495215020&fm=26&gp=0.jpg'
            />
            <Label className={style.txt}>资环</Label>
          </View>
          <View className={style.cenZi}>
            <Image
              className={style.img}
              src='http://img1.imgtn.bdimg.com/it/u=2174909441,2495215020&fm=26&gp=0.jpg'
            />
            <Label className={style.txt}>资环</Label>
          </View>
          <View className={style.cenZi}>
            <Image
              className={style.img}
              src='http://img1.imgtn.bdimg.com/it/u=2174909441,2495215020&fm=26&gp=0.jpg'
            />
            <Label className={style.txt}>资环</Label>
          </View>
          <View className={style.cenZi}>
            <Image
              className={style.img}
              src='http://img1.imgtn.bdimg.com/it/u=2174909441,2495215020&fm=26&gp=0.jpg'
            />
            <Label className={style.txt}>资环</Label>
          </View>
         
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
        <DetailList></DetailList>
    </View>
    )
  }
}

export default IndexList 
