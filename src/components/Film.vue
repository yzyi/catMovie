<template lang="html">
	<div>
		<div class="Film-View">
			<router-link to="/address" id="address">
				地址
			</router-link>
			<div class="title-contains">
				<router-link to="/film/hot" id="hot">热映</router-link>
				<router-link to="/film/wait" id="wait">待映</router-link>
				<router-link to="/film/search" id="search">找片</router-link>
			</div>
		</div>
		<router-view></router-view>
    	<FooterComponent></FooterComponent>
	</div>
</template>


<script>
	import Swiper from "../../static/swiper-3.3.1.min.js"
	import Vue from "vue"
	import VueResource from "vue-resource"
	import FooterComponent from "./footerComponent"
	Vue.use(VueResource)
	export default{
		components: {
			FooterComponent
		}
	}
</script>
<style lang="css">
	@import "../../static/swiper-3.3.1.min.css";
	*{margin:0;padding:0;}
	.Film-View{
		width:100%;
		height:5rem;
		line-height:3rem;
		padding:1rem 2rem;
		background:#ef1106;
		color:#fff;
		box-sizing:border-box;
	}
	#address{
		float:left;
		position:relative;
		width:15%;
		color:#fff;
		text-align:left;
		background:url("../assets/more_unfold.png") no-repeat right center;
		background-size:auto 70%;
		font-size:1.8rem;
	}
	#address:active{
		background:#a50c04;
	}
	.title-contains{
		width:50%;
		height:100%;
		margin:0 auto;
		text-align:center;
		background:#a50c04;
		border-radius:.5rem;
		font-size:1.4rem;
	}
	.title-contains>a{
		vertical-align:top;
		margin-top:.3rem;
		width:32%;
		height:2.2rem;
		line-height:2.4rem;
		display:inline-block;
		color:#fff;
	}
	.title-contains>a:hover{
		color:red;
		background:#fff;
		border-radius:.5rem;
	}
</style>