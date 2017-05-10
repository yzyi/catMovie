<template lang="html">
	<div>
		<div>
			<h1>热映</h1>
		</div>
		<section id="hotShowing">
			<div class="hot-swiper">
				<div class="swiper-container">
				    <div class="swiper-wrapper">
				        <div class="swiper-slide" v-for="s in swiperData">
				        	<img :src="s.img">
				        </div>
				    </div>
				</div>
			</div>
			<div v-for="i in hotData" class="hot-showing">
				<ul class="hot-show">
					<li class="hot-image-text">
						<video controls class="hot-video">
							<source type="video/mp4">
						</video>
						<img :src="i.img" class="hot-poster">
						<div class="play-icon"></div>
					</li>
					<li class="hot-info">
						<h3>{{i.nm}}</h3>
						<h4><span>观众</span> {{i.sc}}</h4>
						<p>{{i.scm}}</p>
						<p>{{i.showInfo}}</p>
						<router-link to="/Cinema" class="buy">购买</router-link>
					</li>
				</ul>
				<p class="hot-headLine" v-for="x in i.newsHeadlines">
					<router-link to="/buy">
						<i>{{x.type}}</i> {{x.title}}
					</router-link>	
				</p>
			</div>
		</section>
	</div>
</template>

<script>
	export default{
		data (){
			return {
				hotData : [],
				swiperData : []
			}
		},
		mounted (){
			// 在这里做http数据请求
			this.$http.get("../../static/hot.json").then(function(res){
				this.hotData = JSON.parse(res.bodyText).data.hot;
			})
			this.$http.get("../../static/swiper.json").then(function(res){
				this.swiperData = JSON.parse(res.bodyText).data.swiper;
			})
		},
		watch:{
			swiperData:function(){
				var mySwiper = new Swiper ('.swiper-container', {
	           		autoplay: 2000,
	                observer: true, //修改swiper自己或子元素时，自动初始化swiper            
				})  
			}
		}
	}
</script>

<style lang="css">
	li{
		list-style: none;
	}
	h4,i,b,h1,h2,h3,h5,h6{
		font-weight: normal;
		font-style: normal;
	}
	html{
		font-size:1rem;
	}
	#hotShowing{
		padding-left:1.0rem;
		box-sizing:border-box;
		width: 100%;
	}
	.hot-swiper{
		padding-right: 1rem;
	}
	.swiper-container{
		width: 100%;
	    height:15rem;
	}
	.swiper-container img{
		width: 100%;
	}
	.hot-showing{
		border-bottom: 1px solid #eee;
	}
	.hot-showing:first-of-type .hot-show .hot-info{
		border-bottom: 1px solid #eee;
		margin-left: 1rem;
		padding-left: 0;
	}
	.hot-show{
		width: 100%;
		display: flex;
	}
	.hot-image-text{
		width: 30%;
		height: 12rem;
		box-sizing:border-box;
		padding:1.0rem 0; 
		position: relative;
	}
	.hot-video{
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top:0;
		opacity: 0;
	}
	.hot-poster{
		width: 100%;
		height: 100%;
	}
	.play-icon{
		width: 38px;
		height: 38px;
		border:1px solid #fff;
		background: rgba(0,0,0,.4);
		border-radius: 50%;
		position: absolute;
		left:35%;
		top:43%;
	}
	.play-icon::before{
		content: "";
		width: 0;
		height: 0;
		display: block;
		border:10px solid #fff;
		border-top:10px solid rgba(0,0,0,0);
		border-right:10px solid rgba(0,0,0,0);
		border-bottom:10px solid rgba(0,0,0,0);
		position: absolute;
		left: 41%;
		top:25%;
	}
	.hot-info{
		height: 11rem;
		padding:1.0rem 0 0 1rem; 
		box-sizing:border-box;
		position: relative;
		width: 70%;
		text-align: left;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		color: #7e7e7e;
	}
	.hot-info h4{
		color:#ebc45b;
	}
	.hot-info h4 span{
		color: #9f9f9f;
	}
	.buy{
		display: block;
		width: 3rem;
		height: 1.5rem;
		line-height: 1.5rem;
		text-align: center;
		color: #c45450;
		border:1px solid #c45450;
		border-radius: 0.3rem;
		position: absolute;
		right:0.5rem;
		top: 40%;
	}
	.hot-headLine{
		text-align: left;
		width: 90%;
		margin-left: 10%;
		line-height: 3rem;
	}
	.hot-headLine:first-of-type{
		border-bottom: 1px solid #eee;
	}
	.hot-headLine i{
		display: inline-block;
		width: 3rem;
		height: 1.5rem;
		line-height: 1.5rem;
		border:1px solid #c59942;
		color: #c59942;
		text-align: center;
		border-radius:0.3rem;
	}
	.hot-headLine a{
		color: #7e7e7e;
		font-size: 1rem;
	}
</style>