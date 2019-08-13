/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 14:34:08
 * @LastEditTime: 2019-08-13 17:45:33
 * @LastEditors: Please set LastEditors
 */
var Fly = require("flyio/dist/npm/wx");

export let fly = new Fly();

fly.config.headers = {
  "content-type": "application/x-www-form-urlencoded"
 };

//定义公共headers
// fly.config.headers={
//   "content-type":"application/x-www-form-urlencoded"
// }
//设置超时
fly.config.timeout = 10000;
//设置请求基地址
fly.config.baseURL = "https://upapi.jinaup.com/";

const HOST = "https://127.0.0.1";

//添加请求拦截器
fly.interceptors.request.use(request => {
  //给所有请求添加自定义header
  request.headers["trackId"] =
    "F649B34989975F268EA5BC4927E7C2365DBB8293767D955992FF410009F6B2DE301BCDFBE166230EBF083C72B5B6A948277C0041980DAC5E46FA1EF475B12D4773F05A5E984CF1D814817C9546DF831BF9D9BD6C1F2231AFA450731B6837E7084E77DC9918A436BC";

  //打印出请求体
  console.log(request.body);
  //终止请求
  //var err=new Error("xxx")
  //err.request=request
  //return Promise.reject(new Error(""))

  //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request;
});

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  response => {
    //只将请求结果的data字段返回
    return response.data;
  },
  err => {
    //发生网络错误后会走到这里
    //return Promise.resolve("ssss")
  }
);

export default fly;
