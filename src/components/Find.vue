<template lang="html">
	<div class="">
		<router-view></router-view>
		<div class="head">
		<div class="head-inner">
			找资讯
		</div>
	</div>
	<div class="f-mune">
		<router-link to="/Top" class="f-munes munesfirst">今日Top10</router-link>
		<router-link to="/Flash" class="f-munes munestwo">影视快讯</router-link>
		<router-link to="/Mall" class="f-munes munesthired">周边商城</router-link>
		<router-link to="/Real" class="f-munes muneslast">实时票房</router-link>
	</div>
	<ul>
		<li v-for="x in itemData">
			<p>{{x.title}}</p>
			
			<!-- <img :src="x.url" alt=""> -->


		</li>
	</ul>
	</div>
</template>
<script>
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
			this.$http.get("../../static/one.json").then(function(res){
				// this.itemData = JSON.parse(res.bodyText).data.feeds;
				this.itemData = res.body.data.feeds
				// console.log(res.bodyText);
				console.log(JSON.parse(res.bodyText));
				console.log(res.body);
			})
		}
	}
		
/*
res.bodyText 取出来的是字符串所以要用JSON.parse();方法 在用链式语句取出对应数据
res.body 取出来的是对象 就可以直接点属性，取出对应的数据
*/ 


</script>
<style lang="css">
*{padding:0;margin:0;}
html{
	font-size:62.5%;
}
.head{
	width: 100%;
	height:10.0rem;
	background:red;
	display:flex;
	justify-content:center;
	align-items: center;
}
.head-inner{
	width:90%;
	height:6.0rem;
	background:white;
	color:#a9a9a9;
	font-size:3rem;
	border-radius:4.0rem;
	text-align: center;
	line-height:6rem; 
}
.f-mune{
	display: flex;
	width: 100%;
	height: 17.5rem;
	background: white;
	border-bottom:3.1rem solid #f5f5f5;
}
.f-munes{
	display: flex;
	width: 25%;
	height: 100%;
	line-height:30.5rem;
	justify-content: center;
	background:url(../assets/1.png) no-repeat;
	background-position:center 4rem;

}
	
	
	

	
	




	
	
</style>
	