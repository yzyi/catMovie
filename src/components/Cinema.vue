<template lang="html">
	<div>
		<div v-show="isShow || isSpecial" class="cover">
		</div>
		<div v-show="isShow" class="sort">
			<div>离我最近</div>
			<div>价格最低</div>
			<div>好评优先</div>
		</div>
		<div v-show="isSpecial" class="special-function">
			<div class="special">
				特色功能
			</div>
			<div class="main">
				<span>全部</span>
				<span>可退票</span>
				<span>可改签</span>
				<span>会员卡</span>
			</div>
			<div class="special">
				特效厅
			</div>
			<div class="main">
				<span>全部</span>
				<span>60帧厅</span>
				<span>IMAX厅</span>
				<span>杜比全景声厅</span>
				<span>4k厅</span>
				<span>RealD厅</span>
				<span>中国巨幕厅</span>
				<span>4DX厅</span>
				<span>RealD 6FL厅</span>
				<span>4D厅</span>
				<span>巨幕厅</span>
				<span>120帧/4K厅</span>
				<span>双机3D厅</span>
				<span>LUXE巨幕厅</span>
			</div>
			<div class="function-btn">
				<button class="reset">重置</button>
				<button class="finish" @click="isSpecial=!isSpecial">完成</button>
			</div>
		</div>
		<div class="cinema-header">
			<header class="cinema">
				<router-link to="/address" id="address">北京</router-link>
				<h2>影院</h2>
				<h2 class="searc"><img src="../assets/search.png"></h2>
			</header>
			<div class="film-kind">
				<ul class="film-kind-ul">
					<li>区域</li>
					<li v-on:click="isShow=!isShow">离我最近</li>
					<li>品牌</li>
					<li class="server" @click="isSpecial=!isSpecial">特效/服务</li>
				</ul>
			</div>
		</div>
		<div id="banner">
			<div class="swiper-container">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide" v-for="b in bannerData">
			        	<img :src="b.img">
			        </div>
			    </div>
			</div>
		</div>
		<div class="cinema-infor">
			<ul v-for="i in cinemaData">
				<li>
					<router-link :to="{path:'/SelectCinema',query:{object:i}}">
						<p class="movieName">{{i.nm}}<span class="sellPrice">{{i.sellPrice}}</span><span class="unit">元起</span></p>
						<p class="movieAddress"><span class="addre">{{i.addr}}</span><span class="distance">{{i.distance}}</span></p>
						<p class="kind">
							<span class="allowRefund" v-if="i.tag.allowRefund>0">退</span>
							<span class="deal" v-if="i.tag.deal>0">座</span> 
							<span class="endorse" v-if="i.tag.endores>0">改签</span> 
							<span class="hallType" v-for="x in i.tag.hallType" v-if="x!=''">{{x}}</span> 
							<span class="snack" v-if="i.tag.snack>0">小吃</span> 
							<span class="vipTag" v-if="i.tag.vipTag=='折扣卡'">折扣卡</span>
						</p>
						<p class="platformActivityTag" v-if="'platformActivityTag' in i.promotion"><span class="platform">惠</span>{{i.promotion.platformActivityTag}}</p>
						<p class="cardPromotionTag" v-if="'cardPromotionTag' in i.promotion">
							<span class="cardPromotion">卡</span>{{i.promotion.cardPromotionTag}}
						</p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import Vue from "vue"
import VueResource from "vue-resource"
import Swiper from "../../static/swiper-3.3.1.min.js"
import eventTicked from "../buy.js"
Vue.use(VueResource)
export default{
	data(){
		return{
			cinemaData:'',
			isShow:false,
			isSpecial:false,
			bannerData:''
		}
	},
	mounted(){
			this.$http.get('../../static/cinemas.json').then(function (response) {
	      		this.cinemaData = response.data.data.cinemas;
	    	}).catch(function (code) {
		      alert('失败了');
		      console.log(code);
		    });
	   		 // 轮播图数据
	    	this.$http.get("../../static/hot.json").then(function(res){
				this.bannerData = JSON.parse(res.bodyText).data.hot;
				this.$nextTick(function(){
					var mySwiper = new Swiper ('.swiper-container', {
		           			autoplay: 2000,
	                		observer: true, //修改swiper自己或子元素时，自动初始化swiper
					}) 
				})
			})
	}
}
var evt = "onorientationchange" in window ? "orientationchange" : "resize";
var doc = document.documentElement;
window.addEventListener(evt, _resize, false);
window.addEventListener("DOMContentLoaded", _resize);

