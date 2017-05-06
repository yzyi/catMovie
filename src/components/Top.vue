<template lang="html">
	<div class="">
		<div id="top">
			<span class="close">X&nbsp;今日TOP10</span>
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
#top{
	width: 100%;
	height:10.0rem;
	background:red;
	/*text-indent:1.0rem;*/
	color:white;
}
.close{
	/*display: block;*/
	/*width:4.0rem;*/
	height:4.0rem;
	/*text-align:center;*/
	background:blue;

}

</style>
	
	
	
