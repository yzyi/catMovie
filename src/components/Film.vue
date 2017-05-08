<template lang="html">
	<div>
		<header>
			<router-link to="/address" id="address">地址</router-link>
			<router-link to="/film/hot" id="hot">热映</router-link>
			<router-link to="/film/wait" id="wait">待映</router-link>
			<router-link to="/film/search" id="search">找片</router-link>
		</header>
		<router-view></router-view>
		<h1>主页</h1>
	</div>
</template>


<script>
	import Swiper from "../../static/swiper-3.3.1.min.js"
	import Vue from "vue"
	import VueResource from "vue-resource"
	Vue.use(VueResource)
	export default{
		data (){
			return {
				itemData: []
			}
		},
		mounted (){
			// 在这里做http数据请求
		}
	}
</script>
<style lang="css">
	@import "../../static/swiper-3.3.1.min.css";
	*{margin:0;padding:0;}
	header{
		display:flex;
		justify-content:space-between;
	}
	header>div{
		flex:1 0 25%;
		border:1px solid red;
		background:red;
		color:#fff;
		text-align:center;
		font-size:30px;
	}
</style>