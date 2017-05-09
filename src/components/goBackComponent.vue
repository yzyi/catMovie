<template lang="html">
	<a @click="goBack()" class="allPrize-title-arrow-left"></a>
</template>

<script>
	export default{
		methods: {
			goBack (){
				//声明式页面跳转router-link to=""
				//编程式页面跳转 $router.push()
				this.$router.push("/film/search");
			}
		}
	}
</script>
<style lang="css">
	.allPrize-title-arrow-left{
		position:absolute;
		top:50%;
		left:0;
		height:2rem;
		line-height:1.5rem;
		margin:-1rem 0 0 2rem;
		padding-right:3rem;
		border-right:1px solid rgba(0,0,0,.1);
		color:#fff;
		vertical-align:middle;
		font-size:2rem;
		background:url("../assets/back.png") no-repeat left center;
		background-size:auto 120%;
	}
</style>