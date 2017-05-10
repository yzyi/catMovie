<template lang="html">
	<div class="">
		<div class="mall">
				<div class="malltop">
					<span class="close" onclick="history.back()">X</span>
					商城
				</div>
		</div>
		<div class="sou">
			<div class="sou-inner">
				<input type="text" class="sou-r" placeholder="搜索商品">
			</div>
		</div>
		<div class="barn">
			<img src="../assets/bg2.png" alt="">
		</div>
		<ul class="menu">
			<li class="menuitems" v-for="x in items">
				{{x.txt}}
				<!-- <img :src="x.imgs" alt=""> -->
			</li>
		</ul>
		<ul class="main">
			<li class="mainLiist">
				<p class="main-title">格鲁特</p>
				<div class="main-btm">
					<div class="inner-left">
						<p class="main-name">宝宝摆件</p>
						<p class="mian-price">59元</p>
						<img src="../assets/bg5.png" alt="">
					</div>
					<div class="inner-rigths">
						<div class="right-top">
							<div class="right-top-left">
								<p class="p-name">花盆格鲁特</p>
								<p class="p-price">88元</p>
							</div>
							<img src="../assets/bg6.png" alt="" class="p-img">
						</div>
						<div class="right-top">
							<div class="right-top-left">
								<p class="p-name">花盆格鲁特</p>
								<p class="p-price">88元</p>
							</div>
							<img src="../assets/bg8.png" alt="" class="p-img">
						</div>
					</div>
				</div>
			</li>
			<li class="mainLiist">
				<p class="main-title">格鲁特</p>
				<div class="main-btm">
					<div class="inner-left">
						<p class="main-name">宝宝摆件</p>
						<p class="mian-price">59元</p>
						<img src="../assets/bg5.png" alt="">
					</div>
					<div class="inner-rigths">
						<div class="right-top">
							<div class="right-top-left">
								<p class="p-name">花盆格鲁特</p>
								<p class="p-price">88元</p>
							</div>
							<img src="../assets/bg6.png" alt="" class="p-img">
						</div>
						<div class="right-top">
							<div class="right-top-left">
								<p class="p-name">花盆格鲁特</p>
								<p class="p-price">88元</p>
							</div>
							<img src="../assets/bg8.png" alt="" class="p-img">
						</div>
					</div>
				</div>
			</li>
			<li class="mainLiist">
				<p class="main-title">格鲁特</p>
				<div class="main-btm">
					<div class="inner-left">
						<p class="main-name">宝宝摆件</p>
						<p class="mian-price">59元</p>
						<img src="../assets/bg5.png" alt="">
					</div>
					<div class="inner-rigths">
						<div class="right-top">
							<div class="right-top-left">
								<p class="p-name">花盆格鲁特</p>
								<p class="p-price">88元</p>
							</div>
							<img src="../assets/bg6.png" alt="" class="p-img">
						</div>
						<div class="right-top">
							<div class="right-top-left">
								<p class="p-name">花盆格鲁特</p>
								<p class="p-price">88元</p>
							</div>
							<img src="../assets/bg8.png" alt="" class="p-img">
						</div>
					</div>
				</div>
			</li>
		</ul>
			
							
			

					
	</div>
</template>
			
		
 
<script>
	import Vue from "vue"
	import VueResource from "vue-resource"
	Vue.use(VueResource)
	export default{
		data (){
			return {
				items: [{
					txt: "数码",
					imgs: "../assets/bg4.png"
				},{
					txt: "高玩专区",
					imgs: "../assets/bg4.png"
				},{
					txt: "玩具",
					imgs: "../assets/bg4.png"
				},{
					txt: "生活",
					imgs: "../assets/bg4.png"
				},{
					txt: "服饰",
					imgs: "../assets/bg4.png"
				},{
					txt: "西游",
					imgs: "../assets/bg4.png"
				},{
					txt: "机器猫",
					imgs: "../assets/bg4.png"
				},{
					txt: "魔兽",
					imgs: "../assets/bg4.png"
				},{
					txt: "美队",
					imgs: "../assets/bg4.png"
				},{
					txt: "星球大战",
					imgs: "../assets/bg4.png"
				}]
				
			}
		},
		mounted (){
			// 在这里做http数据请求
		}
	}
</script>
<style lang="css">
*{padding:0;margin:0;}
html{
	font-size:62.5%;
}
.mall{
	width: 100%;
	height:6.7rem;
	background:red;
	padding-top:3.3rem;
	
}
.malltop{
	width: 17rem;
	height: 3.5rem;	
	line-height:3.5rem;
	font-size:3rem;
	font-weight:bold;
	color:white;
}
.sou{
	width: 100%;
	height: 10.4rem;
	display:flex;
	align-items:center;
	justify-content:center;
	margin-top: 2rem;
}
	
