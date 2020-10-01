//登录时使用 js-cookie  引入到响应请求拦截
import Cookies from 'js-cookie'
const TokenKey = 'token'
export function setToken(token){
    return Cookies.set(TokenKey,token)
}
export function getToken(){
    return Cookies.get(TokenKey)
}
export function removeToken(){
    return Cookies.remove(TokenKey)
}