<template lang="html">
	<div>
		<h1>待映</h1>
		<section id="wait-showing">
			<div class="wait-recommend">
				<p>预告片推荐</p>
				<ul class="wait-prevue">
					<li v-for="i in waitData.slice(7,13)" class="wait-image-text reflected">
						<video controls class="wait-video">
							<source type="video/mp4">
						</video>
						<img :src="i.img" class="wait-poster">
						<div class="play-icon"></div>
						<h4>
							{{i.movieName}}
							<br>
							{{i.originName}}
						</h4>
					</li>
				</ul>
			</div>
			<div class="wait-recommend">
				<p>近期最受期待</p>
				<ul class="wait-prevue">
					<li v-for="i in waitData.slice(1,6)" class="wait-image-text reflected reflected-date">
						<video controls class="wait-video">
							<source type="video/mp4">
						</video>
						<img :src="i.img" class="wait-poster">
						<p>
							{{i.movieName}}
							<br>
							<span>{{i.wish}} 人想看</span>
						</p>
					</li>
				</ul>
			</div>
			<div class="wait-show-date">
				<ul class="wait-show" v-for="i in waitData">
					<li class="wait-image-text">
						<video controls class="wait-video">
							<source type="video/mp4">
						</video>
						<img :src="i.img" class="wait-poster">
						<div class="play-icon"></div>
					</li>
					<li class="wait-info">
						<h3>{{i.movieName}}</h3>
						<h4>{{i.wish}}<span>人想看</span></h4>
						<p>{{i.name}}</p>
						<p>{{i.originName}}</p>
						<router-link to="/buy" class="wait-presell">预售</router-link>
					</li>
				</ul>
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
				waitData : []
			}
		},
		mounted (){
			// 在这里做http数据请求
			this.$http.get("../../static/wait-show.json").then(function(res){
				this.waitData = JSON.parse(res.bodyText).data;
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
	a{
		text-decoration:none;
		font-size: 1.1rem;
	}
	html{
		font-size:1rem;
	}
	#wait-showing{
		width: 100%;
		font-size: 1rem;
	}
	.wait-recommend{
		margin-bottom: 2rem;
	}
	.wait-recommend>p{
		box-sizing: border-box;
		padding-left: 1rem;
		text-align: left;
		margin-bottom: 0.8rem;
		width: 100%;
		height: 3rem;
		line-height: 3rem;
		background: #f5f5f5;
	}
	.wait-recommend .wait-prevue{
		display:-webkit-box;
		overflow-x: auto;
		padding:0 1rem;
		box-sizing: border-box;
	}
	.wait-prevue .reflected{
		box-sizing: border-box;
		padding: 0;
		width: 40%;
		height:5rem;
		margin-right: 0.8rem;
		position: relative;
	}
	.wait-prevue .reflected-date{
		width: 29%;
		height:13rem;
	}
	.reflected-date video,.reflected-date img{
		height: 9rem;
	}
	.reflected-date p{
		font-size: 0.8rem;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space:nowrap;
		text-align: left;
	}
	.reflected-date p span{
		color: #888;
	}
	.reflected h4{
		color: #fff;
		position: absolute;
		left: 0;
		bottom: 0;
		font-size: 0.7rem;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space:nowrap;
		width: 80%;
		text-align: left;
		margin-left:0.3rem;
	}
	.reflected .play-icon{
		left: 40%;
		top:29%;
		width: 27px;
		height: 27px;
	}
	.reflected .play-icon::before{
		left: 41%;
		top:20%;
		border:8px solid #fff;
		border-top:8px solid rgba(0,0,0,0);
		border-right:8px solid rgba(0,0,0,0);
		border-bottom:8px solid rgba(0,0,0,0);
	}
	.wait-show-date{
		margin-left:5%;
		width: 95%;
	}
	.wait-show{
		width: 100%;
		border-bottom: 1px solid #eee;
		display: flex;
	}
	.wait-image-text{
		width: 30%;
		height: 10rem;
		padding:1.0rem 0; 
		box-sizing: border-box;
		position: relative;
	}
	.wait-video{
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top:0;
		opacity: 0;
	}
	.wait-poster{
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
		top:40%;
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
	.wait-info{
		box-sizing: border-box;
		height: 11rem;
		padding:1.0rem; 
		position: relative;
		width: 60%;
		text-align: left;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		color: #7e7e7e;
	}
	.wait-info p{
		text-overflow: ellipsis;
		overflow:hidden;
		white-space:nowrap;
		width: 70%;
	}
	.wait-info h4{
		color:#ebc45b;
	}
	.wait-info h4 span{
		color: #9f9f9f;
	}
	.wait-presell{
		display: block;
		width: 3rem;
		height: 1.5rem;
		line-height: 1.5rem;
		text-align: center;
		color: #34a0d1;
		border:1px solid #34a0d1;
		border-radius: 0.3rem;
		position: absolute;
		right:-10%;
		top: 40%;
	}
</style>