<template lang="html">
	<div class="ToSearch">
		<div class="ToSearch-wrap">
			<SearchComponent placeholder="找影视剧、影人、影院" position="text-align:left;width:80%;margin-left:1rem;"></SearchComponent>
			<router-link :to="{path: path}" class="cancel-toBack">取消</router-link>
		</div>
		<div class="ToSearch-hot">
			<p class="ToSearch-hot-title">热门搜索</p>
			<div class="ToSearch-hot-content">
				<div class="ToSearch-hot-item" v-for="item in hotData">{{item}}</div>
			</div>
		</div>
		<div class="ToSearch-config">
			<div class="ToSearch-config-item">分类找片</div>
			<div class="ToSearch-config-item">影人</div>
			<div class="ToSearch-config-item">影院</div>
			<div class="ToSearch-config-item">资讯</div>
		</div>
	</div>
</template>

<script>
	import SearchComponent from "./SearchComponent";
	export default{
		data (){
			return {
				path: "",
				hotData: ["摔跤吧！老爸","白马王子","神奇女侠","一条狗的使命","异形：契约","侠盗联盟"]
			}
		},
		components: {
			SearchComponent
		},
		mounted (){
			this.path = this.$route.query.id;
		}
	}
</script>
<style lang="css">
	.ToSearch-wrap{
		position:relative;
	}
	.cancel-toBack{
		position:absolute;
		top:50%;
		right:2rem;
		color:#fff;
		transform:translateY(-50%);
	}
	.ToSearch-hot-title{
		background:#efefef;
		text-align:left;
		padding:1rem;
		color:#666;
	}
	.ToSearch-hot-content{
		display:flex;
		flex-wrap:wrap;
		padding:0 1rem;
		justify-content:space-around;
		border-top:1px solid #cfcfcf;
	}
	.ToSearch-hot-item{
		width:20%;
		padding:1rem;
		margin-top:1rem;
		background:#efefef;
	}
	.ToSearch-config{
		display:flex;
		justify-content:space-around;
		padding:1rem;
		margin-top:1rem;
		background:#efefef;
		border-top:1px solid #cfcfcf;
	}
	.ToSearch-config-item{
		width:20%;
		padding-top:4rem;
	}
</style>