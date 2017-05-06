<template lang="html">
	<div>
		<div>
			<h1>热映</h1>
		</div>
		<section id="hot-showing">
			<ul class="show" v-for="i in hotData">
				<li class="hot">
					<video controls class="video">
						<source type="video/mp4">
					</video>
					<img :src="i.img" class="poster">
				</li>
				<li>
					<h3>{{i.movieName}}</h3>
					<h4><span>观众</span>{{i.sc}}</h4>
					<p>{{i.name}}</p>
					<p>{{i.originName}}</p>

					<router-link to="/buy" class="buy">购买</router-link>
				</li>
				<li class="headLine" v-for="x in hotData.newsHeadlines">
					<router-link to="/buy">
					<i>{{x.type}}</i>
					<span>{{x.title}}</span>
				</router-link>
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
	.show{
		width: 100%;
		border-bottom: 1px solid #eee;
		display: flex;
	}
	.hot{
		width: 30%;
		height: 12rem;
		padding:1.0rem; 
		position: relative;
	}
	.video{
		width: 1rem;
		height: 1rem;
		position: absolute;
		left: 37%;
		top:45%;
	}
	.poster{
		width: 100%;
		height: 100%;
	}
</style>