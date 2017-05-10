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
import ToSearch from "@/components/ToSearch"
import ToSearchHotBoard from "@/components/ToSearchHotBoard"
import ToAllPrize from "@/components/ToAllPrize"
import FilmSort from "@/components/FilmSortPage"

Vue.use(Router)

export default new Router({
  routes: 
    [{
        path: "/",
        redirect: "/film"
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
    	component: Find
    },
    {
        path: "/mine",
        component: Mine
    },
    {
        path: "/login",
        component: Login
    },
    {   path: "/toSearch",
        component: ToSearch
    },
    {
        path: "/boardId",
        component: ToSearchHotBoard
    },
    {
        path: "/allPrize",
        component: ToAllPrize
    },
    {
        path: "/filmSort",
        component: FilmSort
    }]
})
