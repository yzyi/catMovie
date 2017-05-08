<template lang="html">
	<div>
		<div id="buy-header">
			<a href="javascript:history.go(-1)" class="goBack"></a>
			<span>热映</span>
			<router-link to="/film/search" class="buy-search"><img src="../assets/start.png"></router-link>
		</div>
	</div>
</template>

<script>
	import Vue from "vue"
	import VueResource from "vue-resource"
	Vue.use(VueResource)
	export default{
		data (){
			return {
			}
		},
		mounted (){
			// 在这里做http数据请求
		}
	}
</script>
<style lang="css">
	*{margin:0;padding:0;}
	#buy-header{
		width: 92%;
		height: 4rem;
		line-height: 4rem;
		display: flex;
		justify-content: space-between;
		background: #fafafa;
		padding: 0 4%;
	}
	.goBack::before{
		content: "";
		width: 0.8rem;
		height: 0.8rem;
		border-top:2px solid #e2605e;
		border-left:2px solid #e2605e;
		transform: rotate(-45deg);
		display: inline-block;
		vertical-align: middle;
	}
	.buy-search{
		width: 1.8rem;
		height: 1.8rem;
	}
	.buy-search img{
		width: 100%;
		height: 100%;
		vertical-align: middle;
	}
</style>