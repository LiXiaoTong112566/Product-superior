import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Image,Input,Form } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './phone.scss'

 

//@inject('counterStore')
//@observer
class Phone extends Component {
    constructor(){
        super()
        this.state={
            phonenum:""
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
     let tel = e.target.value;
     let TEL_REGEXP = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
     if(TEL_REGEXP.test(tel)){
        wx.showToast({
            title: '稍等',
            icon: "none",
            duration: 2000
          })
       this.setState({phoneNum:tel})
      }else{
        wx.showToast({
            title: '请输入正确手机号',
            icon: "none",
            duration: 2000
          })
      }
    
  }
//   点击按钮时触发
  formSubmit=(e)=>{
      //需要判断验证码是否正确
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  }
  render() {
      let {phonenum} = this.state;
    return (
       
      <View className="phone">
        <Form onSubmit={(e)=>this.formSubmit(e)}>
            <View className="inps">
                <Text className="inptext">手机号</Text>
                <Input 
                type="text" 
                placeholder="请输入新手机号" 
                maxLength='11'
                value={phonenum}
                onChange={(e)=>this.handleChange(e)}
                />
            </View>
            <View className="inps">
                <Text className="inptext">验证码</Text>
                <Input type="text" placeholder="请输入验证码"/>
                <Text className="code">获取验证码</Text>
            </View>
            <Button className="phonebtn" form-type="submit">
                验证后绑定新手机
            </Button>
        </Form>
        <Text className="text">若当前号码已经不用或丢失，请联系专属客服</Text>
      </View>
    )
  }
}

export default Phone