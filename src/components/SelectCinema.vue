<template lang="html">
	<div>
		<div id="cinemasData">
			<div class="buy-header">
				<a href="javascript:history.go(-1)" class="goBack"></a>
				<span>{{cinemasData.nm}}</span>
				<router-link to="/film/search" class="buy-search"><img src="../assets/star.png"></router-link>
			</div>
			<ul class="cinemasData-info">
				<li>
					<a href="javascript:history.go(-1)">
						<p class="movieAddress"><span class="addre">{{cinemasData.addr}}</span><span class="distance">{{cinemasData.distance}}</span></p>
						<p class="kind">
							<span class="allowRefund" v-if="cinemasData.tag.allowRefund>0">退</span>
							<span class="deal" v-if="cinemasData.tag.deal>0">座</span> 
							<span class="endorse" v-if="cinemasData.tag.endores>0">改签</span> 
							<span class="hallType" v-for="x in cinemasData.tag.hallType" v-if="x!=''">{{x}}</span> 
							<span class="snack" v-if="cinemasData.tag.snack>0">小吃</span> 
							<span class="vipTag" v-if="cinemasData.tag.vipTag=='折扣卡'">折扣卡</span>
						</p>
						<p class="platformActivityTag" v-if="'platformActivityTag' in cinemasData.promotion"><span class="platform">惠</span>{{cinemasData.promotion.platformActivityTag}}</p>
						<p class="cardPromotionTag" v-if="'cardPromotionTag' in cinemasData.promotion">
							<span class="cardPromotion">卡</span>{{cinemasData.promotion.cardPromotionTag}}
						</p>
					</a>
				</li>
				<li class="buy-favorable">
					<a href="javascript:void(0);"><img src="../assets/guanying.gif"></a>
					<a href="javascript:void(0);"><img src="../assets/zhekou.gif"></a>
				</li>
			</ul>
		</div>
		<div id="banner">
			<div class="swiper-container buyBanner">
			    <div class="swiper-wrapper buyBannerBg">
			        <div class="swiper-slide" v-for="b in bannerData">
			        	<img :src="b.img">
			        	<div class="film-info">
			        		<p>{{b.nm}} <span>{{b.mk}}</span></p>
			        		<p>{{b.showCinemaNum}}分钟 | {{b.cat.slice(0,2)}} | {{b.star.split(",")[0]}}</p>
			        	</div>
			        </div>
			    </div>
			</div>
		</div>
		<div class="data-today">
			<p>今天5月9日</p>
			<ul class="buy-ticket" v-for="i in new Array(7)">
				<li>
					<p class="time-start">11:55</p>
					<p class="time-end">14:11散场</p>
				</li>
				<li>
					<p>原版3D</p>
					<p class="buy-size">4号厅(4K超<br>清厅)(大)</p>
				</li>
				<li>
					<p class="buy-price">39元</p>
					<p class="buy-preference">折扣卡首单<br>特惠</p>
				</li>
				<li class="buy-buys" @click="clickFun(cinemasData,bannerData)">
					<router-link to="/buyTicket">购买</router-link> 
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Vue from "vue"
	import VueResource from "vue-resource"
    import eventTicked from "../buy.js"
	Vue.use(VueResource)
	export default{
		data (){
			return {
				bannerData : [],
				cinemasData : {},
				timesData : []
			}
		},
		mounted (){
			// 在这里做http数据请求
			this.$http.get("../../static/hot.json").then(function(res){
				this.bannerData = JSON.parse(res.bodyText).data.hot;
				this.$nextTick(function(){
					var mySwiper = new Swiper ('.swiper-container', {
		           		pagination: '.swiper-pagination',
				        effect: 'coverflow',
				        grabCursor: true,
				        centSlides: true,
				        slidesPerView: 'auto',
				        coverflow: {
				            rotate: 50,
				            stretch: 0,
				            depth: 100,
				            modifier: 1,
				            slideShadows : true   
				        }      
					}) 
				})
			})
		},
		created : function(){
			this.cinemasData = this.$route.query.object;
			// this.bannerData = this.$route.query.object;

		},
		methods:{
			clickFun:function(m,b){
				eventTicked.$emit("add",m,b);
				var timeStart = document.getElementsByClassName('time-start').innerHTML,
					timeEnd = document.getElementsByClassName('time-end').innerHTML;
			}

			
		}
	}
</script>
<style lang="css">
	*{margin:0;padding:0;}
	.buy-header{
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
	.cinemasData-info{
		width: 92%;
		text-align: left;
		padding: 0.5rem 4%;
		height:14rem;
	}
	.cinemasData-info li:first-of-type{
		height: 60%;
	}
	.cinemasData-info li:first-of-type a{
		display: block;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.buy-favorable{
		margin-top: 3%;
		width: 100%;
		height:35%; 
		display: flex;
		justify-content: space-around;
	}
	.buy-favorable a{
		width: 45%;
	}
	.buy-favorable a img{
		height: 100%;
		width: 100%;	
	}
	#banner{
		width: 100%;
		border-bottom: 1px solid #eee;
	}
	#banner .buyBanner{
		width: 100%;
	    height: 17.5rem;
	    background: #495273;
	    position: relative;
	    margin-top: 1rem;
	}
	.buyBannerBg{
		padding:1rem 0;
		height:10rem;
	    
	}
	.buyBanner img{
		width: 40%;
		height: 100%;
	}
	.film-info{
		color: #000;
		position:relative;
		left:0;
		bottom:0;
		background: #fff;
		width: 100%;
		height: 4.5rem;
		margin-top: 1rem;
		padding: 0.5rem 0;
	}
	.film-info p{
		height:2rem;
		line-height: 2rem;
	}
	.film-info p span{
		color:#ebc45b;
	}
	.film-info p:last-of-type{
		color:#919191;
	}
	.film-info::before{
		display:block;
		content:"";
		border:10px solid #fff;
		border-top: 10px solid rgba(0,0,0,0);
		border-left: 10px solid rgba(0,0,0,0);
		border-right: 10px solid rgba(0,0,0,0);
		position: absolute;
		top:-1.6rem;
		left: 47%;
	}
	.data-today{
		width: 100%;
		font-size: 1.2rem;
		margin-top: 1rem;
	}
	.data-today>p{
		border-bottom: 1px solid #d0393e;
		text-align: left;
		padding-left: 0.6rem;
		color: #d0393e;
		height: 2.7rem;
		line-height: 2.7rem;
	}
	.buy-ticket{
		width: 100%;
		padding:2rem 0; 
		text-align: left;
		border-bottom: 1px solid #efefef;
		display: flex;
		justify-content: space-around;
	}
	.buy-price{
		color: #d0393e;
	}
	.buy-buys a{
		display: inline-block;
		border:1px solid #d0393e;
		padding:0.2rem 0.5rem;
		border-radius: 5px;
		color: #d0393e;
		vertical-align: bottom;
	}
	.time-end, .buy-size, .buy-preference{
		color: #b7b7b7;

	}
</style>