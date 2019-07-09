import axios from 'axios';
import store from '../store'
import router from '../router'
let baseUrl=process.env['NODE_ENV']==='development'?'http://180.167.173.154':'https://www.tradeportal.sh.cn';

const service = axios.create({
    baseURL: baseUrl, // api的base_url
    timeout: 50000 // 请求超时时间
})
service.interceptors.request.use(function (config) {
    let {token} = store.state.userInfor;
    let {method}=config;
    let {isPublic}=config.headers;

    //接口是否需要权限
    if(!isPublic){
        if(token){
            // config.headers['Content-Type'] = 'application/json;charset=UTF-8';
            config.headers['Authorization'] ='bearer '+token
        }else {
            router.push({name:'login'})
        }
    }
    return config;
    // 在发送请求之前做些什么
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log(response)
    if(response.data.code==='700'){
        /*
        判断 911 的 token type（token 失效）
        来自单一窗口，则跳转到单一窗口登录，否则跳转 login
        */
        var url=window.location.href
        window.location.href=url.split('/#/')[0]+'/#/login'
    }else{
        return response.data
    }
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default service