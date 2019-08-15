/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 08:51:54
 * @LastEditTime: 2019-08-14 14:19:40
 * @LastEditors: Please set LastEditors
 */
var Fly=require("flyio/dist/npm/wx") 
var fly=new Fly;

fly.config.headers={
    "content-type":"application/x-www-form-urlencoded"
}

//定义公共headers
// fly.config.headers={
//   "content-type":"application/x-www-form-urlencoded"
// }
//设置超时
fly.config.timeout = 10000;
//设置请求基地址
fly.config.baseURL = 'https://upapi.jinaup.com/';

const HOST="https://127.0.0.1";

//添加请求拦截器
fly.interceptors.request.use((request)=>{
    //给所有请求添加自定义header
       request.headers["trackId"]='F649B34989975F2670B4F00EBEE55785D60B21ABA5D20CF5323870C41407B8FE651DCC88217872EAB97035D75F2DD294F2B0425F82A80B48C7FE6ED666B43BA5E77D1A68751D59984EEF7B318DA5B91C88F2DAD1CCFDDC51DFC47275AD0E6EAEA502813EDCE59B5D';
    
  	//打印出请求体
  	console.log(request.body)
  	//终止请求
  	//var err=new Error("xxx")
  	//err.request=request
  	//return Promise.reject(new Error(""))
  
    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
    return request;
})
 
//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
    (response) => {
        //只将请求结果的data字段返回
        return response.data
    },
    (err) => {
        //发生网络错误后会走到这里
        //return Promise.resolve("ssss")
    }
)

export default fly;
