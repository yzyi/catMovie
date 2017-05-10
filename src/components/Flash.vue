<template lang="html">
	<div class="">
		<div class="flash">
			<div class="flashinner">
				<span class="close" onclick="history.back()">X</span>
			影视快讯
			</div> 
		</div>
		<div class="news">
				<div class="newinner">
					<hr class="line-left"><span class="newtxt">.&nbsp;&nbsp;最新&nbsp;&nbsp;.</span><hr class="line-right">	
				</div>
		</div>
		<ul class="flashList">
				<li class="flashitems" v-for="x in flashitemsData">
					<img src="../assets/5.png" alt="" class="flash-img">
					<div class="flashitems-right">
						<div class="flashitems-title">{{x.name}}{{x.originName}}</div>
						<div class="flashitems-bom">
							<div class="flashbom-left">猫眼电影</div>
							<div class="flashbom-right">
								<span class="flashviewCount"><img src="../assets/tu6.png" alt="">122</span>
								<span><img src="../assets/tu5.png" alt="">2</span>
							</div>
						</div>
					</div>
					
				</li>
						

		</ul>
	</div>
</template>
					
			

<script>
// 《亚瑟王：斗兽争霸》媒体提前观影好评炸裂
	import Vue from "vue"
	// import App "./App.vue"
	import VueResource from "vue-resource"
	import VueRuter from  "vue-router"
	Vue.use(VueResource)
	Vue.use(VueRuter)
	export default{
		data (){
			return {
				flashitemsData: [] 
				
			}
		},
		mounted (){
			this.$http.get("../../static/flash.json").then(function(res){
				// console.log(JSON.parse(res.bodyText).data);
				this.flashitemsData = JSON.parse(res.bodyText).data
			})
		}
	}
</script>
			
			
	

			
<style lang="css">
*{padding:0;margin:0;}
html{
	font-size:62.5%;
}
.flash{
	width: 100%;
	height:6.7rem;
	background:red;
	padding-top:3.3rem;
}
.flashinner{
	width: 17rem;
	height: 3.5rem;	
	line-height:3.5rem;
	font-size:3rem;
	font-weight:bold;
	color:white;
}
.news{
	width: 100%;
	height: 10.4rem;
}
.newinner{
	width: 38.5rem;
	height: 100%;	
	margin:0 auto;
	color:#9a9a9a;
	line-height:10.2rem;
}
.newinner hr{
	float:left;
	margin-top:5.2rem;
}
.newtxt{
	float:left;
	font-size: 2.6rem;
}
.line-left{
	width: 10.0rem;
	margin-right:5.0rem;
}
.line-right{
	width: 10.0rem;
	margin-left:5.0rem;
}
/*ul*/
.flashList{
width: 100%;

}
/*li*/
.flashitems{
	overflow-x: hidden; 
	overflow-y: hidden;  
	width: 96%;
	height:17.2rem;
	margin-left:2.8rem;
	border-bottom:0.1rem solid #e5e5e5;
	padding-top:2.8rem;
	
}
/*左边图片*/
.flash-img{
	float:left;
	width: 21.5rem;	
	margin-right:2.3rem;
}
/*右边*/
.flashitems-right{
	float:left;
	width: 38.0rem;	
	height: 14.7rem;	
}
/*标题*/
.flashitems-title{
	height: 9.7rem;	
	line-height:5.6rem;
	line-height:4.9rem;
	font-size:2.7rem;
	text-align:left;
	

	
}
/*底部*/
.flashitems-bom{
	font-size:2.0rem;
	background:hotpink;
	width: 100%;
	/*height: 2.0rem;*/
}
.flashbom-left{
	width: 8.5rem;
	height: 2.3rem;
	float:left;
	margin-top:2rem;
	color:#989898;
}
.flashbom-right{
	text-align:left;
	width: 17.2rem;
	float: right;
	height: 2.3rem;
	margin-top:2rem;
	color:#989898;
}
.flashviewCount{
	margin-right: 2.6rem;
}
.flashviewCount img{
margin-right:1.0rem;
}
.flashbom-right img{
vertical-align:middle;

}

</style>





	
	



	
