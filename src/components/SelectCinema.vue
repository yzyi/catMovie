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
	</div>
</template>

<script>
	import Vue from "vue"
	import VueResource from "vue-resource"

	Vue.use(VueResource)
	export default{
		data (){
			return {
				bannerData : [],
				cinemasData :{}
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
				        centeredSlides: true,
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
</style>