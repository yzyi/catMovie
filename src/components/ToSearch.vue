<template lang="html">
	<div class="ToSearch-wrap">
		<SearchComponent placeholder="找影视剧、影人、影院" position="text-align:left;width:80%;margin-left:1rem;"></SearchComponent>
		<router-link :to="{path: path}" class="cancel-toBack">取消</router-link>
	</div>
</template>

<script>
	import SearchComponent from "./SearchComponent";
	export default{
		data (){
			return {
				path: ""
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
</style>