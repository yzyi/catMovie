<template lang="html">
	<div>
		<h1>待映</h1>
		<section id="hot-showing">
			<ul class="hot-show" v-for="i in hotData">
				<li class="hot-image-text">
					<video controls class="hot-video">
						<source type="video/mp4">
					</video>
					<img :src="i.img" class="hot-poster">
					<div class="play-icon"></div>
				</li>
				<li class="hot-info">
					<h3>{{i.movieName}}</h3>
					<h4><span>观众</span>{{i.sc}}</h4>
					<p>{{i.name}}</p>
					<p>{{i.originName}}</p>
					<router-link to="/buy" class="buy">购买</router-link>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
	import Vue from "vue"
	import VueResource from "vue-resource"
	Vue.use(VueResource)
	export default{
		data (){
			return {
				hotData : []
			}
		},
		mounted (){
			// 在这里做http数据请求
			this.$http.get("http://duif.applinzi.com/video.php").then(function(res){
				this.hotData = JSON.parse(res.bodyText).data;
				console.log(JSON.parse(res.bodyText).data);
			})
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
	#hot-showing{
		padding-left:1.0rem;
		width: 100%;
		font-size: 14px;
	}
	.hot-show{
		width: 100%;
		border-bottom: 1px solid #eee;
		display: flex;
	}
	.hot-image-text{
		width: 25%;
		height: 11rem;
		padding:1.0rem; 
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
		left:39%;
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
		padding:1.0rem; 
	}
</style>