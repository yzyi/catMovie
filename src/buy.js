import Vue from "vue"
 var eventTicked = new Vue({
 	data:function(){
 		return {
 			todos:{}
 		}
 	},
 	// 创建钩子监听add事件
 	created:function(){
 		this.$on("add",this.addTodo)
 	},
 	beforeDestroy:function(){
 		this.$off("add",this.addTodo);
 	},
 	methods:{
 		addTodo:function(newTodo){
 			this.todos= newTodo
 		}
 		
 	}
 })
 export default eventTicked