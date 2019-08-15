import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './phone.scss'

 

//@inject('counterStore')
//@observer
class Phone extends Component {
    constructor(){
        super()
        this.state={
            phonenum:"151515"
        }
    }
  componentWillMount() { 
   
  }
  componentDidMount() { 
    
  }
  componentWillUnmount() { }

  config = {
    navigationBarTitleText: '绑定手机号'
  }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidShow() { }

  componentDidHide() { }

  handleChange=(e)=>{
     console.log(e)
    //   this.setState({phoneNum:num})
  }
  formSubmit=()=>{
      console.log(14)
  }
  render() {
      let {phonenum} = this.state;
    return (
       
      <View className="phone">
        <form onSubmit='formSubmit'>
            <View className="inps">
                <Text className="inptext">手机号</Text>
                <input 
                type="text" 
                placeholder="请输入新手机号" 
                value={phonenum}
                onChange={(e)=>this.handleChange(e)}
                />
            </View>
            <View className="inps">
                <Text className="inptext">验证码</Text>
                <input type="text" placeholder="请输入验证码"/>
                <Text className="code">获取验证码</Text>
            </View>
            <Button className="phonebtn">
                验证后绑定新手机
            </Button>
        </form>
        <Text className="text">若当前号码已经不用或丢失，请联系专属客服</Text>
      </View>
    )
  }
}

export default Phone