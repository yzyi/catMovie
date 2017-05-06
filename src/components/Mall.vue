<template lang="html">
	<div class="">
		<div class="top-head">
			<span>X</span>周边商城
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
	*{padding:0;margin:0;}
html{
	font-size:62.5%;
}
.top-head{
	width: 100%;
	height:10.0rem;
	background:red;
	display:flex;
	justify-content:center;
	align-items: center;
}
</style>