# todaynews

1 utils //  
auth.js  js-cookie
requery.js   axios

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,            ******#AAAAAAAA*****
    timeout: 5000   // request timeout
});


2.vue.config.js:

    devServer: {
        open: true,  // npm run serve后自动打开页面
        host: '0.0.0.0',  // 匹配本机IP地址(默认是0.0.0.0)
        port: 8989, // 开发服务器运行端口号
        proxy: {
            [process.env.VUE_APP_BASE_API]: {                   ****AAAAAA****
                // target: `http://test.xxx.com`,  // 跨域代理  开发环境   test.xxx.com
                target: `http://127.0.0.1:8888`,  //     生产环境       xxx.com
                // target: `http://127.0.0.1:8888/test/`,  // 开发环境
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        }
    },

3.
.env.development  //开发环境：
# just a flag
ENV = 'development'

# base api  请求接口时默认添加内容那个
#VUE_APP_BASE_API = '/dev-api'    ****AAAAAAAA****
VUE_APP_BASE_API = ''           *****将请求接口前的地址用空格代替*****
4.
.env.production     //生产环境 
# just a flag
ENV = 'production'
cnpm
# base api
# VUE_APP_BASE_API = '/prod-api'
VUE_APP_BASE_API = ''                    *****将请求接口前的地址用空格代替*****