.sou-inner{
	width:90%;
	height:6.0rem;
	color:#a9a9a9;
	font-size:3rem;
	border-radius:4.0rem;
	text-align: center;
	line-height:6;
	border:0.1rem solid #cdcdcd;
	
}
.sou-r{
	display:inline-block;
	width:100%;
	height:6.0rem;
	border-radius:4.0rem;
	background:url(../assets/search.png) no-repeat; 
	background-position:30rem 2rem;
	vertical-align:top;
	outline:none;
	border:0;
	text-indent:32rem;
	font-size:3rem;
}
.barn{
margin-top: 2rem;
width: 100%;
height: 38.4rem;
}
.barn img{
	width: 100%;
	height: 100%;
}	
.menu{
	display:flex;
	width: 100%;
	height: 32.0rem;
	border:0.3rem solid #e8e8e8;
	flex-wrap: wrap;
	border-bottom:2.2rem solid #f4f4f4;
}
.menuitems{
	display:flex;
	width: 20%;
	height: 50%;
	justify-content: center;
	background:url(../assets/bg4.png) no-repeat;
	background-position:5rem 4rem;
	line-height:23rem;
}
.menuitems:first-of-type{
	background:url(../assets/bg4.png) no-repeat;
	background-position:5rem 4rem;
}
.menuitems:nth-of-type(2){
	background:url(../assets/bg9.png) no-repeat;
	background-position:5rem 4rem;
}
.menuitems:nth-of-type(3){
	background:url(../assets/bg10.png) no-repeat;
	background-position:5rem 4rem;
}
.menuitems:nth-of-type(4){
	background:url(../assets/bg11.png) no-repeat;
	background-position:5rem 4rem;
}
.menuitems:nth-of-type(5){
	background:url(../assets/bg12.png) no-repeat;
	background-position:5rem 4rem;
}
.menuitems:nth-of-type(6){
	background:url(../assets/bg13.png) no-repeat;
	background-position:5rem 4rem;
}
.menuitems:nth-of-type(7){
	background:url(../assets/bg14.png) no-repeat;
	background-position:5rem 4rem;
}
.menuitems:nth-of-type(8){
	background:url(../assets/bg15.png) no-repeat;
	background-position:5rem 4rem;
}
.menuitems:nth-of-type(9){
	background:url(../assets/bg16.png) no-repeat;
	background-position:5rem 4rem;
}
.menuitems:nth-of-type(10){
	background:url(../assets/bg17.png) no-repeat;
	background-position:5rem 4rem;
}
.main{
	width: 100%;
	display:flex;
	flex-wrap:wrap;

}
.mainLiist{
	width: 100%;
	height: 49.7rem;
	float:left;
	border-bottom:2.2rem solid #f4f4f4;

	
}
.main-title{
	width: 100%;
	height: 7.0rem;
	text-align:left;
	font-size:2.2rem;
	text-indent:2.2rem;
	line-height:7rem;
	border-top: 0.1rem solid #ececec;
}
.main-btm{
	display:flex;
	width: 100%;
	height: 42.2rem;
	border-top:0.1rem solid #ececec;
	border-bottom: 0.1rem solid #ececec;
	text-align:left;
}
.inner-left{
	width: 30.2rem;
	height: 100%;
	text-indent:2.0rem;
}
.inner-left img{
	display: inline-block;
	margin-top:3.8rem;
	margin-left:2rem;
}
.main-name{
	height: 7.0rem;
	line-height:7rem;
	font-size: 2.8rem;
	font-weight:bold;
	text-align:left;
}
.main-price{
	font-size:2.0rem;
	color:#9a9a9a;
}
.inner-rigths{
	width:51.5rem;
	height: 100%;
	border-left: 0.1rem solid #ececec;
	text-align:left;
}
.right-top{
	width: 97%;
	height: 50%;
	padding-left:2rem;
	border-top:0.1rem solid #ebebeb;
}
.right-top-left{
	width: 50%;
	height: 100%;
	background-color:white;
	float:left;
}	
.p-name{
	line-height:7rem;
	font-size: 2.8rem;
	font-weight:bold;
}
.p-price{
font-size:2.0rem;
	color:#9a9a9a;
}
.p-img{
	float:left;
	width: 50%;
	height: 100%;
}

	
	
	

	

	


	
	





	
	
	

	

	

	


	

</style>