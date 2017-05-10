<template lang="html">
	<div class="">
		<router-view></router-view>
		<div class="head">
		<div class="head-inner">
			<input type="text" class="search-r" placeholder="找资讯" ng-click="tab" @click="clickEvent()">
			<!-- <img src="../assets/search.png" alt="" class="search"> -->
		</div>
	</div>
	<div class="f-mune">
		<router-link to="/Top" class="f-munes munesfirst">今日Top10</router-link>
		<router-link to="/Flash" class="f-munes munestwo">影视快讯</router-link>
		<router-link to="/Mall" class="f-munes munesthired">周边商城</router-link>
		<router-link to="/Real" class="f-munes muneslast">实时票房</router-link>
	</div>
	<ul class="mainList">
		<li v-for="x in itemData" class="items">
			<p class="items-title">{{x.title}}</p>
			<div class="items-img">
				<img src="../assets/tu1.png" alt="" class="items-imgs">
				<img src="../assets/tu2.png" alt="" class="items-imgs">
				<img src="../assets/tu3.png" alt="" class="items-imgs"> 
			</div>
			<div class="items_bom">
				<div class="bom-left">
					<span class="nickName">{{x.user.nickName}}</span>
					<span class="time">54分钟前</span>
				</div>
				<div class="bom-right">
					<span class="viewCount"><img src="../assets/tu6.png" alt="">{{x.viewCount}}</span>
					<span><img src="../assets/tu5.png" alt="">{{x.commentCount}}</span>
				</div>
				
			</div>
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
		methods: {
			clickEvent:function(){
				// alert(11)
			}

		} ,
		mounted (){
			this.$http.get("../../static/one.json").then(function(res){
				// this.itemData = JSON.parse(res.bodyText).data.feeds;
				this.itemData = res.body.data.feeds
				// console.log(res.bodyText);
				// console.log(JSON.parse(res.bodyText));
				// console.log(res.body);
			});
			// var evt = "onorientationchange" in window ? "orientationchange" : "resize";
			// var doc = document.documentElement;
			// window.addEventListener(evt, _resize, false);
			// window.addEventListener("DOMContentLoaded", _resize);

			// function _resize(){
			// 	var cw = doc.clientWidth;
			// 	// var cw = doc.clientWidth>720?720:doc.clientWidth;
			//     doc.style.fontSize = 20 * (cw / 320) + "px";
			// }
		}


		
		
/*
res.bodyText 取出来的是字符串所以要用JSON.parse();方法 在用链式语句取出对应数据
res.body 取出来的是对象 就可以直接点属性，取出对应的数据
*/ 


}


</script>

<style lang="css">
*{padding:0;margin:0;}
ul {
	list-style: none;

}
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
	color:#a9a9a9;
	font-size:3rem;
	border-radius:4.0rem;
	text-align: center;
	line-height:6rem;
	
	background:white;
}
.search-r{
	display:inline-block;
	width:100%;
	height:6.0rem;
	border-radius:4.0rem;
	background:url(../assets/search.png) no-repeat; 
	background-position:30rem 2rem;
	vertical-align:top;
	outline:none;
	border:0;
	text-indent:32rem;
	/*text-align:center;*/
	font-size:3rem;
}

.search{
	margin-right:0.5rem;

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
	text-decoration: none;
	font-size:1.5rem;
	color:#656565;
}
.muneslast{
	background:url(../assets/tu9.png) no-repeat;
	background-position:center 4rem;
}
.munesfirst{
	background:url(../assets/1.png) no-repeat;
	background-position:center 4rem;
}
.munestwo{
	background:url(../assets/tu7.png) no-repeat;
	background-position:center 4rem;
}
.munesthired{
	background:url(../assets/tu8.png) no-repeat;
	background-position:center 4rem;
}

/*mian 列表项部分*/
/*ul*/
.mainList{
	width: 100%;
}
/*li 高度不一样高，不设置高*/
.items{
	width: 90%;
	margin:0 auto;
	border-bottom:0.1rem solid #f7f7f7;
}

/*p title*/
.items-title{
	width: 100%;
	line-height:7.3rem;
	font-size: 3.0rem;
	text-align:left;
	height: 7.3rem;
}

/*放图片的div*/
.items-img{
	width: 100%;
	height: 160px;
}
	
/*图片*/
.items-imgs{
	float:left;
	width: 32.5%;
	margin-right:9px;
}
.items-imgs:last-of-type{
	margin-right:0;
}
/*底部*/
.items_bom{
	width: 100%;
	height:5.4rem;
	margin-top: 2.7rem;
	font-size:2.2rem;
	padding-top:3rem;
	color:#989898;
}
	
/*左边*/
.bom-left{
	width: 230px;
	float:left;

}
.nickName{
	margin-right:1.6rem;
}
.bom-right{
	width: 17.2rem;
	float: right;
	
}
.viewCount{
	margin-right: 2.6rem;
}
.bom-right img{
	margin-right:0.7rem;
}
.bom-right img{
	vertical-align:middle;

}
</style>



	
	
	

	
	




	
	
	