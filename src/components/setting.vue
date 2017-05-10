<template lang="html">
	<div class="bd2">
		
			<div class="setting_top">
				<div class="setting_top_left" onclick="history.back()">
					<img src="../assets/fanhui.png">
				</div>
				<div class="setting_top_right">
					设置
				</div>
			</div>
			
			<!-- 下面的具体设置列表使用ul和li，利用vue进行遍历渲染 -->
			<ul class="first_ul">
				<li v-for="item in items">{{item.list}}<img src="../assets/more.png"></li>
			</ul>

			<ul class="second_ul">
				<li v-for="item_data in itemData">{{item_data.list}}<img src="../assets/more.png"></li>
			</ul>
			
			 
	</div>
</template>


<script>
	export default{
		data (){
			return {
				items : [{
					list : "清空缓存"
				}],

				itemData : [{
					list : "猫眼用户调查"
				},{
					list : "图片浏览设置"
				},{
					list : "意见反馈"
				},{
					list : "应用推荐"
				},{
					list : "检查新版本"
				},{
					list : "诊断网络"
				},{
					list : "关于"
				}]
			}
		}
	}
	
</script>
<style lang="css">
	.bd2{
		width: 100%;
		background: #f5f5f5;
		/*z-index: 999;*/
	}
	.setting_top{
		width: 100%;
		height: 10rem;
		background: #dd403b;
		font-size: 5rem;
		padding-top: 3rem;
		display: flex;
	}
	.setting_top_left{
		width: 20%;
		height: 7rem;
		border-right: 1px solid;
		margin-right: 3rem;
	}
	.setting_top_right{
		width: 80%;
		height: 100%;
		text-align: left;
		color: white;
	}
	.seconde_ul{
		margin-bottom: 30rem;
	}
	.second_ul{
		width: 100%;
		height: 100%;

	}
	.second_ul>li{
		height: 10rem;
		border-bottom: 1px solid #424655;
	}
	/*.setting_bottom{
		height: 30rem;
	}
*/
</style>