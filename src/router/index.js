import Vue from 'vue'
import Router from 'vue-router'
import Film from "@/components/Film"
import Cinema from "@/components/Cinema"
import Find from "@/components/Find"
import Mine from "@/components/Mine"
import Address from "@/components/Address"
import Hot from "@/components/Hot"
import Wait from "@/components/Wait"
import Search from "@/components/Search"
import Login from "@/components/Login"
import Top from "@/components/Top"
import Flash from "@/components/Flash"
import Mall from "@/components/Mall"
import Real from "@/components/Real"


Vue.use(Router)

export default new Router({
  routes: 
    [{
        path: "/",
        component: Film
    },{
    	path: "/film",
    	component: Film,
        //二级路由
        children: 
        [{
            path: "hot",
            component: Hot
        },{
            path: "wait",
            component: Wait
        },
        {
            path: "search",
            component: Search
        }]
    },
    {
        path: "/address",
        component: Address
    },
    {
    	path: "/cinema",
    	component: Cinema
    },
    {
    	path: "/find",
    	component: Find,
    },
    {
        path: "/mine",
        component: Mine
    },
    {
        path: "/login",
        component: Login
    },
    {
            path: "/Top",//这里之前少个斜杠，导致子集页面渲染不出来；
            component: Top
    },{
        path: "/Flash",
        component: Flash
    },
    {
        path: "/Mall",
        component: Mall
    },
    {
        path: "/Real",
        component: Real
    }]
})


      






// 配置路由时子集路由是会继承主路由的样式的，为避免影响可不要建立子集路由，直接扩展路由即可，angular中路由也是；
