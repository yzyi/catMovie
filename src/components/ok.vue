<template lang="html">
	<div class="body">
		<h2 id="ok">
			<h2>您已购票成功！！！</h2>
			<h3>祝您观影愉快</h3>
		</h2>
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
	*{margin:0;padding:0;}
	#ok{
		width: 100%;
		height: 100%;
		position: absolute;
		top:40%;
		left: 0;
	}
	body .body{
		background: #eee; 
		height: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
</style>