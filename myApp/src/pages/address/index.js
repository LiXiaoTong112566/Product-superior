import Taro, { Component } from '@tarojs/taro'
import { View , Picker,Input } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import regeneratorRuntime from "../../utils/runtime"
console.log(regeneratorRuntime)
import './index.scss'
import xiayibu from '../../img/下一步.svg'
import { AtForm, AtSwitch } from 'taro-ui'

@inject('city')
@observer

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
        value: false,
        selector: [],
        selectorChecked: '北京市,北京市,东城区',
        name:'',
        phone:'',
        site:'',
        //改变样式
        ind:0,
        //初始标签
        title:'',
        //标签
        labels:['家','公司','学校','其他'],
        provinceId:'',
        cityId:'',
        areaId:''
    }
  }
  config = {
    navigationBarTitleText: '收货地址'
  }

  componentWillMount () { }

  componentWillReact () {
     
  }

  componentDidMount () { 
    this.props.city.citycodeAction()
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { } 
  handleChange = value => {
    this.setState({value})
  }
  onChange(e){
    let cityDs=this.props.city.citycodeData;
    cityDs&&cityDs.forEach((item)=>{
      this.setState({
        provinceId :item.id
      })
      item.htLocationVoList.forEach(i=>{
        this.setState({
          cityId :i.id
        })
        i.htLocationVoList.forEach(it=>{
          this.setState({
            areaId :it.id
          })
        })
      })
    })
    // async function processArray(cityDs) {
    //   //  map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
    //   //  async 修饰的方法返回值是一个promise对象,因此下面map的返回值就是一个promise列表
    //   const promiseArr = array.map(delayedLog);
    //   //  wait until all promises are resolved
    //   await Promise.all(promiseArr);
    //   console.log('Done!');
    // }
    this.setState({
      selectorChecked:`${e.detail.value[0]},${e.detail.value[1]},${e.detail.value[2]}`
    })
  }
  biaoq(title,index){
    console.log(index)
    this.setState({
      title:title,
      ind:index
    })
    console.log(this.state.ind)
}

  //保存
  save(){
    let selectorChecked=this.state.selectorChecked.split(',');
    if(this.state.name===''&&this.state.phone===''&&this.state.site===''&&this.state.title===''){
       return console.log('请填写')
    }

    // console.log(this.state.provinceId,this.state.cityId,this.state.areaId,'ssssssssssssssssssss')
    this.props.city.addAddressAction({
      provinceName:selectorChecked[0],
      cityName :selectorChecked[1],
      areaName:selectorChecked[2],
      address:this.state.site,
      consignee :this.state.name,
      consigneePhone :this.state.phone,
      addressTag:0,
      state :0,
      provinceId:this.state.provinceId,
      cityId :this.state.cityId ,
      areaId:this.state.areaId
    })
    console.log(this.state.name,this.state.phone,this.state.selectorChecked,this.state.site,this.state.title,'保存')
  }
  render () {
    let cityD=this.props.city.citycodeData;
    cityD&&cityD.map((item,index)=>{
      // console.log(item.id,'njcsdbcjdsbdsjbdsjvkn')
    return  this.state.selector.push(item.name)
    })
    return (
      <View className='wrap'>
        <View className='main'>
            <View className='name'>
                <Input 
                    type="text" 
                    placeholder='收货人'
                    value={this.state.name}
                    onInput={(e)=>{this.setState({name:e.detail.value})}}
                     />
                <Image src={xiayibu} />
            </View>
            <View className='phone'>
                <Input 
                    type="text" 
                    placeholder='手机号码'
                    value={this.state.phone}
                    onInput={(e)=>{this.setState({phone:e.detail.value})}}
                     />
                <Image src={xiayibu} />
            </View>
            <View className='region'>
                <View className='picker'>
                  <Picker mode='region' range={this.state.selector} onChange={this.onChange}>
                    <View className='picker'>
                    所在地区: {this.state.selectorChecked}
                    </View>
                  </Picker>
                </View>
                <Image src={xiayibu} />
            </View>
            <View className='detailedness'>
                <Input 
                  placeholder="详细地址：如道路,门牌号,小区,楼栋号,单元室等"  
                  rows="3" 
                  type="text"
                  // onInput={this.s.bind(this,e)}
                  onInput={(e)=>{this.setState({site:e.detail.value})}}
                   />
            </View>
        </View>
        <View className='conter'>
            <span>标签</span>
            <View className='conter_cont'>
              {
                this.state.labels.map((item,index)=>{
                  return <View className={index===this.state.ind?'active cont_all':'cont_all'} key={index+'l'} onClick={()=>this.biaoq(item,index)}>{item}</View>
                })
              }
                {/* <View className='cont_all'>家</View>
                <View className='cont_all'>公司</View>
                <View className='cont_all'>学校</View>
                <View className='cont_all'>其他</View> */}
            </View>
            <View className='conter_footer'>
                <View className='cont_default'>设为默认地址</View>
                <View className='indicate' >
                    <AtForm>
                        <AtSwitch checked={this.state.value} onChange={this.handleChange} />
                    </AtForm>
                </View>
            </View>
        </View>
        <View className='footer_bt'>
            <View className='delete'>删除收货信息</View>
            <View className='save' onClick={this.save.bind(this)}>保存</View>
        </View>
      </View>
    )
  }
}``

export default Index 