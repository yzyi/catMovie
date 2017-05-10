<template lang="html">
    <footer class="Footer">
		<router-link to="/film" class="footer-link">电影</router-link>
		<router-link to="/cinema" class="footer-link">影院</router-link>
		<router-link to="/find" class="footer-link">发现</router-link>
		<router-link to="/mine" class="footer-link">我的</router-link>
    </footer>
</template>

<script>
	import SearchComponent from "./SearchComponent";
	export default{
		data (){
			return {
				
			}
		},
		components: {
			SearchComponent
		}
	}
</script>
<style lang="css">
	footer{
	  position:fixed;
	  bottom:0;
	  width:100%;
	  text-align:center;
	  display:flex;
	  justify-content:space-around;
	}
	a.footer-link{
	  padding-top:3rem;
	  flex: 1 1 25%;
	  text-align:center;
	  color:#999;
	  background:#efefef;
	  border-top:1px solid #bfbfbf;
	}
</style>