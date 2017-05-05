<template lang="html">
	<div>
		<div>
			<h1>热映</h1>
		</div>
		<section id="hot-showing">
			<div class="hot">
				<ul class="show" v-for="i in hotData">
					<li>
						<video width="50" height="100" controls>
							<source :src="i.url" type="video/mp4">
						</video>
					</li>
					<li>
						<p>{{i.movieName}}</p>
						<h4><span>观众</span>{{i.sc}}</h4>
						<p>{{i.name}}</p>
						<p>{{i.originName}}</p>

						<router-link to="/buy" class="buy">购买</router-link>
					</li>
				</ul>
				<div class="headLine" v-for="x in hotData.newsHeadlines">
					<router-link to="/buy">
						<i>{{x.type}}</i>
						<span>{{x.title}}</span>
					</router-link>
				</div>
			</div>
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
				console.log(JSON.parse(res.bodyText));
			})
		}
	}
</script>
<style lang="css">
	
</style>