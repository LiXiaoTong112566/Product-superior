import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Image,Canvas } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import regeneratorRuntime from "../../utils/runtime";
console.log(regeneratorRuntime);

import './share.scss'
 

//@inject('counterStore')
//@observer
class Share extends Component {
  constructor () {
    this.state = {
      // 用户信息
      userInfo: {},
      code:"UOKIHU68869",
      // 是否展示canvas
      isShowCanvas: true

    }
  }
  componentWillMount() { 
   
  }
  componentDidMount() { 
    
  }
  componentWillUnmount() { }

  config = {
    navigationBarTitleText: '分享'
  }

  componentWillReact() {
  }

  getUserInfo (e) {
    if (!e.detail.userInfo) {
      Taro.showToast({
        title: '获取用户信息失败，请授权',
        icon: 'none'
      })
      return
    }
    this.setState({
      isShowCanvas: true,
      userInfo: e.detail.userInfo
    }, () => {
      // 调用绘制图片方法
      this.drawImage()
    })
  }
  async drawImage () {
    // 创建canvas对象
    let ctx = Taro.createCanvasContext('cardCanvas')
    
    // 填充背景色
    // let grd = ctx.createLinearGradient(0, 0, 1, 500)
    // grd.addColorStop(0, '#1452d0')
    // grd.addColorStop(0.5, '#FFF')
    // ctx.setFillStyle(grd)
    // ctx.fillRect(0, 0, 400, 500)

    // // 绘制圆形用户头像
    let { userInfo,code,img } = this.state
    let res = await Taro.downloadFile({
      url: userInfo.avatarUrl
    })
    ctx.save()
    ctx.beginPath()
    // ctx.arc(160, 86, 66, 0, Math.PI * 2, false)
    ctx.arc(32, 42, 20, 0, Math.PI * 2)
    ctx.closePath()
    ctx.clip()
    ctx.stroke()
    ctx.translate(15,40)
    ctx.drawImage(res.tempFilePath, -5, -18, 50, 50)
    ctx.restore()

    // 绘制文字
    ctx.save()
    ctx.setFontSize(16)
    ctx.setFillStyle('#66CCCC')
    ctx.fillText(userInfo.nickName, 60, 40)

    ctx.setFontSize(12)
    ctx.setFillStyle('black')
    ctx.fillText("分享给你一个商品", 65+ctx.measureText(userInfo.nickName).width, 40)

    ctx.setFillStyle('#66CCCC')
    ctx.fillText(`邀请码：${code}`, 60, 60)
    ctx.setFillStyle('#000')
    ctx.fillText(`雅诗兰黛口红420倾慕`, 10, 320)

    ctx.setFontSize(12)
    ctx.setFillStyle('#FF3333')
    ctx.fillText(`￥`, 10, 380)

    ctx.setFontSize(20)
    ctx.setFillStyle('#FF3333')
    ctx.fillText(`168`, 23, 380)

    ctx.setFontSize(12)
    ctx.setFillStyle('#ccc')
    ctx.fillText(`￥400`, 60, 380)

    ctx.setFontSize(14)
    ctx.setFillStyle('#ccc')
    ctx.fillText(`长按识别二维码访问`, 5, 420)
    ctx.restore()


    // 绘制商品图片
    let shopimg = await Taro.downloadFile({
      url: 'https://jnup.oss-cn-beijing.aliyuncs.com/web/uploads/image/store_1/66c595c9ee1860102eecd765dc214e8252ef5895.jpg'
    })
    ctx.drawImage(shopimg.tempFilePath, 0, 120, 200, 180)

    let qrcode = await Taro.downloadFile({
      url: 'https://upload-images.jianshu.io/upload_images/3091895-f0b4b900390aec73.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/258/format/webp.jpg'
    })
    ctx.drawImage(qrcode.tempFilePath, 130, 360, 70, 70)

    // 将以上绘画操作进行渲染
    ctx.draw()
  }
  async saveCard () {
    // 将Canvas图片内容导出指定大小的图片
    let res = await Taro.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 400,
      height: 500,
      destWidth: 360,
      destHeight: 450,
      canvasId: 'cardCanvas',
      fileType: 'png'
    })
    let saveRes = await Taro.saveImageToPhotosAlbum({
      filePath: res.tempFilePath
    })
    if (saveRes.errMsg === 'saveImageToPhotosAlbum:ok') {
      Taro.showModal({
        title: '图片保存成功',
        content: '图片成功保存到相册了，快去发朋友圈吧~',
        showCancel: false,
        confirmText: '确认'
      })
    } else {
        Taro.showModal({
        title: '图片保存失败',
        content: '请重新尝试!',
        showCancel: false,
        confirmText: '确认'
      })
    }
  }


  render() {
    let { isShowCanvas } = this.state
    return (
      <View className='index'>
        <Button 
        onGetUserInfo={this.getUserInfo} 
        openType="getUserInfo" 
        type="primary" 
        size="mini">获取基本信息</Button>
        {/* 使用Canvas绘制分享图片 */}
        {
          isShowCanvas && 
            <View className="canvas-wrap">
              <Canvas 
                id="card-canvas"
                className="card-canvas"
                style="width: 200px; height: 450px"
                canvasId="cardCanvas" >
              </Canvas>
              <Button onClick={this.saveCard} className="btn-save" type="primary" size="mini">保存到相册</Button>
            </View> 
        }
      </View>
    )
  }
}

export default Share