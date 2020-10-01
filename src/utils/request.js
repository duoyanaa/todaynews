//请求响应拦截的配置
import axios from 'axios'  //引入axios请求方式
import { getToken } from "./auth.js"


const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url
    timeout: 5000   // requrey timeout
});
// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 若果有token，存入请求头
    if (getToken()) {
        config.headers['X-Token'] = getToken();
        // config.headers['Access-Token'] = getToken()
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});




// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    const res = response.data
    if (res.code !== 200) {
        if (res.code == 508 || res.code == 512 || res.code == 514) {
            console.log(res)
        } return Promise.reject(new Error(res.message || "Error"));
    } else {
        return res
    }

}, function (error) {
    // 对响应错误做点什么
    console.log('err' + error)
    return Promise.reject(error);
});

export default service


