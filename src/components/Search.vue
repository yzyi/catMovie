<template lang="html">
	<div class="search-wrap">
		<router-link :to="{ path: '/toSearch', query: { id: path}}">
			<SearchComponent placeholder="找影视剧、影人、影院" position="text-align:center;"></SearchComponent>
		</router-link>
		<div class="film-search-sort">
			<div class="film-search-sort-style film-search-sort-module" v-for="(i,index) in getSortData.slice(0,3)">
				<div class="film-search-sort-allitem">
					{{i.tagTypeName}}
				</div>
				<div class="film-search-sort-item" v-for="(item,ind) in i.tagList" @click="filmSearchSort($event,index)">
					{{item.tagName}}
				</div>
			</div>
		</div>
		<div class="film-search-hot">
			<div class="film-search-hot-module" v-for="i in hotMain" :style="{background:`url(${i.url}) no-repeat 80% center`,backgroundSize: `20% auto`}">
				<!-- 根据不同id值跳转不同页面 -->
				<router-link :to="{path:'/boardId',query:{id: i.boardId,titleMes: i.boardName,src: path}}">
					<p class="film-search-hot-title">{{i.boardName}}</p>
					<p class="film-search-hot-name">{{i.movieName}}</p>
				</router-link>
			</div>
		</div>
		<div class="film-search-globalprize">
			<h2 class="film-search-globalprize-title">
				全球电影奖项
			</h2>
			<div class="film-search-globalprize-box">
				<ul class="film-search-globalprize-list" v-for="(i,index) in prizeGlobel">
					<li class="film-search-globalprize-item" :style="{background:`url(${urlData[`Url${index+41}`]}) no-repeat center bottom`}">
						<p class="film-search-globalprize-name">
							{{i.festivalName}}
						</p>
						<p class="film-search-globalprize-date">
							<span></span>
							{{i.heldDate.slice(5)}}
							<span></span>
						</p>
					</li>
					<p class="film-search-filmName">
						{{i.movieName}}
					</p>
				</ul>
			</div>
			<router-link to="/allPrize">
				<div class="film-search-allPrize">
					全部电影奖项 >
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	import SearchComponent from "./SearchComponent"
	export default{
		data (){
			return {
				path: this.$route.path,
				hotMain:"",
				hotFilmData: "",
				hotWelcomData: "",
				hotSeaData: "",
				hotTopData: "",
				prizeGlobel: "",
				urlData: "",
				getSortData: ""
			}
		},
		mounted (){
			this.$http.get("../../static/search-type-data.json").then((res)=>{
				//直到获取最后数组再去遍历
				this.getSortData = JSON.parse(res.bodyText).data;
			});
			this.$http.get("../../static/search-hot-main-data.json").then((res)=>{
				this.hotMain = JSON.parse(res.bodyText).data;
			});
			this.$http.get("../../static/search-global-prize.json").then((res)=>{
				this.prizeGlobel = JSON.parse(res.bodyText).data;
			});
			this.$http.get("../../static/getUrl2.json").then(res=>{
				this.urlData = res.body;
			})
		},
		components: {
			SearchComponent
		},
		methods: {
			filmSearchSort (e,index){
				this.$router.push({
					path: "/filmSort",
					query: {
						txt: e.target.innerText,
						node: e.target.parentNode.className,
						index: index
					}
				});
			}
		}
	}
</script>
<style lang="css">
	@import "../styles/Search.css";
	@import "../styles/SortSearch.css";
</style>