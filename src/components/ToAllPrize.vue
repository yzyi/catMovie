<template lang="html">
	<div id="allPrize">
		<div class="allPrize-title">
			<goBackComponent></goBackComponent>
			全球电影奖项
		</div>
		<div class="allPrize-content" v-for="i in sortData">
			<div class="allPrize-content-title">
				{{i.region}}
			</div>
			<div class="allPrize-content-sort">
				<div class="allPrize-content-sort-item" v-for="item in i.festivals">
					{{item.festivalName}}
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import goBackComponent from "./goBackComponent.vue"
	export default{
		data (){
			return {
				sortData: ""
			}
		},
		mounted (){
			this.$http.get("../../static/allPrize.json").then(res=>{
				this.sortData = res.body.data;
			})
		},
		components: {
			goBackComponent
		}
	}
</script>
<style lang="css">
	.allPrize-title{
		position:relative;
		height:4rem;
		line-height:4rem;
		background:red;
		font-size:2rem;
		text-indent:center;
		color:#fff;
	}
	.allPrize-content-title{
		height:4rem;
		background-color:#efefef;
		line-height:4rem;
		padding:0 1rem;
		text-align:left;
	}
	.allPrize-content-sort{
		width:100%;
		display:flex;
		flex-wrap:wrap;
	}
	.allPrize-content-sort-item{
		width:50%;
		height:4rem;
		line-height:4rem;
		text-align:center;
		border:1px solid #efefef;
		border-left:none;
		border-top:none;
		box-sizing:border-box;
	}
</style>