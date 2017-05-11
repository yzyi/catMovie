<template lang="html">
	<div class="Cinema-part" @click="offShadow()">
		<div v-show="isShow || isSpecial" class="cover">
		</div>
		<div v-show="isShow" class="sort" @click="sortData($event)">
			<div>离我最近</div>
			<div>价格最低</div>
			<div>好评优先</div>
		</div>
		<div v-show="isSpecial" class="special-function">
			<div class="special">
				特色功能
			</div>
			<div class="main" @click="filterFn1($event)">
				<span class="special-active">全部</span>
				<span>可退票</span>
				<span>可改签</span>
				<span>会员卡</span>
			</div>
			<div class="special">
				特效厅
			</div>
			<div class="main" @click="filterFn2($event)">
				<span class="special-active">全部</span>
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
				<button class="finish" @click="finish()">完成</button>
			</div>
		</div>
		<div class="cinema-header">
			<header class="cinema">
				<router-link to="/address" id="address">北京</router-link>
				影院
				<router-link to="/Search" class="cinema-toSearch"></router-link>
			</header>
			<div class="film-kind">
				<ul class="film-kind-ul">
					<li>区域</li>
					<li @click="showFn($event)">离我最近</li>
					<li>品牌</li>
					<li class="server" @click="_showFn($event)">特效/服务</li>
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
			<ul v-for="i in changeCinemaData">
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
		<FooterComponent></FooterComponent>
	</div>
</template>
<script>
import Vue from "vue"
import VueResource from "vue-resource"
import Swiper from "../../static/swiper-3.3.1.min.js"
import eventTicked from "../buy.js"
import FooterComponent from "./footerComponent"
Vue.use(VueResource)
export default{
	data(){
		return{
			cinemaData:'',
			changeCinemaData: "",  //遍历对象
			isShow:false,
			isSpecial:false,
			bannerData:'',
			query: "",  //排序
			filterDate: {
				special: "全部",
				buff: "全部"
			}  //筛选
		}
	},
	mounted(){
	    this.$http.get("../../static/cinemas.json").then(function(res){
	    	this.cinemaData = JSON.parse(res.bodyText).data.cinemas
	    	this.changeCinemaData = this.cinemaData;
	    })
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
	},
	methods: {
		showFn (e){
			e.stopPropagation();
			this.isShow = !this.isShow;
		},
		_showFn (e){
			e.stopPropagation();
			this.isSpecial = !this.isSpecial;
		},
		offShadow (){
			this.isShow = false;
			this.isSpecial = false;
		},
		sortData (e){
			// this.isShow = !this.isShow;
			//如果点击与上次相同则结束函数
			//e.target.innerText 表示当前点击元素的文本值
			if(this.query == e.target.innerText){
				return;
			}
			$(e.target).css("color","red").siblings().css("color","#000");
			this.query = e.target.innerText;
			$(".film-kind-ul>li").eq(1).text(this.query);
			if(this.query == "离我最近"){
				this.changeCinemaData = this.changeCinemaData.sort((a,b)=>{
					return a["distance"].slice(0,a["distance"].length-2) - b["distance"].slice(0,b["distance"].length-2);
				})
			}else if(this.query == "价格最低"){
				this.changeCinemaData = this.changeCinemaData.sort((a,b)=>{
					return a["price"] - b["price"];
				})
			}else if(this.query == "好评优先"){
				this.changeCinemaData = this.changeCinemaData.sort((a,b)=>{
					return b["score"] - a["score"];
				})
			}
		},
		filterFn1 (e){
			e.stopPropagation();
			this.filterDate.special = e.target.innerText;
			$(e.target).addClass("special-active").siblings().removeClass("special-active");
		},
		filterFn2 (e){
			e.stopPropagation();
			this.filterDate.buff = e.target.innerText;
			$(e.target).addClass("special-active").siblings().removeClass("special-active");
		},
		finish (){
			this.isSpecial = !this.isSpecial;
			this.changeCinemaData = this.cinemaData;
			for(var k in this["filterDate"]){
				if(k == "special"){
					this.changeCinemaData = this.changeCinemaData.filter(i=>{
						if(this["filterDate"].special === "可退票"){
							return i.tag.allowRefund === 1;
						}else if(this["filterDate"].special === "可改签"){
							return i.tag.endorse === 1;
						}else if(this["filterDate"].special === "会员卡"){
							return i.tag.vipTag && i.tag.vipTag === "折扣卡";
						}else if(this["filterDate"].special === "全部"){
							return true;
						}
					})
				}else if(k == "buff"){
					this.changeCinemaData = this.changeCinemaData.filter(i=>{
						if(this["filterDate"].buff === "全部"){
							return true;
						}
						return i.tag.hallType && i.tag.hallType[0] === this["filterDate"].buff;
					})
				}
			}
		}
	},
	components: {
		FooterComponent
	}
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
		height: 4rem;
		line-height: 4rem;
		font-size: 1.6rem;
		color: white;
		background-color: #d23e34;
		padding:0 1rem;
		box-sizing:border-box;
	}
	.cinema-toSearch{
		float:right;
		width:4rem;
		height:100%;
		background:url("../assets/search.png") no-repeat center;
		background-size:auto 80%;
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
		/*别在这用padding 会出问题*/
		position: fixed;
		width: 100%;
		line-height:3rem;
		text-align: left;
		top:7rem;
		background-color: white;
		font-size: 1.1rem;
		z-index: 999;
	}
	.sort div{
		margin-left: 1rem;
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
		top:7rem;
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
		display:flex;
		justify-content:space-around;
		flex-wrap:wrap;
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
		padding: .8rem 0;
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
	.main .special-active{
	background:rgba(255,0,0,.3);
	color:red;
	border:1px solid red;
	}
	.Cinema-View{
		height:10rem;
		background:red;
	}
</style>