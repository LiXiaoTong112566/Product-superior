/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 08:51:54
 * @LastEditTime: 2019-08-14 10:39:02
 * @LastEditors: Please set LastEditors
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './search.scss'
import search from "../../static/seek/search.png"
import del from "../../static/seek/del.png"
 

class Search extends Component {
  componentWillMount() { 
   
  }
  componentDidMount() { 
    
  }
  componentWillUnmount() { }

  config = {
    navigationBarTitleText: '搜索'
  }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidShow() { }

  componentDidHide() { }

  increment = () => {
    
  }

  render() {
    return (
      <View className="search">
          <View className="header_search">
             <Image className="image" src={search}/>
             <input placeholder="搜索"></input>
             <Text className="remove">取消</Text>
          </View>
          <View className="history_search">
              <Text>历史搜索</Text>
              <Image className="delete" src={del}></Image>
          </View>
          {/* 历史记录 */}
          <View className="record">
             <Text>牛奶</Text>
             <Text>帽子扣扣扣</Text>
             <Text>牛奶</Text>
             <Text>帽扣</Text>
             <Text>牛奶</Text>
             <Text>帽子扣</Text>
          </View>
      </View>
    )
  }
}

export default Search