<template lang="html">
	<div>
		<div class="citySelect-header">
			<div class="citySelect-title">	
				<goBackComponent></goBackComponent>
				城市选择
			</div>
			<div class="citySelect-txt">
				<input type="text" placeholder="输入城市中文名或拼音" class="citySelect-input" v-model="context">
			</div>
		</div>
		<div class="search-bar" @click="toKeyCity($event)">
			<ul>
				<li>#</li>
				<li v-for="(i,index) in enArr">{{i}}</li>
			</ul>
		</div>
		<div class="citySelect-content" @scroll="changeKey($event)">
			<div class="citySelect-position">
				
			</div>
			<div class="citySelect-last">
				
			</div>
			<div class="citySelect-sort" v-for="(i,index) in enArr">
				<div class="citySelect-sort-key">{{i}}</div>
				<div class="citySelect-sort-item" v-for="item in newCityData[index]">{{item.name}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import goBackComponent from "./goBackComponent.vue"
	export default{
		data (){
			return {
				context: "",
				cityData: "",
				newCityData: [],
				enArr: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
			}
		},
		mounted (){
			this.$http.get("../../static/cityData.json").then(res=>{
				this.cityData = res.body;
				for(var k=0;k<this.enArr.length;k++){
					this.newCityData.push(this.cityData.filter(i=>{
						return i["pinyin"][0] === this.enArr[k];
					}));
				}
			});
			$(window).scroll(this.menu);
		},
		methods: {
			toKeyCity (e){
				let index = $(e.target).index()-1;
				let _top = $(".citySelect-sort").eq(index).offset().top-$(".citySelect-header").height();
				document.body.scrollTop = _top;
			},
			menu (){
				this.scroll = document.body.scrollTop;
			}
		},
		components: {
			goBackComponent
		}
	}
</script>
<style lang="css">
	.citySelect-header{
		position:fixed;
		top:0;
		width:100%;
		z-index:99;
	}
	.citySelect-title{
		position:relative;
		height:4rem;
		line-height:4rem;
		text-align:left;
		background:red;
		padding-left:6rem;
		color:#fff;
		font-size:2rem;
	}
	.search-bar{
		position:fixed;
		right:0;
		top:8rem;
		bottom:0;
		width:2rem;
		line-height:2rem;
		background:#fff;
		z-index:99;
	}
	.citySelect-txt{
		height:4rem;
		line-height:4rem;
		background:#fff url("../assets/search.png") no-repeat 2rem center;
		background-size:auto 60%;
		text-align:left;
		padding-left:6rem;
	}
	.citySelect-input{
		border:none;
		outline:0;
		height:100%;
		font-size:1.8rem;
	}
	.citySelect-content::before{
		display:block;
		content:"";
		height:8rem;
	}
	.citySelect-sort{
		display:flex;
		flex-direction:column;
	}
	.citySelect-sort-key{
		padding:2rem 1rem 0;
		background:#efefef;
		text-align:left;
		color:#666;
	}
	.citySelect-sort-item{
		height:2rem;
		line-height:2rem;
		text-align:left;
		padding:1rem;
		border-top:1px solid #efefef;
	}
</style>