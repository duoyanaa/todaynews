import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)  //使用中间件
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/first'
        },
        {
            path: '/first',
            component: () => import("../views/first/index.vue"),
            redirect: '/first/recommend',
            children: [
                {
                    path: 'attention',
                    name: 'FAttention',
                    component: () => import("../views/first/attention/index.vue")
                },
                {
                    path: 'recommend',
                    name: 'FRecommend',
                    component: () => import("../views/first/recommend/index.vue")
                },
                {
                    path: 'loaclcity',
                    name: 'FLoaclcity',
                    component: () => import("../views/first/loaclcity/index.vue")
                },
                {
                    path: 'epidemic',
                    name: 'FEpidemic',
                    component: () => import("../views/first/epidemic/index.vue")
                },
                {
                    path: 'hotsearch',
                    name: 'FHotsearch',
                    component: () => import("../views/first/hotsearch/index.vue")
                },
                {
                    path: 'gratis',
                    name: 'FGratis',
                    component: () => import("../views/first/gratis/index.vue")
                },
                {
                    path: 'society',
                    name: 'FSociety',
                    component: () => import("../views/first/society/index.vue")
                },
                {
                    path: 'recreation',
                    name: 'FRecreation',
                    component: () => import("../views/first/recreation/index.vue")
                },
                {
                    path: 'technology',
                    name: 'FTechnology',
                    component: () => import("../views/first/technology/index.vue")
                },
                {
                    path: 'military',
                    name: 'FMilitary',
                    component: () => import("../views/first/military/index.vue")
                },
            ]
        },
        {
            path: '/personcenter',
            name:'Personcenter',
            component: () => import("../views/personcenter/index.vue"),
        },
        {
            path: '/viodes',
            component: () => import("../views/viodes/index.vue"),
            redirect: '/viodes/recommend',
            children: [
                {
                    path: 'attention',
                    name: 'Attention',
                    component: () => import("../views/viodes/attention/index.vue")
                },
                {
                    path: 'recommend',
                    name: 'Recommend',
                    component: () => import("../views/viodes/recommend/index.vue")
                },
                {
                    path: 'loaclcity',
                    name: 'Loaclcity',
                    component: () => import("../views/viodes/loaclcity/index.vue")
                },
                {
                    path: 'epidemic',
                    name: 'Epidemic',
                    component: () => import("../views/viodes/epidemic/index.vue")
                },
                {
                    path: 'hotsearch',
                    name: 'Hotsearch',
                    component: () => import("../views/viodes/hotsearch/index.vue")
                },
                {
                    path: 'gratis',
                    name: 'Gratis',
                    component: () => import("../views/viodes/gratis/index.vue")
                },
                {
                    path: 'society',
                    name: 'Society',
                    component: () => import("../views/viodes/society/index.vue")
                },
                {
                    path: 'recreation',
                    name: 'Recreation',
                    component: () => import("../views/viodes/recreation/index.vue")
                },
                {
                    path: 'technology',
                    name: 'Technology',
                    component: () => import("../views/viodes/technology/index.vue")
                },
                {
                    path: 'military',
                    name: 'Military',
                    component: () => import("../views/viodes/military/index.vue")
                },
            ]
        },
        {
            path: '/mine',
            component: () => import("../views/mine/index.vue"),
            redirect: '/mine/message',
            children: [
                {
                    path: 'login',
                    name: 'Login',
                    component: () => import("../views/mine/login/index.vue")
                },
                {
                    path: 'message',
                    name: 'Message',
                    component: () => import("../views/mine/message/index.vue")
                }
            ]
        },
        {
            path: '/videohall',
            component: () => import("../views/videohall/index.vue"),
        },
        {
            path: '/goissue',
            component: () => import("../views/goissue/index.vue"),
            redirect: '/goissue/smalltext',
            children: [
                {
                    path: 'smalltext',
                    name: 'Smalltext',
                    component: () => import("../views/goissue/smalltext/index.vue"),
                },
                {
                    path: 'bigtext',
                    name: 'Bigtext',
                    component: () => import("../views/goissue/bigtext/index.vue"),
                },
                {
                    path: 'bigvideo',
                    name: 'Bigvideo',
                    component: () => import("../views/goissue/bigvideo/index.vue"),
                },

                {
                    path: 'smallvideo',
                    name: 'smallvideo',
                    component: () => import("../views/goissue/smallvideo/index.vue"),
                },
            ]
        },
        {
            path: '/search',
            name:'Search',
            component: () => import("../views/search/index.vue"),
        },
    ]
})
export default router;