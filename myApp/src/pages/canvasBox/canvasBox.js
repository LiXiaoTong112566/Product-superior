/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 14:06:32
 * @LastEditTime: 2019-08-16 00:42:21
 * @LastEditors: Please set LastEditors
 */
import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";

import "./canvasBox.scss";

class CanvasBox extends Component {
  config = {
    navigationBarTitleText: "分享页"
  };

  componentWillMount() {
    const info = {
      pid: 37253,
      basePid: 37085,
      cid: 270,
      cName: null,
      bid: 15121,
      bName: null,
      title:
        "【天然乳钙 易吸收】汤臣倍健 牛乳钙片压片糖果 60片/瓶【天然乳钙 易吸收】汤臣倍健 牛乳钙片压片糖果 60片/瓶【天然乳钙 易吸收】汤臣倍健 牛乳钙片压片糖果 60片/瓶",
      shortTitle: "BY-HEALTH 汤臣倍健 牛乳钙片压片糖果 60片/瓶",
      description: null,
      importType: 3,
      origin: "",
      unitMeasure: null,
      unitMeasureValue: null,
      weight: 0,
      barCode: "",
      country: "中国",
      isFreeShipping: 0,
      isPresell: 0,
      isFreeTax: 1,
      mainImgUrl:
        "http://haitao.nos.netease.com/e7e0936a25764af6b31fba26f311c4c11525954376593jh0hu4ig13297.jpg",
      mainImgWidth: null,
      mainImgHeight: null,
      isSelf: 1,
      isNew: 1,
      isHot: 0,
      isRecommend: 0,
      deliveryCode: 0,
      productType: 0,
      marketPrice: 98.0,
      supplyPrice: 44.0,
      wholesalePrice: 0.0,
      salesPrice: 59.0,
      storePrice: 98.0,
      commissionAmount: 0.0,
      isSowing: 0,
      sowingPrice: 0.0,
      originalPid: 0,
      productAscription: 1,
      sstid: null,
      limitedNumber: -1,
      state: 1,
      authState: 1,
      userIdentity: 2,
      uid: 51,
      uName: null,
      usiid: 0,
      swid: 51,
      settlementMethod: 1,
      deductionPoints: 0,
      productionDateStr: null,
      productionDate: null,
      sortId: 1000,
      totalSales: 0,
      customerService: "kefuchannelimid_719280",
      createTime: 1555563891000,
      updateTime: 1561459552000,
      productStatisticsVo: null,
      productPictureVoList: null,
      supplierProductPictureVoList: [
        {
          ppid: 686204,
          pid: 37253,
          imgType: 1,
          imgUrl:
            "http://haitao.nos.netease.com/e7e0936a25764af6b31fba26f311c4c11525954376593jh0hu4ig13297.jpg",
          imgWidth: null,
          imgHeight: null,
          sortId: 1,
          state: 1,
          createTime: 1555563892000,
          updateTime: 1555583277000
        },
        {
          ppid: 686205,
          pid: 37253,
          imgType: 1,
          imgUrl:
            "http://haitao.nos.netease.com/1a2258a19de84c938a95cde3ea88e5331525954377012jh0hu4u413298.jpg",
          imgWidth: null,
          imgHeight: null,
          sortId: 2,
          state: 1,
          createTime: 1555563892000,
          updateTime: 1555583277000
        },
        {
          ppid: 686206,
          pid: 37253,
          imgType: 1,
          imgUrl:
            "http://haitao.nos.netease.com/76bd5456369c43438655b43e88b6a20e1525954377917jh0hu5ja13299.jpg",
          imgWidth: null,
          imgHeight: null,
          sortId: 3,
          state: 1,
          createTime: 1555563892000,
          updateTime: 1555583277000
        }
      ],
      estimatedTax: 0,
      warehouseVo: null,
      shippingTemplatesVo: null,
      supplierProductSkuVoList: [
        {
          skuKey: "3fc66ce52418393b2b1ba2d81d1ecb56",
          pid: 37253,
          uid: 51,
          supplierSkuId: "20011732490",
          skuName: "默认",
          store: 4,
          marketPrice: 98.0,
          supplyPrice: 44.0,
          wholesalePrice: 0.0,
          salesPrice: 59.0,
          storePrice: 98.0,
          commissionAmount: 0.0,
          attributeValueJson:
            '[{"aid":1,"aname":"规格","pid":37253,"valueVo":{"aid":1,"pid":37253,"vid":1,"vname":"默认"}}]',
          swid: 11133,
          state: 1,
          barCode: "",
          createTime: 1555924728000,
          updateTime: 1562119774000,
          pids: null,
          object: null,
          splitOrder: null,
          taxRate: 0.0
        }
      ],
      productSeckillInfoVoList: null,
      seckillProductInfoVoList: null,
      productGroupInfoVoList: null,
      attributeNameVoList: null,
      buyNum: null,
      discountAmount: null,
      memberDiscountPrice: 7.45,
      vipPrice: 51.55,
      earnMoney: 7.45,
      seckillEarnMoney: null,
      skuKey: null,
      seckillStartTime: null,
      seckillEndTime: null,
      productSkuVo: null,
      shareUrl:
        "https://h5.jinaup.com/pc/productInfoDetail.html?pid=37253&fromInviteCode=2TWHAR5",
      xcxShareUrl: "/pages/go2detail/main?id=37253&fromInviteCode=2TWHAR5",
      xcxFriendShareUrl:
        "https://h5.jinaup.com/pc/productInfoDetail.html?pid=37253&fromInviteCode=2TWHAR5",
      cooperationType: 1,
      totalStock: 4,
      seckillPrice: null,
      originalPrice: null,
      periodValue: null,
      purchaserName: null
    };

    const userInfo = {
      avtar:
        "http://img0.imgtn.bdimg.com/it/u=1981508512,4022245524&fm=26&gp=0.jpg",
      nickName: "且行且珍惜...",
      code: "C5JSKWUU2888",
      mainUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565895943827&di=264bc722f5ef24a77b9fafef13ec76ca&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201607%2F28%2F20160728092017_kM52A.jpeg",
      title:"雅诗兰黛口红",
      urlImg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565897206240&di=b1251b6e3f09744662cc3a2f654315bf&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FzeKHx3sLdibz3xgTbiaVxLdlDCS2AZTZp45uRZ7XO1OO8YCrTRse6AYR6FqPv3QXicAxOeric2lPXuhYDzegfNdo5g%2F640%3Fwx_fmt%3Djpeg"
    };

    // 开始绘制分享图片
    // 1.获取实例
    var context = wx.createCanvasContext("shareBox");
    //保存绘图上下文
    context.save();
    //绘制圆
    //参数：圆心的x坐标,圆心的y坐标，圆的半径, 其实弧度，结束的弧度，弧度的方向是否是逆时针
    context.beginPath();
    context.arc(50,70,30,0,2 * Math.PI);
    context.closePath();
   //从原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区域）。
   context.clip();
    context.stroke();
    //绘制图片
    //参数：绘制的图片的资源，
    //     源图像的矩形选择框的左上角 x 坐标，源图像的矩形选择框的左上角 y 坐标,
    //     源图像的矩形选择框的宽度,源图像的矩形选择框的高度,
    //图像的左上角在目标 canvas 上 x 轴的位置,图像的左上角在目标 canvas 上 y 轴的位置
    //在目标画布上绘制图像的宽度，允许对绘制的图像进行缩放,在目标画布上绘制图像的高度，允许对绘制的图像进行缩放

    context.translate(50,70);
    context.drawImage(userInfo.avtar,-30,-30,60,60);
    context.restore();//恢复之前保存的绘图上下文。如果不写文字不显示
   
   

    //绘制文字
    //参数：在画布上输出的文本，绘制文本的左上角 x 坐标位置，，绘制文本的左上角 y 坐标位置,需要绘制的最大宽度，可选
    context.save();
    context.setFontSize(10);
    context.setFillStyle("blue")
    context.fillText(userInfo.nickName,100,45);
    context.setFillStyle("#000");
    context.fillText("分享给你一个商品",100+context.measureText(userInfo.nickName).width,45);
    context.setFontSize(13);
    context.setFillStyle("#000")
    context.fillText("邀请码:C5JQD7Q",100,70);

    //绘制中间的图

    context.save();
    context.drawImage(userInfo.mainUrl,0,110,375,200,0,0);
   
    context.setFontSize(15);
    context.setFillStyle("#000")
    context.fillText(userInfo.title,10,350);
    context.setFillStyle("red")
    context.fillText("￥168",10,390);
    context.setFillStyle("#999")
    context.fillText("长按识别二维码访问",10,430);

    //绘制二维码的图案

    context.save();
    context.drawImage(userInfo.urlImg,210,370,100,100,0,0);

    context.draw();

    
  }

  render() {
    return (
      <View>
        <canvas
          canvas-id="shareBox"
          style="width: 375px; height: 600px"
        />
      </View>
    );
  }
}

export default CanvasBox;
