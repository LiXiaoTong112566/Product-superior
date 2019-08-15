import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Image,Input } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './search.scss'
import search from "../../static/seek/search.png"
import del from "../../static/seek/del.png"
 

@inject('search')
@observer
class Search extends Component {
  constructor(){
    super()
    this.state={
      text:""
    }
  }
  componentWillMount() { }
  componentDidMount() { }
  componentWillUnmount() {}

  config = {
    navigationBarTitleText: '搜索'
  }

  componentWillReact() {
   
  }

  componentDidShow() { }

  componentDidHide() { }

  // 删除历史记录
  delHistory=()=>{
     console.log("del")
     
  }
  searchText=(e)=>{
    let text = e.target.value;
     this.setState({
       text
     })
    this.props.search.searchShopText({
        queryWord: text,
        queryType: 0,
        querySort: "asc",
        pageIndex: 1,
    })
  }
  render() {
    let {text} = this.state;
    return (
      <View className="search">
          <View className="header_search">
             <Image className="image" src={search}/>
             <Input placeholder="搜索" value={text} onChange={(e)=>this.searchText(e)}></Input>
             <Text className="remove">取消</Text>
          </View>
          <View className="history_search">
              <Text>历史搜索</Text>
              <Image className="delete" src={del} onClick={()=>this.delHistory()}></Image>
          </View>
          {/* 历史记录 */}
          <View className="record">
             {/* <Text>牛奶</Text>
             <Text>帽子扣扣扣</Text>
             <Text>牛奶</Text>
             <Text>帽扣</Text>
             <Text>牛奶</Text>
             <Text>帽子扣</Text> */}
          </View>
      </View>
    )
  }
}

export default Search