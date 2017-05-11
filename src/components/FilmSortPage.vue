<template lang="html">
	<div class="FilmSortPage">
		<div class="FilmSortPage-title">
			<goBackComponent></goBackComponent>
			分类查找
			<router-link :to="{ path: '/toSearch', query: { id: path}}" class="FilmSortPage-icon"></router-link>
		</div>
		<div class="film-search-sort">
			<div class="film-search-sort-style film-search-sort-module" v-for="(i,index) in getSortData">
				<div class="film-search-sort-allitem film-search-sort-item-active" @click="filmSearchSort($event,index)">
					全部
				</div>
				<div class="film-search-sort-item" v-for="(item,ind) in i.tagList" @click="filmSearchSort($event,index)" :class="item.tagName === $route.query.txt ? 'film-search-sort-item-active' : ''">
					{{item.tagName}}
					 
				</div>
			</div>
		</div>
		<div class="FilmSortPage-content">
			<ul>
				<li class="FilmSortPage-item" v-for="(i,index) in sortArr" :style="{background:`url(${urlData[`Url${index+41}`]}) no-repeat 1rem center`}">
					<p class="FilmSortPage-item-cn">{{i.nm}}</p>
					<p class="FilmSortPage-item-en">{{i.enm}}</p>
					<p class="FilmSortPage-item-type">{{i.cat}}</p>
					<p class="FilmSortPage-item-year">{{i.pubDesc}}</p>
					<span class="FilmSortPage-item-score">{{i.sc}}分</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import goBackComponent from "./goBackComponent.vue"
	export default{
		data (){
			return {
				path: this.$route.path,
				sumArr: "",
				sortArr: "",
				urlData : "",
				query: {
					cat: "",
					fra: "",
					frt: ""
				},
				getSortData: "",
				_index: ""
			}
		},
		mounted (){
			//获取顶部分类条数据
			this.$http.get("../../static/search-type-data.json").then((res)=>{
				//直到获取最后数组再去遍历
				this.getSortData = JSON.parse(res.bodyText).data;
			});
			//获取筛选后的数据
			this.$http.get("../../static/sortToSearch1.json").then(res=>{
				this.sumArr = res.body.list;
				//根据类型 地区 年份进行筛选
				this._index = this.$route.query.index;
				$(".film-search-sort-allitem").eq(this._index).removeClass("film-search-sort-item-active");
				if(this._index === 0){
					this.query.cat = this.$route.query.txt;
					this.sortArr = this.sumArr.filter(i=>{
						return i.cat.indexOf(this.query.cat) !== -1;
					});
				}else if(this._index === 1){
					this.query.fra = this.$route.query.txt;
					this.sortArr = this.sumArr.filter(i=>{
						return i.fra && i.fra.indexOf(this.query.fra) !== -1;
					});
				}else if(this._index === 2){
					this.query.frt = this.$route.query.txt;
					this.sortArr = this.sumArr.filter(i=>{
						return i.frt && i.frt.indexOf(this.query.frt) !== -1;
					});
				};
			});
			//获取图片数据
			this.$http.get("../../static/getUrl2.json").then(res=>{
				this.urlData = res.body;
			});
		},
		components: {
			goBackComponent
		},
		methods: {
			filmSearchSort (e,index){
				$(e.target).addClass("film-search-sort-item-active").siblings().removeClass("film-search-sort-item-active");
				index===0?this.query.cat = e.target.innerText:(index===1?this.query.fra = e.target.innerText:this.query.frt = e.target.innerText);
				this.sortArr = this.sumArr;
				for(var x in this.query){
					if(this.query[x]){
						this.sortArr = this.sortArr.filter(i=>{
							if(this.query[x] === "全部"){
								return true;
							}
							return i[x] && i[x].indexOf(this.query[x]) !== -1;
						})
					}
				}
			}
		}
	}
</script>
<style lang="css">
	@import "../styles/SortSearch.css";
	.FilmSortPage-title{
		position:relative;
		height:4rem;
		line-height:4rem;
		background:red;
		color:#fff;
		text-align:center;
		font-size:1.8rem;
	}
	.FilmSortPage-icon{
		position:absolute;
		right:0;
		width:4rem;
		height:4rem;
		background:url(../assets/search.png) no-repeat center;
		background-size:auto 50%;
	}
	.film-search-sort-allitem{
		height: 2rem;
	    margin-left:1rem;
	    padding:0 1.5rem;
		border-radius:2rem;
		text-align:center;
    	line-height:2rem;
	}
	.FilmSortPage-item{
		position:relative;
		background-size:auto 60% !important;
		line-height:2rem;
		color:#999;
		text-align:left;
		padding:1rem;
		padding-left:20%;
		font-size:1.4rem;
		border-top:1px solid #efefef;
	}
	.FilmSortPage-item-cn{
		color:#000;
	}
	.FilmSortPage-item-score{
		position:absolute;
		right:1rem;
		top:1rem;
		color:orange;
		font-size:1.8rem;
	}
</style>