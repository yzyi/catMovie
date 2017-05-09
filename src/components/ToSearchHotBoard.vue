<template lang="html">
	<div class="HotBoard-wrap">
		<div class="HotBoard-title">
			<router-link :to="{path: src}" class="go-back">←</router-link>
			{{titleMes}}榜单
		</div>
		<div class="HotBoard-introduct">
			<p class="HotBoard-introduct-date">{{upDate}}更新</p>
			<p class="HotBoard-introduct-content">{{content}}</p>
		</div>
		<div class="HotBoard-wrap-list-wrap">
			<ul class="HotBoard-wrap-list">
				<li class="HotBoard-wrap-list-item" v-for="(i,index) in boardContentArr" :style="{background:`url(${boardUrl[`part${num}`][`Url${index}`]}) no-repeat 1rem center`}">
					<div class="HotBoard-wrap-list-item-title">
						<div class="HotBoard-wrap-list-item-name">
							{{i.nm}}
						</div>
						<div class="HotBoard-wrap-list-item-score">
							{{i.sc}}
						</div>
					</div>
					<div class="HotBoard-wrap-list-item-con">
						<p>{{i.star}}</p>
						<p>{{i.pubDesc}}</p>
						<span class="HotBoard-wantLook">
							<span class="HotBoard-heart-empty"></span>
							想看
						</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		data (){
			return {
				num: "",
				src: "",
				titleMes: "",
				content: "",
				upDate: "",
				boardContentArr: "",
				boardUrl:""
			}
		},
		mounted (){
			this.num = this.$route.query.id;
			this.src = this.$route.query.src;
			this.titleMes = this.$route.query.titleMes;
			this.$http.get(`../../static/search-hot${this.num}.json`).then(res=>{
				let board = res.body.data;
				this.content = board.content;
				this.upDate = board.created;
				this.boardContentArr = board.movies;
			});
			this.$http.get(`../../static/getUrl.json`).then(res=>{
				this.boardUrl = res.body;
			})
		}
	}
</script>
<style lang="css">
	.HotBoard-title{
		height:4rem;
		line-height:4rem;
		background:red;
		text-align:left;
		color:#fff;
		font-size:2rem;
	}
	.go-back{
		display:inline-block;
		width:10%;
		height:100%;
		vertical-align:top;
		text-align:center;
		font-size:3rem;
		color:#fff;
		line-height:130%;
	}
	.HotBoard-introduct{
		padding:2rem;
		text-align:left;
		color:#999;
		line-height:2rem;
	}
	.HotBoard-wrap-list-item{
		list-style:none;
		height:10rem;
		padding:1rem 1rem 1rem 20%;
		background-size:15% !important;
		text-align:left;
		border-top:1px solid #efefef;
	}
	.HotBoard-wrap-list-item-title{
		display:flex;
		justify-content:space-between;
		line-height:4rem;
	}
	.HotBoard-wrap-list-item-con{
		position:relative;
		line-height:2rem;
	}
	.HotBoard-wrap-list-item-score{
		color:orange;
		padding-right:1rem;
	}
	.HotBoard-wantLook{
		position:absolute;
		right:0;
		bottom:0;
		width:5rem;
		height:2rem;
		padding-right:.5rem;
		line-height:2rem;
		text-align:right;
		border:1px solid red;
		border-radius:2px;
		color:red;
	}
	.HotBoard-wantLook .glyphicon-heart-empty{
		left:10%;
		text-align:left;
		color:red;
	}
</style>