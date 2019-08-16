import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Image,Input } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './search.scss'
import search from "../../static/seek/search.png"
import del from "../../static/seek/del.png"
import max from "../../static/seek/价格排序icon.png"
import min from "../../static/seek/价格排序icon -1.png"
 

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
    let {searchText} = this.props.search;
    console.log(searchText||searchText)
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
          {/* 搜索的商品列表 */}
          <View className="shopList">
              <View className="navShop">
                <Text onClick={()=>{this.screen(0)}}>综合</Text>
                <Text onClick={()=>{this.screen(1)}}>最新</Text>
                <View onClick={()=>{this.screen(2)}}>
                  <Text>价格</Text>
                  <Image className="pages" src={max}/>
                   {/* <Label className='tp' onClick={()=>{this.screen("desc")}}>△</Label>
                    <Label className='bo' onClick={()=>{this.screen("asc")}}>▽</Label>   */}
                </View>
              </View>
               <View className="dlsList">
               {searchText&&searchText[0].description}
                  <View className="dl">
                      <View className="dt">
                        {searchText&&searchText[0].description}
                      </View>
                  </View>
               </View>
                   
          </View>
      </View>
    )
  }
  screen=(queryType,size="desc")=>{
     console.log(queryType,size)
  }
}

export default Search