function _resize() {
	var cw = doc.clientWidth;
	// var cw = doc.clientWidth>720?720:doc.clientWidth;
    doc.style.fontSize = 10 * (cw / 320) + "px";
}

</script>
<style lang="css">
@import "../../static/swiper-3.3.1.min.css";
	*{
		padding:0;
		margin:0;
	}
	li{
		list-style: none;
	}
	.cinema-header{
		width: 100%;
		top: 0;
		position: fixed;
		z-index: 999;
	}
	.searc img{
		width: 2rem;
		height: 2rem;
		margin-top: 0.3rem;
		margin-right: 0.5rem;
	}
	.cinema{
		width: 100%;
		height: 3rem;
		background: #d23e34;
		line-height: 3rem;
		font-size: 1rem;
		color: white;
		font-weight: normal;
	}
	.film-kind{
		width: 100%;
		height: 3rem;
		font-size: 1rem;
		border-bottom: 1px solid #dfdfdf;
		background-color: white;
	}
	.film-kind ul{
		padding:0.5rem 0;
		display: flex;
	}
	.film-kind ul li{
		width: 25%;
		height: 2rem;
		line-height: 2rem;
		border-right: 1px solid #dfdfdf;
	}
	.film-kind ul li:after {
	    content: '▼';
		color: #adadad;
		float: right;
		margin-right: 10px;
	}
	.film-kind ul li:last-child{
		border-right:0;
	}
	.cinema-infor ul{
		width: 92%;
		border-bottom: 1px solid #dfdfdf;
		text-align: left;
		padding: 0.5rem 4%;
		height: 10rem;
	}
	.cinema-infor ul li{
		height: 100%;
	}
	.cinema-infor ul li a{
		display: block;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	/*轮播图*/
	#banner .swiper-container{
		margin-top: 4rem;
		width: 100%;
	    height:15rem;
	    z-index: 1;
	}
	.swiper-container img{
		width: 100%;
	}
	/*电影分类*/
	.movieName{
		font-size: 1rem;
		color: black;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.sellPrice{
		font-size: 1rem;
		color: red;
	}
	.unit{
		font-size: 1rem;
		color: #797979;
	}
	.movieAddress{
		height: 1rem;
		font-size: 1rem;
		color: #616161;
	}
	.addre{
		width: 85%;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		float: left;
	}

	.distance{
		float: right;
	}
	.kind{
		height: 1rem;
		font-size: 1rem;
	}
	.kind span{
		float: left;
		padding: 0 2px;
		border:1px solid;
		border-radius: 10%;
		margin-right: 3px;
	}
	.allowRefund,.deal,.endorse,.hallType{
		color: #c0d5d6;
		border-style: #c0d5d6;
	}
	.vipTag,.snack{
	color: #e4ab5c;
	border-style: #e4ab5c;
	}
	.platformActivityTag,.cardPromotionTag{
		font-size: 1rem;
		line-height: 1rem;
		color: #9d9d9d;
	}
	.platform{
		padding: 1px;
		color: white;
		background-color: #ff9600;
		margin-right: 0.43rem;
		border-radius: 10%;
	}
	.cardPromotion{
		padding: 1px;
		color: white;
		background-color: #aa7dda;
		margin-right: 0.43rem;
		border-radius: 10%;
	}
	.sort{
		position: fixed;
		width: 100%;
		text-align: left;
		top:3.7rem;
		background-color: white;
		font-size: 1rem;
		padding: 0.63rem;
		z-index: 999;
	}
	.sort div{
		height: 1.28rem;
	}
	.cover{
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top:3.73rem;
		background-color:rgba(0,0,0,0.3);
		z-index: 998;
	}
	.special-function{
		position: fixed;
		top:3.7rem;
		text-align:left;
		padding: 0 0.43rem 0.6rem 0.43rem;
		background-color: white;
		z-index: 999;
	}
	.special{
		font-size: 1rem;
		margin:0.5rem 0 0 0;
	}
	.main{
		width: 100%;
		padding-bottom: 0.6rem; 
		border-bottom: 1px solid #dfdfdf;
	}
	.main span{
		display: inline-block;
		width: 23%;
		font-size: 1rem;
		text-align: center;
		border:1px solid #dfdfdf;
		border-radius: 5%;
		padding: 0.2rem 0;
		margin-top: 0.4rem;
	}
	.function-btn{
		padding-top:0.5rem;
	}
	.function-btn button{
		font-size: 1rem;
		border:1px solid #dfdfdf;
		padding: 0.3rem 0.7rem;
		border-radius: 5%;
	}
	.function-btn .reset{
		background-color: white;
	}
	.function-btn .finish{
		float: right;
		background-color: #d73a2f;
		color: white;
	}
</style>