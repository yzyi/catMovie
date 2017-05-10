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
		width:18%;
		padding-left:1rem;
		color:#fff;
		text-align:left;
		font-size:1.8rem;
		background:url("../assets/more_unfold.png") no-repeat 4rem center;
		background-size:auto 70%;
	}
	#address:active{
		background:#a50c04;
	}
	.title-contains{
		width:40%;
		height:100%;
		margin:0 auto;
		text-align:center;
		font-size:0;
		background:#a50c04;
		border-radius:.5rem;
	}
	.title-contains>a{
		vertical-align:top;
		margin-top:.3rem;
		width:32%;
		height:2.2rem;
		line-height:2.4rem;
		display:inline-block;
		font-size:1.8rem;
		color:#fff;
	}
	.title-contains>a:hover{
		color:red;
		background:#fff;
		border-radius:.5rem;
	}
</style>