<template lang="html">
	<div class="">
		<div id="top">
				<div class="topinner">
					<span class="close">X</span>
					今日TOP10
				</div>
		</div>
		<ul class="topList">
			<li class="topitems" v-for="x in topitemsData">
				<img src="../assets/4.png" alt="" class="topitems-img">
				<!-- <img :src="x.url" alt="" class="topitems-img"> -->
				<div class="topitems-right">
					<div class="topitems-title">{{x.title}}</div>
					<div class="topitems-right_bom">
						<div class="topbom-left">
							<!-- {{x.user.nickName}} -->猫眼电影
						</div>
						<div class="topbom-right">
							<span class="topviewCount"><img src="../assets/tu6.png" alt="">{{x.commentCount}}万</span>
							<span><img src="../assets/tu5.png" alt="">79</span>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
							
					

<script>
// 开心麻花《羞羞的铁拳》定档<br/>930，艾玛马丽沈腾爆笑出拳
	import Vue from "vue"
	import VueResource from "vue-resource"
	Vue.use(VueResource)
	export default{
		data (){
			return {
				topitemsData: []
				
			}
		},
		mounted (){
			this.$http.get("../../static/two.json").then(function(res){
				console.log(JSON.parse(res.bodyText).data.feeds);
				this.topitemsData = JSON.parse(res.bodyText).data.feeds

			})
			
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
	height:6.7rem;
	background:red;
	color:white;
	padding-top:3.3rem;
	overflow-x: hidden;
}
.topinner{
		width: 17rem;
		height: 3.5rem;	
		line-height:3.5rem;
		font-size:3rem;
		font-weight:bold;
}
	
.close{
	width: 3.8rem;
	height: 3.8rem;	
	float:left;
}
	
/*ul*/
.topList{
	width: 100%;
}
/*li*/
.topitems{
	overflow-x: hidden; 
	overflow-y: hidden;  
	width: 96%;
	height:17.2rem;
	margin-left:2.8rem;
	border-bottom:0.1rem solid #e5e5e5;
	padding-top:2.8rem;
}
	
/*左边图片*/
.topitems-img{
	float:left;
	width: 21.5rem;	
	margin-right:2.3rem;
}
/*右边*/
.topitems-right{
	float:left;
	width: 38.0rem;	
	height: 14.7rem;	
}
/*标题*/
.topitems-title{
	height: 9.7rem;	
	line-height:5.6rem;
	line-height:4.9rem;
	font-size:2.7rem;
	text-align:left;
}
	
/*底部*/
.topitems-right_bom{
	font-size:2.0rem;
}
.topbom-left{
	width: 8.5rem;
	height: 2.3rem;
	float:left;
	margin-top:2rem;
	color:#989898;
}
.topbom-right{
	text-align:left;
	width: 17.2rem;
	float: right;
	height: 2.3rem;
	margin-top:2rem;
	color:#989898;
}
.topviewCount{
	margin-right: 2.6rem;
}
.topviewCount img{
margin-right:1.0rem;
}
.topbom-right img{
vertical-align:middle;

}

	
	

	
	

	







	
	


</style>
	
	
	
