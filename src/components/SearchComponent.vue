<template lang="html">
	<div class="film-title-input">
		<div class="film-title-wrap" :style="position">
			<span class="film-title-input-icon"></span>
			<input
				type="text" 
				class="film-title-txt"
				:placeholder="placeholder"
				>
		</div>
	</div>
</template>

<script>
	export default{
		props : ["placeholder","position"]
	}
</script>
<style lang="css" scoped>
	.search-wrap{
		background:#f5f5f5;
	}
	.film-title-input{
		width:100%;
		height:5rem;
		padding:1rem 0;
		background-color:#ef1106;
		text-align:center;
	}
	.film-title-wrap{
		width:90%;
		height:3rem;
		margin:0 auto;
		background:#fff;
		text-align:center;
		border-radius:2rem;
	}
	.film-title-input-icon{
		display:inline-block;
		width:14%;
		height:100%;
		background:#fff url(../assets/search1.png) no-repeat center;
		background-size:auto 60%;
		border-radius:2rem;
		vertical-align:top;
	}
	.film-title-txt{
		height:1rem;
		padding:1rem;
		color:#666;
		border:none;
		outline:0;
		vertical-align:middle;
	}
</style>