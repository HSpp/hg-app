import service from './interceptor'


//post请求
export function httpPost (url,params,isLogin=false) {
    return service({
        url:url,
        method:'post',
        headers: {
            'Content-Type':isLogin?'application/x-www-form-urlencoded':'application/json;;charset=UTF-8',
            // Accept: '*/*'
        },
        data:isLogin?params:JSON.stringify(params)
    })
}
//get请求
export function httpGet(url,params,authorization=false) {
    return service({
        url:url,
        method:'get',
        data:params,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': '*/*',
            'isPublic':authorization

        }
    })
}
//form表单文件上传
export function httpUpload(url,params) {
    return service({
        url:url,
        method:'post',
        data:params,
        headers:{
            'Content-Type':'multipart/form-data'
        }
    })

}
//返回文件流(pdf查看)
export function httpBuffer(url,params){
    return service({
        responseType: 'arraybuffer',
        url:url,
        method:'post',
        data:JSON.stringify(params),
    })
}
//使用h5（blob）下载文件
export function httpDownload(url,params){
    return service({
        method: 'post',
        url: url,
        data: JSON.stringify(params),
        responseType: 'blob',
        responseEncoding: 'IS08859-1'
    })
}